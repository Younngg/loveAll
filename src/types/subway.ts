export type SubwayFacilityInfo = {
  facilityName: string;
  gubun: string;
  location: string;
  stationId: string;
  stationName: string;
  operationSection: string;
  status: string;
};

export type SubwayAddress = {
  stationName: string;
  line: string;
  address: string;
};

export type StationsByLine = { [line: string]: Omit<SubwayAddress, 'line'>[] };

export type SubwayInfo = SubwayFacilityInfo & {
  position: {
    lat: number;
    lng: number;
  };
};

// export type SubwayInfo = SubwayAddress & {facilities: };
