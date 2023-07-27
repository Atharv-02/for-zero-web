import React from "react";
import gif1 from "../../assets/1.gif";
import gif2 from "../../assets/2.gif";
import gif3 from "../../assets/3.gif";
import TrustpilotReview from "../../assets/trustpilot-4-9.png";
import ResearchData from "../../assets/wren-data-and-research-partners.png";

const Section4 = () => {
  return (
    <div className=" w-full md:pt-[100px] flex-col justify-start items-start gap-[100px] flex">
      {/* DESKTOP VIEW  */}
      <div className=" max-w-[1024px] mx-auto lg:gap-[65px] sm:hidden lg:flex lg:flex-col ">
        {/* 1st  */}
        <div className="justify-center items-start lg:gap-[65px] flex">
          <div className=" py-6 flex-col justify-between items-start gap-[47.41px] flex">
            <div className="">
              <div className="w-[393px] pr-[370.20px] justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="text-zinc-800 text-xl font-bold">1</div>
                </div>
                <div className="justify-center items-start flex">
                  <div className="px-[1.08px] py-px justify-start items-start flex" />
                </div>
              </div>
              <div className="w-[393px] pr-[21px] pb-[11px] justify-start items-start inline-flex">
                <div className="text-zinc-800 text-[35px] font-semibold leading-[48px]">
                  Calculate your carbon
                  <br />
                  footprint.
                </div>
              </div>
              <div className="w-[393px] pr-[38px] pb-2.5justify-start items-start flex">
                <div className="text-neutral-400 text-xl font-normal leading-7">
                  Use our intuitive calculator to find out
                  <br />
                  how much CO₂ you emit.
                </div>
              </div>
            </div>
            <div className="lg:pr-[187.50px] pb-1 flex-col justify-start items-start gap-[12.59px] flex">
              <div className="text-neutral-400 text-xs font-normal leading-none">
                Data & research courtesy of:
              </div>
              <img
                className="max-w-[205.50px] h-6 relative bg-blend-exclusion"
                src={ResearchData}
              />
            </div>
          </div>
          <img
            className="max-w-[542px] rounded-lg border border-green-950"
            src={gif2}
          />
        </div>
        {/* 2nd  */}
        <div className="justify-center items-start gap-[65px] inline-flex">
          <div className="w-[542px] relative rounded-lg border border-green-950">
            <div className="w-[540px] left-[1px] top-[1px] absolute bg-gray-200 rounded-[5px] justify-start items-start flex">
              <img className="relative rounded-[5px]" src={gif1} />
            </div>
          </div>
          <div className="pt-6 pb-20 flex-col justify-between items-start inline-flex">
            <div className="w-[393px] h-[258px] relative">
              <div className="w-[393px] pr-[367.39px] left-0 top-0 absolute justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="text-zinc-800 text-xl font-bold">2</div>
                </div>
                <div className="h-[26px] justify-center items-start flex">
                  <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
                </div>
              </div>
              <div className="w-[393px] pr-[41px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
                <div className="text-zinc-800 text-4xl font-semibold leading-[48px]">
                  Start a monthly
                  <br />
                  subscription to fund
                  <br />
                  climate solutions.
                </div>
              </div>
              <div className="w-[393px] pr-11 pb-2.5 left-0 top-[192px] absolute justify-start items-start inline-flex">
                <div className="text-neutral-400 text-xl font-normal leading-7">
                  Maximise your impact by funding the
                  <br />
                  climate solutions our planet needs.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd  */}
        <div className="justify-center items-start gap-[65px] inline-flex">
          <div className="py-6 flex-col justify-between items-start gap-[35.41px] inline-flex">
            <div className="w-[393px] h-[210px] relative">
              <div className="w-[393px] pr-[366.80px] left-0 top-0 absolute justify-start items-center inline-flex">
                <div className="justify-start items-start flex">
                  <div className="text-zinc-800 text-xl font-bold">3</div>
                </div>
                <div className="h-[26px] justify-center items-start flex">
                  <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
                </div>
              </div>
              <div className="w-[393px] pr-[25px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
                <div className="text-zinc-800 text-[35px] font-semibold leading-[48px]">
                  See your impact grow
                  <br />
                  every month.
                </div>
              </div>
              <div className="w-[393px] pr-[13px] pb-2.5 left-0 top-[144px] absolute justify-start items-start inline-flex">
                <div className="text-neutral-400 text-xl font-normal leading-7 font-Blanco400I">
                  Receive updates that show how you’re
                  <br />
                  making a positive impact on the climate.
                </div>
              </div>
            </div>
            <div className="h-[68.59px] pr-[193px] pb-1 flex-col justify-start items-start gap-[8.59px] flex">
              <div className="text-neutral-400 text-xs font-normal leading-none">
                Member reviews on TrustPilot:
              </div>
              <img className="w-[200px] h-10 relative" src={TrustpilotReview} />
            </div>
          </div>
          <img
            className="w-[542px] h-[362px] relative rounded-lg border border-green-950"
            src={gif3}
          />
        </div>
      </div>

      {/* TAB VIEW */}
      <div className=" max-w-[768px] mx-auto pt-[100px] flex-col justify-end items-start gap-[99px] sm:hidden md:flex lg:hidden">
        {/* 1st  */}
        <div className="self-stretch pr-[0.01px] justify-center items-start gap-[29.99px] inline-flex">
          <div className="flex-col justify-between items-start inline-flex">
            <div className="w-[259.19px] h-[286px] relative">
              <div className="w-[259.19px] pr-[236.40px] left-0 top-0 absolute justify-start items-center inline-flex">
                <div className="text-zinc-800 text-xl font-bold">1</div>
                <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
              </div>
              <div className="w-[259.19px] pr-[7.19px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
                <div className="text-zinc-800 text-4xl font-semibold leading-[48px]">
                  Calculate your
                  <br />
                  carbon
                  <br />
                  footprint.
                </div>
              </div>
              <div className="w-[259.19px] pr-[7.19px] pb-2.5 left-0 top-[192px] absolute justify-start items-start inline-flex">
                <div className="text-neutral-400 text-xl font-normal leading-7">
                  Use our intuitive calculator
                  <br />
                  to find out how much CO₂
                  <br />
                  you emit.
                </div>
              </div>
            </div>
            <div className="h-[56.59px] pr-[53.69px] pb-1 flex-col justify-start items-start gap-[12.59px] flex">
              <div className="text-neutral-400 text-xs font-normal leading-none">
                Data & research courtesy of:
              </div>
              <img className="w-[205.50px] h-6 relative" src={ResearchData} />
            </div>
          </div>
          <img
            className="w-[402px] h-[302px] relative rounded-lg border border-green-950"
            src={gif2}
          />
        </div>
        {/* 2nd  */}
        <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
          <div className="w-[402px] h-[302px] relative rounded-lg border">
            <div className="w-[400px] left-[1px] top-[1px] absolute  rounded-[5px] justify-start items-start inline-flex">
              <img
                className="w-[400px] h-[302px] relative rounded-[5px]"
                src={gif1}
              />
            </div>
          </div>
          <div className="w-[259.19px] h-[430px] relative">
            <div className="w-[259.19px] pr-[233.58px] left-0 top-0 absolute justify-start items-center inline-flex">
              <div className="text-zinc-800 text-xl font-bold">2</div>
              <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
            </div>
            <div className="w-[259.19px] pr-[41.19px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
              <div className="text-zinc-800 text-4xl font-semibold leading-[48px]">
                Start a<br />
                monthly
                <br />
                subscription
                <br />
                to fund
                <br />
                climate
                <br />
                solutions.
              </div>
            </div>
            <div className="w-[259.19px] pr-[4.19px] pb-2.5 left-0 top-[336px] absolute justify-start items-start inline-flex">
              <div className="text-neutral-400 text-xl font-normal leading-7">
                Maximise your impact by
                <br />
                funding the climate
                <br />
                solutions our planet needs.
              </div>
            </div>
          </div>
        </div>
        {/* 3rd  */}
        <div className="self-stretch pr-[0.01px] justify-center items-start gap-[29.99px] inline-flex">
          <div className="flex-col justify-between items-start inline-flex">
            <div className="w-[259.19px] h-[314px] relative">
              <div className="w-[259.19px] pr-[232.99px] left-0 top-0 absolute justify-start items-center inline-flex">
                <div className="text-zinc-800 text-xl font-bold">3</div>
                <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
              </div>
              <div className="w-[259.19px] pr-[29.19px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
                <div className="text-zinc-800 text-4xl font-semibold leading-[48px]">
                  See your
                  <br />
                  impact grow
                  <br />
                  every month.
                </div>
              </div>
              <div className="w-[259.19px] pr-[3.19px] pb-2.5 left-0 top-[192px] absolute justify-start items-start inline-flex">
                <div className="text-neutral-400 text-xl font-normal leading-7">
                  Receive updates that show
                  <br />
                  how you’re making a<br />
                  positive impact on the
                  <br />
                  climate.
                </div>
              </div>
            </div>
            <div className="h-[68.59px] pr-[59.19px] pb-1 flex-col justify-start items-start gap-[8.60px] flex">
              <div className="text-neutral-400 text-xs font-normal leading-none">
                Member reviews on TrustPilot:
              </div>
              <img className="w-[200px] h-10 relative" src={TrustpilotReview} />
            </div>
          </div>
          <img
            className="w-[402px] h-[302px] relative rounded-lg border border-green-950"
            src={gif3}
          />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="max-w-[320px] mx-auto pb-10 justify-start items-center sm:flex flex-col md:hidden">
        <div className="w-[320px] flex-col justify-start pb-8 items-start gap-[30px] inline-flex">
          {/* 1st  */}
          <div className="w-[320px] h-[183.58px] relative">
            <div className="w-[74px] h-[67px] left-[116.50px] top-[24px] absolute">
              <img
                className="w-[74px] h-[63px] left-0 top-0 absolute"
                src="https://via.placeholder.com/74x63"
              />
              <img
                className="w-5 h-[19px] left-[-72px] top-[24.01px] absolute"
                src="https://via.placeholder.com/20x19"
              />
              <img
                className="w-[33px] h-[33px] left-[-45.33px] top-[11.90px] absolute origin-top-left rotate-[3.18deg]"
                src="https://via.placeholder.com/33x33"
              />
              <img
                className="w-[33px] h-8 left-[80.43px] top-[11.90px] absolute origin-top-left rotate-[3.18deg]"
                src="https://via.placeholder.com/33x32"
              />
              <img
                className="w-[23px] h-[23px] left-[115px] top-[24.01px] absolute"
                src="https://via.placeholder.com/23x23"
              />
            </div>
            <div className="left-[27.13px] top-[106px] absolute text-center text-zinc-800 text-[17px] font-bold leading-normal">
              1. Work out your carbon footprint
            </div>
            <div className="w-[320px] left-[3.50px] top-[138.80px] absolute justify-center items-start inline-flex">
              <div className="text-center text-stone-500 text-base font-normal leading-snug">
                Use our simple calculator to find out how
                <br />
                much CO₂ you emit.
              </div>
            </div>
          </div>

          {/* 2nd  */}
          <div className="w-[320px] h-[218.58px] relative">
            <div className="w-[105px] h-[102px] left-[101px] top-[24px] absolute">
              <img
                className="w-[57px] h-[92.98px] left-0 top-[5.02px] absolute"
                src="https://via.placeholder.com/57x93"
              />
              <img
                className="w-8 h-[98px] left-[65px] top-0 absolute"
                src="https://via.placeholder.com/32x98"
              />
              <img
                className="w-12 h-[31px] left-[107px] top-[10px] absolute"
                src="https://via.placeholder.com/48x31"
              />
            </div>
            <div className="left-[26.50px] top-[141px] absolute text-center text-zinc-800 text-[17px] font-bold leading-normal">
              2. Fund projects that remove CO₂
            </div>
            <div className="w-[320px] left-[.50px] top-[173.80px] absolute justify-center items-start inline-flex">
              <div className="text-center text-stone-500 text-base font-normal leading-snug">
                Fund carbon reduction & removal projects to
                <br />
                neutralize your emissions.
              </div>
            </div>
          </div>

          {/* 3rd  */}
          <div className="w-[320px] h-[173.23px] relative">
            <div className="w-[214px] h-[56.66px] left-[56.50px] top-[24px] absolute">
              <img
                className="w-[50px] h-[30.33px] left-[25px] top-[26.33px] absolute"
                src="https://via.placeholder.com/50x30"
              />
              <div className="pt-[2.68px] pb-1 left-[58px] top-[18.33px] absolute opacity-50 justify-start items-start inline-flex">
                <div className="h-[13.31px] justify-center items-start flex">
                  <div className="h-[13.31px] pl-[0.20px] pr-[0.24px] pt-[0.19px] pb-[0.30px] justify-start items-start flex" />
                </div>
              </div>

              <img
                className="w-[50px] h-[30.33px] left-[85px] top-[26.33px] absolute"
                src="https://via.placeholder.com/50x30"
              />
              <div className="pt-[2.68px] pb-1 left-[140px] top-[18.33px] absolute opacity-20 justify-start items-start inline-flex">
                <div className="h-[13.31px] justify-center items-start flex">
                  <div className="h-[13.31px] pl-[0.20px] pr-[0.24px] pt-[0.19px] pb-[0.30px] justify-start items-start flex" />
                </div>
              </div>
              <img
                className="w-[50px] h-[56.66px] left-[154px] top-0 absolute"
                src="https://via.placeholder.com/50x57"
              />
            </div>
            <div className="left-[62.78px] top-[95.66px] absolute text-center text-zinc-800 text-[17px] font-bold leading-normal">
              3. See your impact grow
            </div>
            <div className="w-[320px] left-[3.50px] top-[128.45px] absolute justify-center items-start inline-flex">
              <div className="text-center text-stone-500 text-base font-normal leading-snug">
                Receive updates with data, photos, and
                <br />
                stories that prove your impact.
              </div>
            </div>
          </div>
        </div>

        <button className="pl-[37px] pr-[36.80px] py-2 bg-amber-500 rounded shadow border border-amber-500 justify-center items-center inline-flex">
          <div className="text-center text-white text-[22px] font-medium leading-snug">
            Get started
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section4;
