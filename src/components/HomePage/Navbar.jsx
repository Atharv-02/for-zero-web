import React, { useEffect, useState } from "react";
import navImage from "../../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 3.png";
import navNewImg from "../../assets/12th Project/Logo Files/PNGs & SVGs/1x/Asset 2.png";
import "../../styles/navbar.css";
import co2 from "../../assets/orange-co2-icon.avif";
import forest from "../../assets/green-forest-icon.avif";
import aboutIcon from "../../assets/blue-icon.avif";
import { useNavigate } from "react-router-dom";

const Navbar = ({ params }) => {
  console.log(params);
  const [navShow, setNavShow] = useState(false);
  const [newImg, setNewImg] = useState(params == "home" ? false : true);
  const navigate = useNavigate();
  useEffect(() => {
    const c = document.getElementById("navbar-full");
    const c1 = document.querySelector(".line-1");
    const c2 = document.querySelector(".line-2");
    if (params == "our-approach" || params == "our-projects") {
      c.classList.add("bl-nav");
      c1.classList.add("bl-line");
      c2.classList.add("bl-line");
    } else if (params == "home") {
      c.classList.remove("bl-nb");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 970) {
          console.log("hi");
          c.classList.add("fix-nb");
          c1.classList.add("bl-line");
          c2.classList.add("bl-line");
          setNewImg(true);
        } else {
          c.classList.remove("fix-nb");
          c1.classList.remove("bl-line");
          c2.classList.remove("bl-line");
          setNewImg(false);
        }
      });
    }
  });
  return (
    <div className='navbar-full' id='navbar-full'>
      <nav className={`navbar ${navShow ? "do-wh sp" : null}`} id='navbar'>
        <div className='img-nav'>
          <img
            src={newImg ? navNewImg : navImage}
            alt=''
            onClick={() => navigate("/")}
          />
        </div>
        <ul className='nav-items'>
          <li className='item' onClick={() => navigate("/our-projects")}>
            Our Projects
          </li>
          <li className='item' onClick={() => navigate("/our-approach")}>
            Our Approach
          </li>
          {/* <li className='item'>Contact Us</li> */}
          <li className='btn-item item'>
            <a href='https://dancing-frangipane-786e1e.netlify.app/'>
              <button className='btn nav-btn'>Get Started</button>
            </a>
          </li>
        </ul>
        <div className='btn-lines'>
          <div className='btn-cont'>
            <a href='https://dancing-frangipane-786e1e.netlify.app/'>
              <button className='btn nav-btn'>Get Started</button>
            </a>
          </div>
          <div
            className={`lines `}
            onClick={() => {
              setNavShow(!navShow);
            }}
          >
            <div
              className={`line line-1  ${
                navShow
                  ? "black cross-nav"
                  : window.scrollY > 970
                  ? "bl-line"
                  : null
              }`}
            ></div>
            <div
              className={`line line-2 ${
                navShow
                  ? "black rev-cross"
                  : navShow
                  ? "black cross-nav"
                  : window.scrollY > 970
                  ? "bl-line"
                  : null
              }`}
            ></div>
          </div>
        </div>
      </nav>
      {navShow && (
        <nav className={`sm-nav ${navShow ? "wh " : null}`} id='sm-nav'>
          <ul className='sm-nav-items'>
            <li className='sm-item'>
              <div className='sm-img' onClick={() => navigate("/our-approach")}>
                <img src={co2} alt='' />
              </div>
              <div
                className='sm-img-text'
                onClick={() => navigate("/our-approach")}
              >
                Our Approach
                <p>Understanding the impact of offsets</p>
              </div>
            </li>
            <li className='sm-item'>
              <div className='sm-img' onClick={() => navigate("/our-projects")}>
                <img src={forest} alt='' />
              </div>
              <div
                className='sm-img-text'
                onClick={() => navigate("/our-projects")}
              >
                Our Projects
                <p>See how offset carbon works</p>
              </div>
            </li>

            {/* <li className='sm-item'>
              <div className='sm-img'>
                <img src={aboutIcon} alt='' />
              </div>
              <div className='sm-img-text'>
                Contact Us
                <br />
                Understanding the impact of offsets
              </div>
            </li> */}

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
