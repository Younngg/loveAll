import { useQuery } from '@tanstack/react-query';
import { getPlaces } from '../service/place';

const useGetPlaces = () => {
  return useQuery({ queryKey: ['places'], queryFn: getPlaces });
};

export { useGetPlaces };
