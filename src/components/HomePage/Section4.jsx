import React from "react";
import gif1 from '../../assets/1.gif'
import gif2 from '../../assets/2.gif'
import gif3 from '../../assets/3.gif'



const Section4 = () => {
  return (
    <div className="max-w-[1024px] mx-auto pt-[100px] flex-col justify-start items-start gap-[100px] flex">
      <div className="w-[1000px] justify-center items-start gap-[65px] inline-flex">
        <div className="py-6 flex-col justify-between items-start gap-[47.41px] inline-flex">
          <div className="w-[393px] h-[210px] relative">
            <div className="w-[393px] pr-[370.20px] left-0 top-0 absolute justify-start items-center inline-flex">
              <div className="justify-start items-start flex">
                <div className="text-zinc-800 text-xl font-bold">1</div>
              </div>
              <div className="h-[26px] justify-center items-start flex">
                <div className="h-[26px] px-[1.08px] py-px justify-start items-start flex" />
              </div>
            </div>
            <div className="w-[393px] pr-[21px] pb-[11px] left-0 top-[37px] absolute justify-start items-start inline-flex">
              <div className="text-zinc-800 text-[35px] font-semibold leading-[48px]">
                Calculate your carbon
                <br />
                footprint.
              </div>
            </div>
            <div className="w-[393px] pr-[38px] pb-2.5 left-0 top-[144px] absolute justify-start items-start inline-flex">
              <div className="text-neutral-400 text-xl font-normal leading-7">
                Use our intuitive calculator to find out
                <br />
                how much CO₂ you emit.
              </div>
            </div>
          </div>
          <div className="h-[56.59px] pr-[187.50px] pb-1 flex-col justify-start items-start gap-[12.59px] flex">
            <div className="text-neutral-400 text-xs font-normal leading-none">
              Data & research courtesy of:
            </div>
            <img
              className="w-[205.50px] h-6 relative"
              src="https://via.placeholder.com/205x24"
            />
          </div>
        </div>
        <img
          className="w-[542px] h-[362px] relative rounded-lg border border-green-950"
          src={gif2}
        />
      </div>
      <div className="max-w-[1024px] justify-center items-start gap-[65px] inline-flex">
        <div className="w-[542px] h-[362px] relative rounded-lg border border-green-950">
          <div className="w-[540px] left-[1px] top-[1px] absolute bg-gray-200 rounded-[5px] justify-start items-start flex">
            <img
              className="relative rounded-[5px]"
              src={gif1}
            />
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
      <div className="w-[1000px] justify-center items-start gap-[65px] inline-flex">
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
              <div className="text-neutral-400 text-xl font-normal leading-7">
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
            <img
              className="w-[200px] h-10 relative"
              src="https://via.placeholder.com/200x40"
            />
          </div>
        </div>
        <img
          className="w-[542px] h-[362px] relative rounded-lg border border-green-950"
          src={gif3}
        />
      </div>
    </div>
  );
};

export default Section4;
