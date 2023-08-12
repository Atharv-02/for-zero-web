import React from "react";

const Section5 = () => {
  return (
    <div className='max-w-[1024px] mx-auto my-28 h-[181px] flex-col justify-start items-center gap-6 sm:hidden md:flex'>
      <div className='w-[680px] pl-[13.80px] pr-[14.20px] pb-[11px] justify-center items-start inline-flex'>
        <div className='text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
          The climate crisis is a global problem.
          <br />
          Be part of the solution.
        </div>
      </div>
      <div className='pl-[37px] pr-[36.80px] py-2 bg-[#12e2a4] rounded shadow border border-[#12e2a4] justify-center items-center inline-flex'>
        <div className='text-center text-white text-[22px] font-medium leading-snug'>
          Get started
        </div>
      </div>
    </div>
  );
};

export default Section5;
