import axios from 'axios';
import { Place } from '../types/place';

const getPlaces = async (): Promise<Place[] | undefined> => {
  try {
    const { data } = await axios.get(
      'https://love-all.azurewebsites.net/api/main/places'
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getPlaces };
