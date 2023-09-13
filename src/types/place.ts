export type Place = {
  _id: string;
  name: string;
  position: { lat: number; lng: number };
  address: string;
  info: { description: string };
  kids: boolean;
  PWD: boolean;
};
