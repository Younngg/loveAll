import { useState } from 'react';
import Map from '../components/map/Map';
import SubwayCategory from '../components/subway/SubwayCategory';
import { useGetSubwayFacilInfo } from '../hooks/subway';
import { useGetPlaces } from '../hooks/place';
import PlaceCategory, {
  ALL_CATEGORY,
  Category,
} from '../components/place/PlaceCategory';

const Home = () => {
  const [category, setCategory] = useState<Category>(ALL_CATEGORY);

  const { data: facilInfo } = useGetSubwayFacilInfo();
  const { data: places } = useGetPlaces();

  const filtered =
    category === ALL_CATEGORY
      ? places
      : places?.filter((place) => place[category]);

  return (
    <section className='relative'>
      <PlaceCategory type='home' onClick={setCategory} category={category} />
      {/* <SubwayCategory /> */}
      <Map places={filtered} />
    </section>
  );
};

export default Home;
