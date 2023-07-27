import React from "react";
import Bloomberg from "../..//assets/wren-press-bloomberg.jpeg";
import Forbes from "../..//assets/wren-press-forbes-small.jpeg";
import NYT from "../..//assets/wren-press-nyt.jpeg";
import Wired from "../..//assets/wren-press-wired.jpeg";

const Section2 = () => {
  return (
    <div class="w-full lg:px-5 pt-[23.05px] bg-white justify-center items-start sm:hidden md:flex">
      <div class="pr-6 max-w-[1024px] mx-auto justify-between items-center gap-6 flex">
        {/* News #1  */}
        <div class="px-3 max-w-[23%] justify-start items-start flex">
          <div class="pb-2.5  flex-col justify-start items-center gap-0.5 inline-flex">
            <img class="h-[35.34px] opacity-80" src={NYT} />
            <div class="lg:pl-[4.13px] lg:pr-[5.87px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “For Zero asks a series of questions to determine how much carbon you emit.”
              </div>
            </div>
          </div>
        </div>
        {/* News #2 */}
        <div class="px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-2.5 flex">
            <img
              class="h-[27.89px] opacity-80"
              src={Wired}
              alt="wired"
            />
            <div class=" lg:pl-[3.88px] lg:pr-[3.12px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “For Zero is making it easier for consumers to offset their carbon emissions.”
              </div>
            </div>
          </div>
        </div>
        {/* News #3  */}
        <div class="px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-1.5 flex">
            <img
              class="h-[29.63px] opacity-80"
              src={Forbes}
            />
            <div class="lg:pl-[11.02px] lg:pr-[10.98px] pt-0.5 opacity-60 flex-col justify-center items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “For less than $20 a month, For Zero will  offset your carbon footprint.”
              </div>
            </div>
          </div>
        </div>
        {/* News #4 */}
        <div class="px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center  flex">
            <img
              class="h-[28.50px] opacity-80"
              src={Bloomberg}
            />
            <div class="lg:pl-[3.58px] lg:pr-[3.42px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “For Zero is one of a new breed of climate-centric startups for consumers.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
