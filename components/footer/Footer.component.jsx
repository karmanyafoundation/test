import Link from "next/link";
import styles from "./footer.module.css";
export default () => {
  return (
    <div className={styles.footer}>
      <hr />

      <p className={styles.copyright}>
        &#169; Copyright all rights reserved{" "}
        <Link href="">
          <a>qleap labs</a>
        </Link>
      </p>
    </div>
  );
};
