import { useState } from 'react';
import { useGetStations } from '../../hooks/subway';

const SubwayCategory = () => {
  const [clickedLine, setClickedLine] = useState('1호선');
  const { data: stationsByLine } = useGetStations();

  if (stationsByLine)
    return (
      <div className='flex gap-2'>
        {Object.keys(stationsByLine)
          .sort()
          .map((line) => (
            <p key={line} onClick={() => setClickedLine(line)}>
              {line}
            </p>
          ))}
        <ul>
          {stationsByLine[clickedLine].map((station) => (
            <li key={station.stationName}>{station.stationName}</li>
          ))}
        </ul>
      </div>
    );
};

export default SubwayCategory;
