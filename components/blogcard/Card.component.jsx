import styles from "./card.module.css";
import Button from "@material-ui/core/Button";

export default ({ title, body, children, className, src }) => {
  return (
    <div className={`${styles.customcard} ${className}`}>
      <div className={styles.content}>
        <div className={styles.cardtitle}>
          {children} <span>{title}</span>
        </div>
        {src && <img className={styles.image} width="350px" src={src} />}
      </div>
      <Button variant="outlined" color="primary">
        {" "}
        Goto Post
      </Button>
    </div>
  );
};
