import React from "react";
import Partners from "../../assets/partners-slate.png";
import Public1 from "../../assets/public-1.png";
import Public2 from "../../assets/public-2.png";
import Public3 from "../../assets/public-3.png";
import PartnerMobile from "../../assets/news-moile.png";

const Section8 = () => {
  return (
    <div className='w-full pt-8 sm:pb-1 md:pb-16 flex-col justify-start items-start flex'>
      <div className=' w-full '>
        <div className='sm:h-[600px] md:h-[247.16px] md:scale-90 max-w-[1024px] mx-auto pt-[30px] pb-14 flex-col justify-start items-center gap-[34px] flex'>
          <div className='text-center text-zinc-800 text-xl font-normal leading-7'>
            Our projects partner with the best in the business:
          </div>
          <img
            className='w-[1000px] h-[99.16px] relative sm:hidden md:flex'
            src={Partners}
          />
          <img className='w-[320px] relative md:hidden' src={PartnerMobile} />
        </div>
      </div>

      <div className='bg-neutral-50 w-full sm:py-10 md:py-24'>
        <div className='sm:max-w-[320px] md:max-w-[1024px] mx-auto'>
          <div className=' text-center text-zinc-800 text-[37px] font-semibold leading-[46px]'>
            All our work is public.
          </div>
          <div className=' mt-3'>
            <div className='text-center text-zinc-800 text-xl font-normal leading-7'>
              We’re a Benefit Corporation with a
              <span className='text-blue-500 text-xl font-semibold leading-7'>
                {" "}
                legally-binding charter
              </span>
              <span className='text-zinc-800 text-xl font-normal leading-7'>
                . It
              </span>
            </div>
            <div className=' text-center text-zinc-800 text-xl font-normal leading-7'>
              doesn’t get more transparent than that.
            </div>
          </div>

          <div className='justify-start items-start sm:gap-10 md:gap-0 lg:gap-10 mt-12 flex sm:flex-col md:flex-row'>
            <div className='md:scale-90 lg:scale-100 w-[306.66px] h-[202.56px] relative'>
              <img
                className='w-[147.53px] h-[63px] left-[79.56px] top-0 absolute'
                src={Public1}
              />
              <div className='left-[32.84px] top-[78px] absolute text-center text-zinc-800 text-lg font-bold leading-relaxed'>
                We share every transaction
              </div>
              <div className='w-[320px] pl-[7.80px] pr-[7.86px] sm:-left-[10px] lg:left-0 sm:top-[132px] lg:top-[112.18px] absolute justify-center items-start inline-flex'>
                <div className='text-center text-zinc-800 text-lg font-medium leading-relaxed'>
                  Check our impact live-feed. Every
                  <br />
                  transaction has a paper trail.
                </div>
              </div>
              <div className='sm:left-[77px] lg:left-[87.94px] sm:top-[192px] lg:top-[182.56px] absolute text-center text-blue-500 text-base font-semibold'>
                View live-feed →
              </div>
            </div>

            <div className='md:scale-90 lg:scale-100 w-[306.66px] h-[202.56px] relative'>
              <img
                className='w-[147.53px] h-[63px] left-[79.56px] top-0 absolute'
                src={Public1}
              />
              <div className='left-[49.84px] top-[78px] absolute text-center text-zinc-800 text-lg font-bold leading-relaxed'>
              Peek into our operations
              </div>
              <div className='w-[320px] pl-[7.80px] pr-[7.86px] sm:-left-[10px] lg:left-0 sm:top-[132px] lg:top-[112.18px] absolute justify-center items-start inline-flex'>
                <div className='text-center text-zinc-800 text-lg font-medium leading-relaxed'>
                Dive into our live impact journal to witness every move we make.
                </div>
              </div>
              <div className='sm:left-[77px] lg:left-[87.94px] sm:top-[192px] lg:top-[182.56px] absolute text-center text-blue-500 text-base font-semibold'>
                View live-feed →
              </div>
            </div>

            <div className='md:scale-90 lg:scale-100 w-[306.66px] h-[202.56px] relative'>
              <img
                className='w-[147.53px] h-[63px] left-[79.56px] top-0 absolute'
                src={Public1}
              />
              <div className='left-[52.84px] top-[78px] absolute text-center text-zinc-800 text-lg font-bold leading-relaxed'>
              Transparency in action.
              </div>
              <div className='w-[320px] pl-[7.80px] pr-[7.86px] sm:-left-[10px] lg:left-0 sm:top-[132px] lg:top-[112.18px] absolute justify-center items-start inline-flex'>
                <div className='text-center text-zinc-800 text-lg font-medium leading-relaxed'>
                Where every decision and action is showcased for you to see.
                </div>
              </div>
              <div className='sm:left-[77px] lg:left-[87.94px] sm:top-[192px] lg:top-[182.56px] absolute text-center text-blue-500 text-base font-semibold'>
                View live-feed →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
