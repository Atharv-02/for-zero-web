import React from "react";
import { FcNext } from "react-icons/fc";
import { AiOutlineRight } from "react-icons/ai";
import fern from "../../assets/fern-img.avif";
const Section7 = () => {
  return (
    <div className=" relative">
      <img src={fern} alt="" className=" absolute left-0 w-[150px] rotate-90" />
      <img src={fern} alt="" className="fern fern-2" />
      <img
        src={fern}
        alt=""
        className="sm:hidden md:block absolute left-0 w-[190px] top-[170px] rotate-45"
      />

      <div className="max-w-[1024px] mx-auto pt-[150px] pb-[60px] justify-center items-start sm:hidden md:flex">
        <div className="w-full flex flex-col items-center">
          {/* Heading  */}
          <div className="w-[725px] pb-2.5 justify-center items-start flex font-Inter">
            <div className="text-center text-zinc-800 text-3xl font-semibold leading-9">
              The climate crisis requires massive action, and
              <br />
              you can start today.
            </div>
          </div>

          <div className="w-[725px]  pb-[11px] justify-center items-start flex mt-5 font-Blanco">
            <div className="text-center text-stone-500 text-[17px] font-normal leading-7">
              Carbon offsets alone won't end the climate crisis, but calculating
              and offsetting your
              <br />
              carbon footprint is a great way you can make a difference.
            </div>
          </div>

          <div className="bg-for_zero_green p-2 px-4 gap-2 rounded-full justify-center items-center flex">
            <div className="text-center text-white text-base font-medium">
              Get Started
            </div>
            <div className=" text-xl text-white stroke-white justify-center items-center flex">
              <AiOutlineRight
                className=" fill-white text-white stroke-white white-icon"
                style={{ fill: "white", stroke: "white", color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[320px] px-[15.25px] pt-[150px] pb-[60px] justify-center items-center sm:flex md:hidden">
        <div className="min-w-[274.50px] flex flex-col gap-2 items-center">
          <div className="pl-[24.70px] pr-[24.80px] pb-[11.19px] justify-center items-start flex">
            <div className="text-center text-zinc-800 text-2xl font-semibold leading-7">
              The climate crisis
              <br />
              requires massive
              <br />
              action, and you can
              <br />
              start today.
            </div>
          </div>
          <div className="w-[274.50px] pl-[2.50px] pr-1 pb-[10.94px] justify-center items-start flex">
            <div className="text-center text-stone-500 text-base font-normal leading-relaxed">
              Carbon offsets alone won't end the
              <br />
              climate crisis, but calculating and
              <br />
              offsetting your carbon footprint is a<br />
              great way you can make a<br />
              difference.
            </div>
          </div>
          <div className="bg-for_zero_green max-w-fit p-2 px-4 gap-2 rounded-full justify-center items-center flex">
            <div className="text-center text-white text-base font-medium">
              Get Started
            </div>
            <div className=" text-xl text-white stroke-white justify-center items-center flex">
              <AiOutlineRight
                className=" fill-white text-white stroke-white white-icon"
                style={{ fill: "white", stroke: "white", color: "white" }}
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Section7;
