import Link from "next/link";
import styles from "./navBar.module.css";
import Button from "@material-ui/core/Button";
import MobileNav from "./MobileNav";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Modal from "../modal/modal.component";
import { Navbar } from "react-bootstrap";

export const MyNavbar = ({ handleItems, resetItems }) => {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:1300px)");
  useEffect(() => {
    if (!matches) {
      setOpen(false);
      resetItems(true);
    }
  });
  return (
    <div className={styles.nav}>
      <nav className={styles.navbar}>
        <p>LOGO</p>
        <div className={styles.navcomp}>
          <Link href="">
            <a>About us</a>
          </Link>
          <Link href="">
            <a>Blog</a>
          </Link>
          <Link href="">
            <a>Contact</a>
          </Link>
          <Button variant="outlined" color="black" size="medium">
            Donate us
          </Button>
        </div>
        {matches && (
          <Hamburger
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(!open);
              } else {
                setOpen(!open);
              }
              handleItems();
            }}
          />
        )}
      </nav>
      {open && (
        <>
          <div className={styles.mobileparent}>
            <MobileNav />
          </div>
          <Modal />
        </>
      )}
    </div>
  );
};


export default MyNavbar;