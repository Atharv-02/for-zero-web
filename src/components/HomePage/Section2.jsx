import React from "react";
import Bloomberg from "../..//assets/wren-press-bloomberg.jpeg";
import Forbes from "../..//assets/wren-press-forbes-small.jpeg";
import NYT from "../..//assets/wren-press-nyt.jpeg";
import Wired from "../..//assets/wren-press-wired.jpeg";

const Section2 = () => {
  return (
    <div class="max-w-[1024] mx-auto h-32 pt-[23.05px] bg-white justify-center items-start flex">
      <div class="pr-6 justify-between items-center gap-6 flex">
        <div class="h-[81.34px] px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-0.5 inline-flex">
            <img class="w-[200px] h-[35.34px] relative opacity-80" src={NYT} />
            <div class="h-[34px] pl-[4.13px] pr-[5.87px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “Wren asks a series of questions to
              </div>
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                determine how much carbon you emit.”
              </div>
            </div>
          </div>
        </div>
        <div class="h-[81.89px] px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-2.5 inline-flex">
            <img
              class="w-[135px] h-[27.89px] relative opacity-80"
              src={Wired}
              alt="wired"
            />
            <div class="h-[34px] pl-[3.88px] pr-[3.12px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “Wren is making it easier for consumers
              </div>
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                to offset their carbon emissions.”
              </div>
            </div>
          </div>
        </div>
        <div class="h-[79.63px] px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-1.5 inline-flex">
            <img
              class="w-[90px] h-[29.63px] relative opacity-80"
              src={Forbes}
            />
            <div class="pl-[11.02px] pr-[10.98px] pt-0.5 opacity-60 flex-col justify-center items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “For less than $20 a month, Wren will
              </div>
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                offset your carbon footprint.”
              </div>
            </div>
          </div>
        </div>
        <div class="h-[76.50px] px-3 justify-start items-start flex">
          <div class="pb-2.5 flex-col justify-start items-center gap-1 inline-flex">
            <img
              class="w-[150px] h-[28.50px] relative opacity-80"
              src={Bloomberg}
            />
            <div class="h-[34px] pl-[3.58px] pr-[3.42px] pt-0.5 opacity-60 flex-col justify-start items-center flex">
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                “Wren is one of a new breed of climate-
              </div>
              <div class="text-center text-zinc-800 text-[13px] font-normal leading-none">
                centric startups for consumers.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
