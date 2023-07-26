import React from "react";
import homeFaq from "../../data/homefaq";
import questionMark from "../../assets/circle-question-mark.avif";
import bird from "../../assets/bird.avif";
import { FaPlus } from "react-icons/fa";
const Section25 = () => {
  const showFullPara = (id) => {
    const c = document.querySelectorAll(".hidden-para");
    c[id].classList.toggle("show");
    console.log(c[id]);
    const c1 = document.querySelectorAll(".cross");
    c1[id].classList.toggle("rotate");
  };

  return (
    <div className='full-faq'>
      <div className='faq-only'>
        <img src={questionMark} alt='' />
        <h1>Frequently Asked Questions ?</h1>
        <div className='faq-boxes'>
          {homeFaq.map((faq) => {
            return (
              <>
                <div
                  className='single-box'
                  onClick={() => showFullPara(faq.id)}
                >
                  <div className='header-single-faq'>
                    <h3>{faq.title}</h3>
                    <div className='cross'>
                      <FaPlus />
                    </div>
                  </div>

                  <div className='hidden-para'>
                    <p>{faq.para}</p>
                    <br />
                    {faq.para2 ? <p>{faq.para2}</p> : null}
                    <br />
                    {faq.para3 ? <p>{faq.para3}</p> : null}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className='lower-faq'>
        <div className='bird'>
          <img src={bird} alt='' />
        </div>
        <h1 className='lower-h1'>
          We all have a part to play. Take climate action today.
        </h1>
      </div>
    </div>
  );
};

export default Section25;
