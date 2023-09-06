import { Map } from 'react-kakao-maps-sdk';

type Props = {
  children?: React.ReactNode;
  onCreate: (map: kakao.maps.Map | undefined) => void;
};

const KakaoMap = ({ children, onCreate }: Props) => {
  return (
    <Map
      center={{ lat: 37.555167, lng: 126.970833 }}
      style={{ width: '100%', height: 'calc(100vh - 70px)' }}
      onCreate={onCreate}
    >
      {children}
    </Map>
  );
};

export default KakaoMap;
