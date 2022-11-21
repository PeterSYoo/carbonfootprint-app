const BASE = 'http://localhost:3000';
const VERCEL = 'https://carbonfootprint-app.vercel.app';

export const getMessages = async (data) => {
  const response = await fetch(`${VERCEL}/api/message/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  });
  const json = await response.json();

  return json;
};

export const getMessage = async (clothesId) => {
  const response = await fetch(`${VERCEL}/api/message/${clothesId}`);
  const json = await response.json();

  if (json) return json;

  return {};
};

export const deleteMessage = async (clothesId) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(`${VERCEL}/api/message/${clothesId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};
