import { Link } from 'react-router-dom';
import { Place } from '../types/place';

type Props = {
  post: Place;
};

const PostCard = ({ post }: Props) => {
  const { address, name, _id } = post;
  return (
    <Link to={`/place/${_id}`}>
      <li className='overflow-hidden shadow-lg'>
        <div className='w-full h-56 bg-gray-100'></div>
        <div className='p-4 mb-2 flex flex-col items-center'>
          <h3 className='font-bold mb-2'>{name}</h3>
          <p className='w-full text-center mb-2 text-sm truncate'>{address}</p>
          <span className='text-xs bg-green-100 px-2 w-fit rounded-lg'>
            category
          </span>
        </div>
      </li>
    </Link>
  );
};

export default PostCard;
