const BASE_URL = "https://dragonball-api.com/api";

export async function fetchCharacters(page: number, limit = 10) {
  const res = await fetch(`${BASE_URL}/characters?page=${page}&limit=${limit}`);
  return res.json();
}

export async function fetchPlanets(page: number, limit = 5) {
  const res = await fetch(`${BASE_URL}/planets?page=${page}&limit=${limit}`);
  return res.json();
}

export async function filterCharactersByName(name: string) {
  const res = await fetch(`${BASE_URL}/characters?name=${name}`);
  return res.json();
}