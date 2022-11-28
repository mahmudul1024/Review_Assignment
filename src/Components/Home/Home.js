import React from "react";
import { useLoaderData } from "react-router-dom";
import Section1 from "../Section/Section1";
import Section2 from "../Section/Section2";
import Services from "../Services/Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
