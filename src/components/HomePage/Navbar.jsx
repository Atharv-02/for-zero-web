import React, { useState } from "react";
import navImage from "../../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 3.png";
import "../../styles/navbar.css";
import co2 from "../../assets/orange-co2-icon.avif";
import forest from "../../assets/green-forest-icon.avif";
import aboutIcon from "../../assets/blue-icon.avif";
const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  return (
    <div className='navbar-full'>
      <nav className={`navbar ${navShow ? "do-wh" : null}`}>
        <div className='img-nav'>
          <img src={navImage} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='item'>Our Projects</li>
          <li className='item'>Our Approach</li>
          <li className='item'>Contact Us</li>
          <li className='btn-item item'>
            <button className='btn nav-btn'>Get Started</button>
          </li>
        </ul>
        <div className='btn-lines'>
          <div className='btn-cont'>
            <button className='btn nav-btn'>Get Started</button>
          </div>
          <div
            className='lines'
            onClick={() => {
              setNavShow(!navShow);
            }}
          >
            <div className='line line-1'></div>
            <div className='line line-2'></div>
          </div>
        </div>
      </nav>
      {navShow && (
        <nav className={`sm-nav ${navShow ? "wh " : null}`}>
          <ul className='sm-nav-items'>
            <li className='sm-item'>
              <div className='sm-img'>
                <img src={co2} alt='' />
              </div>
              <div className='sm-img-text'>Our Approach</div>
            </li>
            <li className='sm-item'>
              <div className='sm-img'>
                <img src={forest} alt='' />
              </div>
              <div className='sm-img-text'>Our Projects</div>
            </li>

            <li className='sm-item'>
              <div className='sm-img'>
                <img src={aboutIcon} alt='' />
              </div>
              <div className='sm-img-text'>Contact Us</div>
            </li>

            <li className='sm-btn-item sm-item'>
              <button className='btn sm-nav-btn'>Get Started</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
