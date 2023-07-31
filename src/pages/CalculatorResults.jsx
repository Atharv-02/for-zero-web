import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Section1 from "../components/CalculatorResults/Section1";
import "../styles/calculatorResults.css";
import Section2 from "../components/CalculatorResults/Section2";
const CalculatorResults = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default CalculatorResults;
