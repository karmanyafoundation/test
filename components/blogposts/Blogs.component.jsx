import CardComponent from "../blogcard/Card.component";
import { useEffect, useState } from "react";
import styles from "./blog.module.css";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { StylesContext } from "@material-ui/styles";
export default () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://karmanya.herokuapp.com/blog");
    const data = await response.json();
    console.log(data);
    setData(data);
  }, []);
  return (
    <div className={styles.blog}>
      {data?.slice(0, 4)?.map((d) => (
        <CardComponent
          title={d?.title}
          body={ReactHtmlParser(d?.body.slice(0, 20))}
          src={d?.imageURL}
        />
      ))}
    </div>
  );
};
