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

export async function createProject(project) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  });

  if (!response.ok) {
    throw new Error('Не вдалося створити проєкт');
  }

  return response.json();
}

export async function deleteProject(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error('Не вдалося видалити проєкт');
  }
}


export async function updateProject(id, project) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(project)
  });

  if (!response.ok) {
    throw new Error('Не вдалося оновити проєкт');
  }

  return response.json();
}
