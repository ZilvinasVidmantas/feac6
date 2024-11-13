import { useFetch } from '@hooks';
import { useParams } from 'react-router-dom';
import { Post } from '@types';

export function SinglePostPage() {
  const { id } = useParams();
  const { data: post } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (post === null) {
    return <div />;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <pre>
          {JSON.stringify(post, null, 4)}
        </pre>
      </div>
    </div>
  );
}
