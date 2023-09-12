import { useState } from 'react';
import Map from '../components/map/Map';
import SubwayCategory from '../components/subway/SubwayCategory';
import { useGetSubwayFacilInfo } from '../hooks/subway';

const Home = () => {
  const { data: facilInfo } = useGetSubwayFacilInfo();

  return (
    <div className=''>
      <SubwayCategory />
      <Map />
    </div>
  );
};

export default Home;
