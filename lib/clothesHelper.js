const BASE = 'http://localhost:3000';
const VERCEL = 'https://carbonfootprint-app.vercel.app';

export const getClothes = async () => {
  const response = await fetch(`${VERCEL}/api/clothes`);
  const json = await response.json();

  return json;
};

export const getClothe = async (clothesId) => {
  const response = await fetch(`${VERCEL}/api/clothes/${clothesId}`);
  const json = await response.json();

  if (json) return json;

  return {};
};

export const deleteClothe = async (clothesId) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(`${VERCEL}/api/clothes/${clothesId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};
