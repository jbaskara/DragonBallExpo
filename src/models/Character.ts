export interface Character {
  id: number;
  name: string;
  race: string;
  gender: string;
  originPlanet?: { name: string };
  image: string;
}