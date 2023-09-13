import { FaWheelchair } from 'react-icons/fa';
import { TbMoodKid } from 'react-icons/tb';

export type Category = 'all' | 'PWD' | 'kids';

type Props = {
  onClick: (category: Category) => void;
  category: Category;
  type: 'home' | 'places';
};

export const ALL_CATEGORY = 'all';

const HOME_STYLE =
  'w-12 h-12 bg-white border-solid border border-blue-500 rounded-lg';

const PLACES_STYLE =
  'w-12 h-12 bg-white border-solid border border-blue-500 rounded-lg';

const PlaceCategory = ({ onClick, category, type }: Props) => {
  return (
    <ul
      className={`${
        type === 'home' ? 'z-10 absolute top-3 left-3' : ''
      } flex text-sm gap-3`}
    >
      <li>
        <button
          className={`${type === 'home' ? HOME_STYLE : PLACES_STYLE} ${
            category === ALL_CATEGORY && 'bg-blue-600 text-white'
          }`}
          onClick={() => onClick(ALL_CATEGORY)}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={`${
            type === 'home' ? HOME_STYLE : PLACES_STYLE
          } flex flex-col justify-center items-center ${
            category === 'PWD' && 'bg-blue-600 text-white'
          }`}
          onClick={() => onClick('PWD')}
        >
          <FaWheelchair size={20} />
          <span>장애인</span>
        </button>
      </li>
      <li>
        <button
          className={`${
            type === 'home' ? HOME_STYLE : PLACES_STYLE
          } flex flex-col justify-center items-center ${
            category === 'kids' && 'bg-blue-600 text-white'
          }`}
          onClick={() => onClick('kids')}
        >
          <TbMoodKid size={20} />
          <span>유아</span>
        </button>
      </li>
    </ul>
  );
};

export default PlaceCategory;
