import React from "react";
import Section1 from "../components/OurApproach/Section1";
import "../styles/ourApproach.css";
import Footer from "../components/common/Footer";

import Section6 from "../components/HomePage/Section6";
import Navbar from "../components/HomePage/Navbar";

const OurApproach = () => {
  return (
    <div>
      <Navbar params={"our-approach"} />
      <Section1 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default OurApproach;
