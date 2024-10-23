import { useState, useEffect } from 'react';
import { PostCard } from './post-card';
import styles from './posts-grid.module.scss';

const POSTS_PER_PAGE = 10;

export const PostsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPostCount, setTotalPostCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const pageCount = totalPostCount !== 0 ? Math.ceil(totalPostCount / POSTS_PER_PAGE) : 0;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&per_page=${POSTS_PER_PAGE}`)
      .then(response => {
        setTotalPostCount(Number(response.headers.get('x-total-count')));
        return response.json()
      })
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, [currentPage]);


  return (
    <div>
      <div className={styles.pagination}>
        {[...new Array(pageCount)].map((_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <div className={styles.postsGrid}>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

