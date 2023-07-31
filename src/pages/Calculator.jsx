import React from "react";
import Navbar from "../components/HomePage/Navbar";
import "../styles/calculator.css";
import Section1 from "../components/Calculation/Section1";
const Calculator = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
    </div>
  );
};

export default Calculator;
