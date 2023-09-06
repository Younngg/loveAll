import { useEffect, useState } from 'react';
import Map from '../components/Map/Map';
import SubwayCategory from '../components/Map/SubwayCategory';
import { useGetSubwayFacilInfo } from '../hooks/subway';
import { getStationsByLine } from '../service/subway';

const Home = () => {
  const [keyword, setKeyword] = useState('가산디지털단지역');
  const { data: facilInfo } = useGetSubwayFacilInfo();

  return (
    <div className=''>
      <SubwayCategory />
      <Map />
    </div>
  );
};

export default Home;
