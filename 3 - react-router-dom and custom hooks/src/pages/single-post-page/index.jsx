import React from "react";
import { useParams } from "react-router-dom";


export function SinglePostPage() {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const fetchedPost = await response.json();
      setPost(fetchedPost);
      } catch (error) {
      console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [postId])

  if(post === null) {
    return <div></div>
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