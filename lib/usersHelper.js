import urlHelper from './urlHelper';

export const getUsers = async () => {
  const response = await fetch(urlHelper);
  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(urlHelper);
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

    const response = await fetch(urlHelper, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};
