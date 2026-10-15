const API_URL = 'http://localhost:3000/api/projects';

export async function getProjects() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Не вдалося завантажити проєкти');
  }

  return await response.json();
}

export async function getProjectById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error('Не вдалося завантажити проєкт');
  }

  return await response.json();
}
