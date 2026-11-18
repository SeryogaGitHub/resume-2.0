
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const sourceAssetsDir = path.join(root, 'src/assets')

const imageExtensions = /\.(jpe?g|png)$/i
const textExtensions = /\.(html|js|css|json|xml|txt|webmanifest)$/i

const converted = new Map()

async function getFiles(dir) {
  const result = []

  let entries

  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return result
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      result.push(...await getFiles(fullPath))
    } else {
      result.push(fullPath)
    }
  }

  return result
}

async function convertImage(input, output, publicPath) {
  await fs.mkdir(path.dirname(output), { recursive: true })

  await sharp(input)
      .webp({
        quality: 82,
        effort: 6
      })
      .toFile(output)

  converted.set(publicPath, publicPath.replace(imageExtensions, '.webp'))

  console.log(`WebP: ${publicPath}`)
}

// 1. Конвертація зображень, які вже потрапили в dist
const distFiles = await getFiles(distDir)

for (const file of distFiles) {
  if (!imageExtensions.test(file)) continue

  const relative = path.relative(distDir, file).split(path.sep).join('/')
  const output = file.replace(imageExtensions, '.webp')

  await convertImage(file, output, `/${relative}`)
}

// 2. Конвертація зображень із src/assets,
// які використовуються у вигляді звичайних URL
const sourceFiles = await getFiles(sourceAssetsDir)

for (const file of sourceFiles) {
  if (!imageExtensions.test(file)) continue

  const relative = path.relative(sourceAssetsDir, file)
  const output = path.join(
      distDir,
      'src/assets',
      relative.replace(imageExtensions, '.webp')
  )

  const publicPath = `/src/assets/${relative.split(path.sep).join('/')}`

  await convertImage(file, output, publicPath)
}

// 3. Заміна посилань у готових файлах
const outputFiles = await getFiles(distDir)

let changedReferences = 0

const replacements = [...converted.entries()]
    .sort((a, b) => b[0].length - a[0].length)

for (const file of outputFiles) {
  if (!textExtensions.test(file)) continue

  let content = await fs.readFile(file, 'utf8')
  let changed = false

  content = content.replace(
      /([^"'()\s<>;,]+)\.(jpe?g|png)([?#][^"'()\s<>;,]*)?/gi,
      (match, url, ext, suffix = '') => {
        if (/^https?:\/\//i.test(url)) return match

        const original = `${url}.${ext}`

        const entry = replacements.find(([source]) =>
            original.endsWith(source)
        )

        if (!entry) return match

        changed = true
        changedReferences++

        return `${url}.webp${suffix}`
      }
  )

  if (changed) {
    await fs.writeFile(file, content, 'utf8')
  }
}

console.log('')
console.log('Оптимізацію зображень завершено.')
console.log(`Створено WebP: ${converted.size}`)
console.log(`Замінено посилань: ${changedReferences}`)
