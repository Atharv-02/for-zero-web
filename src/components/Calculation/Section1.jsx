import React, { useEffect, useState } from "react";
import mailBox from "../../assets/cloud_mailbox.avif";
import family from "../../assets/cloud_family.avif";
import carImg from "../../assets/cloud_car.avif";
import plane from "../../assets/cloud_plane.avif";
import veggieImg from "../../assets/cloud_veggies.avif";
import houseImg from "../../assets/cloud_house.avif";
import dogImg from "../../assets/cloud_pet.avif";
import sofaImg from "../../assets/cloud_couch.avif";
import clothesImg from "../../assets/cloud_clothes.avif";
import supplies from "../../assets/cloud_supplies.avif";
import services from "../../assets/cloud_services.avif";
import electicity from "../../assets/cloud_battery.avif";
import renewables from "../../assets/cloud_renewables.avif";
import naturalGas from "../../assets/cloud_natural_gas.avif";
import busImg from "../../assets/cloud_bus.avif";
import Part1 from "./Form/Part1";
import Part4 from "./Form/Part4";
import Part5 from "./Form/Part5";
import Part6 from "./Form/Part6";
import Part7 from "./Form/Part7";
import Part2 from "./Form/Part2";
import Part3 from "./Form/Part3";
import Part8 from "./Form/Part8";
import Part10 from "./Form/Part10";
import Part11 from "./Form/Part11";
import Part12 from "./Form/Part12";
import Part13 from "./Form/Part13";
import Part14 from "./Form/Part14";
import CarSp from "./Form/CarSp";
const Section1 = () => {
  const [cars, setCars] = useState();
  const [displayVal, setDisplayVal] = useState(0);
  const [formResponse, setFormResponse] = useState({
    pincode: null,
    household: null,
    cars: [],
    short_flight: null,
    long_flight: null,
    diet: null,
    home_size: null,
  });
  const [carTypes, setCartTypes] = useState([]);
  const [carImage, setCarImage] = useState([]);
  const [activeFormIndex, setActiveFormIndex] = useState(0);
  const handleIconClick = (index) => {
    setActiveFormIndex(index);
    // Setting the active form index when an icon is clicked
  };
  const form = [
    <Part1
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part2
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,

    <Part3
      setCars={setCars}
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    ...carTypes,
    <Part4
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part5
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part6
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part7
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part8 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part10 setDisplayVal={setDisplayVal} displayVal={displayVal} />,
    <Part10 />,
    <Part11
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part12
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part13
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
    <Part14
      setDisplayVal={setDisplayVal}
      displayVal={displayVal}
      formResponse={formResponse}
      setFormResponse={setFormResponse}
    />,
  ];
  console.log(form);

  const [currCar, setCurrCar] = useState(1);
  useEffect(() => {
    for (let i = 0; i < cars; i++) {
      setCartTypes([
        ...carTypes,
        <CarSp
          info={{ type: null, miles_driven: null, miles_perweek: null }}
          formResponse={formResponse}
          setFormResponse={setFormResponse}
        />,
      ]);
      setCarImage([{ imgSrc: carImg, label: `car ${i + 1}` }]);
    }
    console.log(carTypes);
  }, [cars]);
  return (
    <div className='calc-full'>
      {console.log(displayVal)}
      <div className='side-icons-inner'>
        {[
          { imgSrc: mailBox, label: "Zipcode" },
          { imgSrc: family, label: "Household" },
          { imgSrc: carImg, label: "Cars" },
          ...carImage,
          { imgSrc: plane, label: "Short Flights" },
          { imgSrc: plane, label: "Long Flights" },
          { imgSrc: veggieImg, label: "Diet" },
          { imgSrc: houseImg, label: "Home Size" },
          { imgSrc: dogImg, label: "Pets" },
          { imgSrc: busImg, label: "Public Transit" },
          { imgSrc: naturalGas, label: "Natural Gas" },
          { imgSrc: mailBox, label: "Finish" },
        ].map((icon, index) => (
          <div
            key={index}
            className={`side-icon ${activeFormIndex === index ? "normal" : ""}`}
            onClick={() => handleIconClick(index)}
          >
            <img src={icon.imgSrc} alt='' />
            <h2>{icon.label}</h2>
          </div>
        ))}
      </div>
      {form[activeFormIndex]}
      <div className='calc-result-box'>
        <div className='inner-result'>
          <h1>Your Carbon footprint</h1>
          <h1 className='large-data'>19</h1>
          <p>
            tons of CO<sub>2</sub>per year
          </p>
          <em>
            That's <strong>74% more than</strong> the United States average.
          </em>
        </div>
      </div>
    </div>
  );
};

export default Section1;
