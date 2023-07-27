import React from "react";
import approachVid from "../../assets/approach-animation-720.mp4";
import fern from "../../assets/fern-img.avif";
const Section1 = () => {
  return (
    <div className='upper-approach'>
      <img src={fern} alt='' className='fern fern-1' />
      <img src={fern} alt='' className='fern fern-2' />

      <div className='first-text'>
        <h1>
          We built Wren to make it easier for you to tackle the climate crisis.
        </h1>
        <video playsInline loop muted>
          <source src={approachVid} type='video/mp4' />
          {/* <img
            src='https://projectwren.imgix.net/approach-thumbnail.png?auto=format%2Ccompress&amp;q=35'
            alt="Animation of our categories of 'Action', 'Funding', and 'Reach' funneling together."
            className='css-8atqhb'
          /> */}
        </video>
        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt='All the devices'
          src={approachVid}
        />
      </div>
      <div className='total-header'>
        <h1>
          No single person can end the climate crisis on their own, but change
          always starts with people who care.
        </h1>
        <p>
          <span className='inner-p'>
            The climate crisis is overwhelming. Every week, there are stories of
            more floods, fires, and famines happening because of our heating
            atmosphere.
          </span>
          <span className='inner-p'>
            Luckily, we have no shortage of solutions—we just need to implement
            them. From tree planting and ecosystem conservation to renewable
            energy and plant-based diets, experts have identified over 100
            solutions to the climate crisis ready for action today.
          </span>
          <span className='inner-p'>
            We built Wren for the millions of people who want to help, but
            aren’t sure where they can have a real impact.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Section1;
