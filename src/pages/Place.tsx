import { Link } from 'react-router-dom';
import FilterablePosts from '../components/FilterablePosts';
import { useGetPlaces } from '../hooks/place';

const Place = () => {
  const { data: places } = useGetPlaces();

  return (
    <section className='max-w-screen-lg mx-auto'>
      {places && <FilterablePosts posts={places} />}
      <Link to='/place/write'>글쓰기</Link>
    </section>
  );
};

export default Place;
