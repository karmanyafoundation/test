import Head from "next/head";
import NavBar from "../components/nav/navBar";
import Header from "../components/section1/Header";
import Section from "../components/Section/Section";
import FooterComponent from "../components/footer/Footer.component";
import { useState } from "react";
import data from "../components/section2/card.data";
import Section2 from "../components/section2/section2.component";
import Section3 from "../components/section3/section3.component";
import Section4 from "../components/section4/section4.component";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import BlogsComponent from "../components/blogposts/Blogs.component";
export default function Home() {
  const matches = useMediaQuery("(min-width:1300px)");
  const [showItems, setItems] = useState(true);

  const handleItems = (open) => {
    setItems((p) => !p);
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="index.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar handleItems={handleItems} resetItems={setItems} />
      {(showItems || matches) && (
        <>
          <Section bg="" className="section1">
            {" "}
            <Header />
          </Section>
          <Section bg="white" className="section1">
            {" "}
            <Section2 data={data} />
          </Section>
          <Section bg="#f3f2e7" className="section1">
            {" "}
            <Section3 />
          </Section>
          <Section bg="white" className="section1">
            {" "}
            <Section4 />
          </Section>
          <Section bg="white" className="section1">
            {" "}
            <BlogsComponent />
          </Section>
          <Section bg="white" className="section1">
            {" "}
            <FooterComponent />
          </Section>
        </>
      )}
    </div>
  );
}
