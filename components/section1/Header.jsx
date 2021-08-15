import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";
import styles from "./images/header.module.css";


function Header() {
  const headerImage1 = "/headerImage1.jpg";
  const headerImage2 = "/headerImage2.jpg";
  const headerImage3 = "/headerImage3.jpg";

  const [headerImage, setHeaderImage] = useState(headerImage1);

  const slideshow = () => {
    if (headerImage === headerImage1) {
      setHeaderImage(headerImage2);
    } else if (headerImage === headerImage2) {
      setHeaderImage(headerImage3);
    } else {
      setHeaderImage(headerImage1);
    }
  };

  setTimeout(slideshow, 4000);

  return (
    <>
      <div className={styles.fullHeader}>
        <div className={styles.header}>
          <div className={styles.textHolder}>
            <h1>A world where no child's life is torn apart by war.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates incidunt, mollitia beatae eaque temporibus veritatis
              consequatur. Corrupti autem est perspiciatis.
            </p>
          </div>
          <div id={styles.mapOverlay}>
            <img
              src="/nepalMap.png"
              alt="nepal-map-overlay"
              style={{ backgroundImage: `url("${headerImage}")` }}
            />
          </div>
        </div>
        <section id={styles.icon}>
          <a href="#" id={styles.downwardArrow}>
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </a>
        </section>
      </div>
    </>
  );
}

export default Header;
