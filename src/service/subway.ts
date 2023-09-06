import axios from 'axios';
import {
  StationsByLine,
  SubwayAddress,
  SubwayFacilityInfo,
} from '../types/subway';

type FacilAPIResponse = {
  FACI_NM: string;
  GUBUN: string;
  LOCATION: string;
  STATION_ID: string;
  STATION_NM: string;
  STUP_LCTN: string;
  USE_YN: string;
};

type AddressAPIResponse = {
  ADRES: string;
  LINE: string;
  RDNMADR: string;
  STATN_NM: string;
  TELNO: string;
};

const SUBWAY_FACIL_API_URL = `http://openapi.seoul.go.kr:8088/${
  import.meta.env.VITE_OPEN_API_KEY
}/json/SeoulMetroFaciInfo/1/5/`;

const SUBWAY_ADDRESS_API_URL = `http://openapi.seoul.go.kr:8088/${
  import.meta.env.VITE_OPEN_API_KEY
}/json/StationAdresTelno/1/288/`;

const getSubwayFacilityInfo = async (): Promise<
  SubwayFacilityInfo[] | undefined
> => {
  try {
    const { data } = await axios.get(SUBWAY_FACIL_API_URL);

    if (data) {
      const formattedData: SubwayFacilityInfo[] =
        data.SeoulMetroFaciInfo.row.map(
          ({
            FACI_NM,
            GUBUN,
            LOCATION,
            STATION_ID,
            STATION_NM,
            STUP_LCTN,
            USE_YN,
          }: FacilAPIResponse) => {
            return {
              facilityName: FACI_NM,
              gubun: GUBUN,
              location: LOCATION,
              stationId: STATION_ID,
              stationName: STATION_NM,
              operationSection: STUP_LCTN,
              status: USE_YN,
            };
          }
        );

      return formattedData;
    }
  } catch (err) {
    console.log(err);
  }
};

const getStationsByLine = async (): Promise<StationsByLine | undefined> => {
  try {
    const { data } = await axios.get(SUBWAY_ADDRESS_API_URL);

    if (data) {
      const formattedData: SubwayAddress[] = data.StationAdresTelno.row.map(
        (info: AddressAPIResponse) => ({
          stationName: info.STATN_NM,
          line: info.LINE,
          address: info.ADRES,
        })
      );

      const stationsByLine: StationsByLine = {};

      formattedData.forEach((station) => {
        const { line, stationName, address } = station;

        if (stationsByLine[line]) {
          stationsByLine[line].push({ stationName, address });
        } else {
          stationsByLine[line] = [{ stationName, address }];
        }
      });

      console.log(stationsByLine);
      return stationsByLine;
    }
  } catch (err) {
    console.log(err);
  }
};

export { getSubwayFacilityInfo, getStationsByLine };
