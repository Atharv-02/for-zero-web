import React from "react";

const CarSp = ({ info, setFormResponse, formResponse }) => {
  return (
    <div className='part part-4'>
      <div className='form-top'>
        <h1>Car 1</h1>
        <p>Think online shopping and trips to the mall.</p>
      </div>
      <h1>What type of car is car1</h1>
      <div className='form-choices car'>
        <div className='choice'>
          <h3>Gasoline</h3>
        </div>
        <div className='choice'>
          <h3>Hybrid</h3>
        </div>
        <div className='choice'>
          <h3>Electric</h3>
        </div>
      </div>
      <h1>How many miles per gallon does Car 1 get?</h1>
      <div className='form-choices car'>
        <div className='choice'>
          <h3>Guzzler</h3>
        </div>
        <div className='choice'>
          <h3>Average</h3>
        </div>

        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
      <h1>How many miles does your household drive each week in Car 1?</h1>
      <div className='form-choices car'>
        <div className='choice'>
          <h3>Rarely</h3>
          <p>50 mi</p>
        </div>
        <div className='choice'>
          <h3>Average</h3>
          <p>22 mi</p>
        </div>
        <div className='input-choice'>
          <input type='text' name='' id='' placeholder='Enter a Zipcode' />
        </div>
      </div>
      <button
        onClick={() => {
          console.log(formResponse);
          const c = formResponse.cars;
          c.push(info);
          setFormResponse({ ...formResponse, cars: c });
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default CarSp;
