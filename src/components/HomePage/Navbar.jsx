import React from "react";
import navImage from "../../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 3.png";
import "../../styles/navbar.css";
const Navbar = () => {
  return (
    <div className='navbar-full'>
      <nav className='navbar'>
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
        <div className='lines'>
          <div className='line line-1'></div>
          <div className='line line-2'></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
