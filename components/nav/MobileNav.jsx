import Link from "next/link";
import styles from "./navBar.module.css";
import Button from "@material-ui/core/Button";
export default (isClicked) => {
  if (isClicked)
    return (
      <ul className={styles.mobilenav}>
        <li>
          <Link href="">
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Button variant="outlined" color="black" size="medium">
            Donate us
          </Button>
        </li>
      </ul>
    );
};
