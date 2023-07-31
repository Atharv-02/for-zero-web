import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Section1 from '../components/OurProjects/Section1'
import Section4 from '../components/OurProjects/Section4'
import Section3 from "../components/OurProjects/Section3";
import "../styles/ourProjects.css";
import Section5 from '../components/OurProjects/Section5';
import Section6 from '../components/OurProjects/Section6';
import Section7 from '../components/OurProjects/Section7';
import Footer from '../components/common/Footer';

const OurProjects = () => {
  return (
    <div>
        <Navbar />
        <Section1 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer/>
    </div>
  );
};

export default OurProjects;
