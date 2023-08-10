import React from "react";
import Bloomberg from "../..//assets/hindu.png";
import Forbes from "../..//assets/et-logo.webp";
import NYT from "../..//assets/toi.png";
import Wired from "../..//assets/ht-logo.png";

const Section2 = () => {
  return (
    <div className='w-full lg:px-5 pt-[23.05px] bg-white justify-center items-start sm:hidden md:flex'>
      <div className='pr-6 max-w-[1024px] mx-auto justify-between items-center gap-6 flex'>
        {/* News #1  */}
        <div className='px-3 max-w-[23%] justify-start items-start flex'>
          <div className='pb-2.5  flex-col justify-start items-center gap-0.5 inline-flex'>
            <img
              className='h-[35.34px] scale-y-150 scale-x-125 mb-1 opacity-80'
              src={NYT}
            />
            <div className='lg:pl-[4.13px] lg:pr-[5.87px] pt-0.5 opacity-60 flex-col justify-start items-center flex'>
              <div className='text-center text-zinc-800 text-[13px] font-normal leading-none'>
                “For Zero asks a series of questions to determine how much
                carbon you emit.”
              </div>
            </div>
          </div>
        </div>
        {/* News #2 */}
        <div className='px-3 justify-start items-start flex'>
          <div className='pb-2.5 flex-col justify-start items-center gap-2.5 flex'>
            <img
              className='h-[27.89px] scale-150 opacity-80'
              src={Wired}
              alt='wired'
            />
            <div className=' lg:pl-[3.88px] lg:pr-[3.12px] pt-0.5 opacity-60 flex-col justify-start items-center flex'>
              <div className='text-center text-zinc-800 text-[13px] font-normal leading-none'>
                “For Zero is making it easier for consumers to offset their
                carbon emissions.”
              </div>
            </div>
          </div>
        </div>
        {/* News #3  */}
        <div className='px-3 justify-start items-start flex'>
          <div className='pb-2.5 flex-col justify-start items-center gap-1.5 flex'>
            <img className='h-[29.63px] opacity-80' src={Forbes} />
            <div className='lg:pl-[11.02px] lg:pr-[10.98px] pt-0.5 opacity-60 flex-col justify-center items-center flex'>
              <div className='text-center text-zinc-800 text-[13px] font-normal leading-none'>
                “For less than $20 a month, For Zero will offset your carbon
                footprint.”
              </div>
            </div>
          </div>
        </div>
        {/* News #4 */}
        <div className='px-3 justify-start items-start flex'>
          <div className='pb-2.5 flex-col justify-start items-center  flex'>
            <img
              className='h-[28.50px] opacity-80 scale-150 mb-1'
              src={Bloomberg}
            />
            <div className='lg:pl-[3.58px] lg:pr-[3.42px] pt-0.5 opacity-60 flex-col justify-start items-center flex'>
              <div className='text-center text-zinc-800 text-[13px] font-normal leading-none'>
                “For Zero is one of a new breed of climate-centric startups for
                consumers.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
