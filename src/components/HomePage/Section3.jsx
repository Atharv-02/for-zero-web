import React from "react";

const Section3 = () => {
  return (
    <div className="max-w-[1024px] mx-auto h-[211px] flex-col justify-start items-center gap-4 flex">
      <div className="w-[700px] pl-[83.75px] pr-[84.25px] pb-[11px] justify-center items-start inline-flex">
        <div className="text-center">
          <span className="text-zinc-800 text-4xl font-semibold leading-[48px]">
            Wren is your{" "}
          </span>
          <span className="text-zinc-800 text-4xl font-semibold leading-[48px]">
            all-in-one
          </span>
          <span className="text-zinc-800 text-4xl font-semibold leading-[48px]">
            {" "}
            climate
            <br />
            subscription.
          </span>
        </div>
      </div>
      <div className="w-[1000px] pl-[212.36px] pr-[212.37px] justify-center items-start inline-flex">
        <div className="justify-start items-start flex">
          <div className="pl-[15.41px] pr-[15.22px] pt-4 pb-[17px] flex-col justify-center items-start gap-[3px] inline-flex">
            <div className="text-center text-green-500 text-4xl font-extrabold leading-9">
              $5M+
            </div>
            <div className="text-center text-zinc-800 text-xs font-normal leading-none">
              Raised for projects
            </div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="pl-[15px] pr-[16.42px] pt-4 pb-[17px] flex-col justify-center items-center gap-[3px] inline-flex">
            <div className="text-center text-green-500 text-4xl font-extrabold leading-9">
              700K+
            </div>
            <div className="text-center text-zinc-800 text-xs font-normal leading-none">
              Contributions
            </div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="w-[128.86px] pl-4 pr-[15.86px] pt-4 pb-[17px] flex-col justify-start items-center gap-[3px] inline-flex">
            <div className="text-center text-green-500 text-4xl font-extrabold leading-9">
              4.9★
            </div>
            <div className="text-center text-zinc-800 text-xs font-normal leading-none">
              TrustPilot score
            </div>
          </div>
        </div>
        <div className="justify-start items-start flex">
          <div className="w-[154.77px] pl-4 pr-[15.77px] pt-4 pb-[17px] flex-col justify-start items-center gap-[3px] inline-flex">
            <div className="text-center text-green-500 text-4xl font-extrabold leading-9">
              330K+
            </div>
            <div className="text-center text-zinc-800 text-xs font-normal leading-none">
              Tons of CO₂ offset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
