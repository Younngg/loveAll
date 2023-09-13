import { useEffect, useState } from 'react';
import { SubwayInfo } from '../../types/subway';
import KakaoMap from './KakaoMap';
import KakaoMapMarkers from './KakaoMapMarkers';
import { useRecoilState } from 'recoil';
import { searchKeywordState } from '../../states/search';
import { Place } from '../../types/place';

type Props = {
  places: Place[] | undefined;
};

const Map = ({ places }: Props) => {
  const [map, setMap] = useState<kakao.maps.Map>();
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    const markers = [];

    if (searchKeyword) {
      ps.keywordSearch(`${searchKeyword}역`, (result, status, pagination) => {
        if (status === kakao.maps.services.Status.OK) console.log(result);
      });
    }
  }, [map, searchKeyword]);

  return (
    <>
      <KakaoMap onCreate={setMap}>
        {places && <KakaoMapMarkers places={places} />}
      </KakaoMap>
    </>
  );
};

export default Map;
