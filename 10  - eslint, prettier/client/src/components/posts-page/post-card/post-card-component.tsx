import { generatePath, useNavigate } from 'react-router-dom';
import { routes } from '@routing';
import styles from './post-card.module.scss';

type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

export function PostCard({ id, title, body }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.postCard}>
      <h2>{title}</h2>
      <p className={styles.postCardContent}>{body}</p>
      <button
        type="button"
        onClick={() => navigate(generatePath(routes.SinglePostPage, { id }))}
      >
        More info
      </button>
    </div>
  );
}
