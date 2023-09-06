import { MapMarker } from 'react-kakao-maps-sdk';
import { SubwayInfo } from '../../types/subway';

const KakaoMapMarkers = ({ markers }: { markers: SubwayInfo[] }) => {
  // const markerImageSrc =
  //   'https://res.cloudinary.com/dv6tzjgu4/image/upload/v1672120458/fdaqrfwueb7frko4mudb.png';

  // const imageSize = { width: 22, height: 22 };

  return (
    <>
      {markers.map((marker) => (
        <MapMarker
          key={`${marker.position.lat}, ${marker.position.lng}`}
          position={marker.position}
          // onClick={() =>
          //   setInfoSheetState((prev) => ({ ...prev, isOpen: true, place }))
          // }
        />
      ))}
    </>
  );
};

export default KakaoMapMarkers;
