import { Map } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
    ></Map>
  );
};

export default KakaoMap;
