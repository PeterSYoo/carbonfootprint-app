const BASE_URL = 'http://localhost:3000';
const VERCEL_URL = 'https://carbonfootprint-app.vercel.app';

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;

  return {};
};

export const updateUser = async (userId, formData) => {
  try {
    const Options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
