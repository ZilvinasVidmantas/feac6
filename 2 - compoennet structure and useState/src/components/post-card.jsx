import styles from './post-card.module.scss';

export const PostCard = ({ title, body }) => {
  return (
    <div className={styles.postCard}>
      <h2 >{title}</h2>
      <p className={styles.postCardContent}>{body}</p>
    </div>
  );
};
