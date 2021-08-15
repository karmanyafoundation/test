import Image from "next/image";
import Link from "next/link";
import styles from "./section3.module.css";
export default () => {
  return (
    <div className={styles.section3}>
      <div>
        <Image
          className={styles.picture}
          src="/xavier.jpg"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h1>Message from the CEO</h1>
        <h2>Mr. Xavier Ramachandr</h2>
      </div>
      <div className={styles.body}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum{" "}
          <Link href="/">
            <a>read more</a>
          </Link>
        </p>
      </div>
    </div>
  );
};
