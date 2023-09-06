import { useEffect, useState } from 'react';
import { SubwayInfo } from '../../types/subway';
import KakaoMap from './KakaoMap';
import KakaoMapMarkers from './KakaoMapMarkers';

const Map = () => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const [markers, setMarkers] = useState<SubwayInfo[]>([]);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    const markers = [];

    ps.keywordSearch('가산디지털단지역', (result, status, pagination) => {
      if (status === kakao.maps.services.Status.OK) console.log(result);
    });
  }, [map]);

  return (
    <>
      <KakaoMap onCreate={setMap}>
        <KakaoMapMarkers markers={markers} />
      </KakaoMap>
    </>
  );
};

export default Map;
