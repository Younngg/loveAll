import { MapMarker } from 'react-kakao-maps-sdk';
import { SubwayInfo } from '../../types/subway';
import { Place } from '../../types/place';

const KakaoMapMarkers = ({ places }: { places: Place[] }) => {
  // const markerImageSrc =
  //   'https://res.cloudinary.com/dv6tzjgu4/image/upload/v1672120458/fdaqrfwueb7frko4mudb.png';

  // const imageSize = { width: 22, height: 22 };

  return (
    <>
      {places &&
        places.map((place) => (
          <MapMarker
            key={`${place.position.lat}, ${place.position.lng}`}
            position={place.position}
            // onClick={() =>
            //   setInfoSheetState((prev) => ({ ...prev, isOpen: true, place }))
            // }
          />
        ))}
    </>
  );
};

export default KakaoMapMarkers;
