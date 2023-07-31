import React from "react";

const Section6 = () => {
  return (
    <div>
      <div className="max-w-[1024px] mx-auto pb-10 flex-col justify-center items-center gap-6 flex">
        <div className="w-[765.14px] h-[216px] relative">
          <div className="w-[230.80px] pb-[11px] left-[267.16px] top-[103px] absolute justify-center items-start inline-flex">
            <div className="text-center text-zinc-800 text-[27px] font-semibold leading-9">
              Archived projects
            </div>
          </div>
          <div className="w-[650px] pl-[39.54px] pr-[39.46px] pb-[11px] left-[57.56px] top-[149px] absolute justify-center items-start inline-flex">
            <div className="text-center text-zinc-800 text-[17px] font-normal leading-7">
              When projects are archived on Wren, they will appear here along
              with a<br />
              reason for archival.
            </div>
          </div>
          <div className="w-20 h-10 left-[342.56px] top-[24px] absolute">
            <div className="w-20 left-0 top-[-15px] absolute opacity-20 justify-start items-start inline-flex" />
            <div className="w-[46px] px-[6.33px] py-[3.33px] left-[17px] top-[5px] absolute justify-start items-start inline-flex" />
          </div>
        </div>
        <div className="w-[800px] h-[95.17px] relative border-t border-b border-gray-200">
          <div className="h-[98.56px] left-[12px] absolute flex-col justify-start items-start inline-flex">
            <div className="w-[200px] pr-7 pb-[25.17px] justify-start items-start inline-flex">
              <div className="text-zinc-800 text-base font-bold leading-snug">
                Clean cooking fuel for
                <br />
                refugees
              </div>
            </div>
            <div className="w-[200px] pr-[53px] pb-[30.78px] justify-start items-start inline-flex">
              <div className="text-stone-500 text-base font-normal leading-snug">
                Archived: Jan 2023
              </div>
            </div>
          </div>
          <div className="w-[428px] pr-[38px] pb-[0.17px] left-[236px] top-[13px] absolute justify-start items-start inline-flex">
            <div className="text-stone-500 text-base font-normal leading-snug">
              Archived after undershooting production volume
              <br />
              estimates. In addition, the project did not meet new
              <br />
              verification standard required by Wren in 2023.
            </div>
          </div>
          <div className="pl-[13px] pr-[13.02px] py-[5px] left-[688px] top-[14px] absolute bg-green-500 rounded-full border border-green-500 justify-center items-center gap-[3.78px] inline-flex">
            <div className="text-white text-base font-normal leading-none">
              More
            </div>
            <div className="h-[23px] pr-[2.58px] py-[5.93px] justify-start items-center flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
