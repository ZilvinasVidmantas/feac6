import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/use-fetch';

export function SinglePostPage() {
  const { postId } = useParams();
  const { data: post } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

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
