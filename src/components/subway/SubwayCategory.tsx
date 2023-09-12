import { useState } from 'react';
import { useGetStations } from '../../hooks/subway';
import { useRecoilState } from 'recoil';
import { searchKeywordState } from '../../states/search';

const SubwayCategory = () => {
  const [clickedLine, setClickedLine] = useState('1호선');
  const { data: stationsByLine } = useGetStations();
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);

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
          {stationsByLine[clickedLine].map(({ stationName }) => (
            <li key={stationName} onClick={() => setSearchKeyword(stationName)}>
              {stationName}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default SubwayCategory;
