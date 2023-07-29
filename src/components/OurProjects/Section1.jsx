import React, { useEffect, useState } from "react";
import fern from "../../assets/fern-img.avif";
import { scroller } from "react-scroll";

const Section1 = () => {
  const [selected, setSelected] = useState("Our Projects");
  const [isSticky, setIsSticky] = useState(false);

  const handleTabClick = (tab) => {
    setSelected(tab);
    scroller.scrollTo(tab, {
      duration: 800,
      smooth: true,
      offset: -100,
      // Adjust the offset as needed to align the scrolled element correctly.
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the isSticky state accordingly
      const scrollPosition = window.scrollY;
      const triggerOffset = 300; // Adjust this value to change when the navbar becomes sticky

      setIsSticky(scrollPosition > triggerOffset);
    };

    // Attaching the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);
    console.log("mounted")

    // Cleaning up the event listener when the component unmounts
    // this happens when the user navigates away from the page( to another page, or closes the tab)
    // this works because the component is unmounted when the user navigates away
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("unmounted")
    };
  }, []);

  return (
    <div className="w-screen">
      <img src={fern} alt="" className="fern fern-1" />
      <img src={fern} alt="" className="fern fern-2" />

      <div className="max-w-[1024px] mx-auto h-[448px] pt-[120px] pb-20 flex-col justify-start items-center gap-6 flex">
        <div className="w-[909px] pl-[174.94px] pr-[176.06px] pb-2.5 justify-center items-start inline-flex">
          <div className="text-center text-zinc-800 text-[53px] font-semibold leading-[72px]">
            Planet-saving,
            <br />
            life-changing projects.
          </div>
        </div>
        <div className={`p-2 bg-emerald-50 rounded-[100px] justify-start items-start inline-flex ${isSticky ? "sticky-navbar" : ""}`}>
          <div className="h-[54px] justify-center items-center gap-[0.01px] flex">
            <div
              className={`px-6 pt-[15.80px] pb-[15.20px] justify-center items-center flex ${
                selected === "Our Projects" ? "text-black" : "text-green-500"
              } text-base font-normal leading-snug`}
              onClick={() => handleTabClick("Our Projects")}
            >
              Our projects
            </div>
            <div
              className={`pl-[23px] pr-[24.48px] pt-[15.80px] pb-[15.20px] justify-center items-center flex ${
                selected === "The Wren Classic Portfolio"
                  ? "text-black"
                  : "text-green-500"
              } text-base font-normal leading-snug`}
              onClick={() => handleTabClick("The Wren Classic Portfolio")}
            >
              The Wren Classic Portfolio
            </div>
            <div
              className={`pl-[23px] pr-[24.13px] pt-[15.80px] pb-[15.20px] justify-center items-center flex ${
                selected === "How we choose our projects"
                  ? "text-black"
                  : "text-green-500"
              } text-base font-normal leading-snug`}
              onClick={() => handleTabClick("How we choose our projects")}
            >
              How we choose our projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
