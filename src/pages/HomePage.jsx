import React from "react";
import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";
import Section4 from "../components/HomePage/Section4";
import Section5 from "../components/HomePage/Section5";
import Section6 from "../components/HomePage/Section6";
import Section7 from "../components/HomePage/Section7";
import Section8 from "../components/HomePage/Section8";
import Section25 from "../components/HomePage/Section25";
import Footer from '../components/common/Footer';
import Navbar from "../components/HomePage/Navbar";


const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section25 />
        <Footer />
    </div>
  );
};

export default HomePage;
