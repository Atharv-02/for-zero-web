import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Section1 from "../components/OurProjects/Section1";
import Section3 from "../components/OurProjects/Section3";
import "../styles/ourProjects.css";
const OurProjects = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section3 />
    </div>
  );
};

export default OurProjects;
