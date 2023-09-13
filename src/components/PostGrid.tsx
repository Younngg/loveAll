import { Place } from '../types/place';
import PostCard from './PostCard';

type Props = {
  posts: Place[];
};

const PostGrid = ({ posts }: Props) => {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 grow'>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
