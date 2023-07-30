import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Section1 from '../components/OurProjects/Section1'
import Section4 from '../components/OurProjects/Section4'
import Section3 from "../components/OurProjects/Section3";
import "../styles/ourProjects.css";
import Section5 from '../components/OurProjects/Section5';

const OurProjects = () => {
  return (
    <div>
        <Navbar />
        <Section1 />
        <Section3 />
        <Section4 />
        <Section5 />
    </div>
  );
};

export default OurProjects;
