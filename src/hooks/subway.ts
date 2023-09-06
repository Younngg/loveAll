import { useQuery } from '@tanstack/react-query';
import { getStationsByLine, getSubwayFacilityInfo } from '../service/subway';

const useGetSubwayFacilInfo = () => {
  return useQuery({
    queryKey: ['subwayFacil'],
    queryFn: getSubwayFacilityInfo,
  });
};

const useGetStations = () => {
  return useQuery({
    queryKey: ['subwayAddress'],
    queryFn: getStationsByLine,
  });
};

export { useGetSubwayFacilInfo, useGetStations };
