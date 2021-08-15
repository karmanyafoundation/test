import Card from "../card/card.component";
import Image from "next/image";
import styles from "./section2.module.css";
export default ({ data }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.sec2}>
        <div className={styles.first}>
          {data.slice(0, 2).map((d) => (
            <Card className={styles.card} title={d.title} body={d.body}>
              <Image src={d.src} width={60} height={60} />
            </Card>
          ))}
        </div>
        <div>
          {data.slice(2).map((d) => (
            <Card title={d.title} body={d.body}>
              <Image src={d.src} width={60} height={60} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
