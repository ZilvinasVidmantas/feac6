import { useState } from 'react';
import { PostCard } from '../post-card';
import styles from './posts-grid.module.scss';
import { Post } from '@types';
import { useFetch } from '@hooks';

const POSTS_PER_PAGE = 10;

export function PostsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPostCount, setTotalPostCount] = useState(0);
  const pageCount = totalPostCount !== 0 ? Math.ceil(totalPostCount / POSTS_PER_PAGE) : 0;
  const { data: posts } = useFetch<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&per_page=${POSTS_PER_PAGE}`,
    (response) => setTotalPostCount(Number(response.headers.get('x-total-count'))),
  );

  if (posts === null) {
    return <div />;
  }

  return (
    <div>
      <div className={styles.pagination}>
        {[...new Array(pageCount)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
