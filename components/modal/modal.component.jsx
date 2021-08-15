import styles from "./modal.module.css";
export default ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};
