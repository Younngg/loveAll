import { useState } from 'react';
import { Place } from '../types/place';
import PostGrid from './PostGrid';
import PlaceCategory, { ALL_CATEGORY, Category } from './place/PlaceCategory';

type Props = {
  posts: Place[];
};

const FilterablePosts = ({ posts }: Props) => {
  const [category, setCategory] = useState<Category>(ALL_CATEGORY);

  const filtered =
    category === ALL_CATEGORY
      ? posts
      : posts?.filter((place) => place[category]);

  return (
    <>
      <PlaceCategory category={category} onClick={setCategory} type='place' />
      <PostGrid posts={filtered} />
    </>
  );
};

export default FilterablePosts;
