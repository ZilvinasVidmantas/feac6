import { getCategories } from '@api';
import { Category } from '@types';
import React from 'react';

export function HomePage() {
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  return (
    <>
      <div>HomePage</div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </>
  );
}
