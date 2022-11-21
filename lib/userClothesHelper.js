const BASE = 'http://localhost:3000';
const VERCEL = 'https://carbonfootprint-app.vercel.app';

export const getUserClothes = async (userId) => {
  const response = await fetch(`${BASE} /api/find/${userId}`);
  const json = await response.json();

  if (json) return json;

  return {};
};
