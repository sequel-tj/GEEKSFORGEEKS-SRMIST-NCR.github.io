import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Banner from "../components/Banner/Banner";
import Faq from "../components/Faq/faq";
import Confetti from "react-confetti";
import "./style.css";
import { useWindowSize } from "react-use/lib/";

const IndexPage = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Banner />
        <Confetti width={width} height={height}/>
        <Home />
        <About />
        <Team />
        <Faq />
      </Layout>
    </>
  );
};

export default IndexPage;
