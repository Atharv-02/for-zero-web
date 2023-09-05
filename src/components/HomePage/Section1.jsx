import React, { useState } from "react";
import "../../styles/homepage.css";

function Section1() {
  const [email, setEmail] = useState("");
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  return (
    <div className='hero-full'>
      <div className='hero-bg-overlay'></div>
      <div className='hero-text'>
        <div className='hero-text-inner'>
          <h1 className='hero-h1'>Systemic change starts with you</h1>
          <p className='hero-p'>
            Fund carbon removal, offsets, climate policy, and conservation–all
            in one subscription.
          </p>
          <div className='hero-btn-container'>
            <input
              type='email'
              className={`hero-input `}
              placeholder='Enter the City'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            {isValidEmail(email) ? (
              <a href='http://calculator.forzero.in/'>
                <button className='btn hero-btn'>Get Started</button>
              </a>
            ) : (
              <button className='btn hero-btn'>Get Started</button>
            )}
          </div>
          <p className='small-para'>
            Join the 6,207 people who signed up this month!
          </p>
        </div>
      </div>
      <div className='hero-img'>
        <img
          src='https://projectwren.imgix.net/irrawady.png?auto=format%2Ccompress&q=35&h=800&fit=clip&ch=Height%2CDPR&dpr=2'
          alt=''
        />
      </div>
      <div
        class='btn-cont-sp'
        style={{ textAlign: "center", marginBottom: "1rem" }}
      >
        <a href='http://calculator.forzero.in/'>
          <button class='btn sp-hero'>Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default Section1;
