import Container from "@material-ui/core/Container";
import styles from "./section.module.css";
export default ({ children, bg }) => {
  return (
    <div
      className={styles.section1}
      style={{
        background: bg,
      }}
    >
      {children}
    </div>
  );
};
