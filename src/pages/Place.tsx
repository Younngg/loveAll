import FilterablePosts from '../components/FilterablePosts';
import { useGetPlaces } from '../hooks/place';

const Place = () => {
  const { data: places } = useGetPlaces();

  return <section>{places && <FilterablePosts posts={places} />}</section>;
};

export default Place;
