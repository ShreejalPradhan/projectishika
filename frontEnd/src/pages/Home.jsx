import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../context/BestSeller";
import OurPolicies from "../components/OurPolicies";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicies />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
