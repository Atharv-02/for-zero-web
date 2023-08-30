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
      <p className='our-app-bottom'>
        We also invest heavily in marketing not just to grow Forzero, but to
        grow the climate movement. We have sponsored hundreds of creators to
        talk about climate change, and anticipate that as we grow we’ll be
        raising millions of dollars to launch much needed marketing campaigns to
        bring awareness to climate solutions.
      </p>
      <Footer />
    </div>
  );
};

export default OurApproach;
