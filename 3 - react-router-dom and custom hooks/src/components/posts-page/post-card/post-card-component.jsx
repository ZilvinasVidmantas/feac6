import { useNavigate } from 'react-router-dom';
import styles from './post-card.module.scss';

export const PostCard = ({ id, title, body }) => {
  const navigate = useNavigate();


  return (
    <div className={styles.postCard}>
      <h2 >{title}</h2>
      <p className={styles.postCardContent}>{body}</p>
      <button onClick={() => navigate(`/posts/${id}`)}>More info</button>
    </div>
  );
};
