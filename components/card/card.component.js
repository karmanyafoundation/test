import styles from "./card.module.css";
export default ({ title, body, children, className }) => {
  return (
    <div className={`${styles.customcard} ${className}`}>
      <div className={styles.cardtitle}>
        {children} <span>{title}</span>
      </div>
      <div className={styles.cardbody}>{body}</div>
    </div>
  );
};
