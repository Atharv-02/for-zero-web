import React from "react";
import members from '../../assets/members.png'

const Section4 = () => {
  return (
    <div className=" w-full">
      <div className="max-w-[1024px] mx-auto flex-col justify-start items-center gap-16 flex">
        <div className="w-[908.09px] pl-[141.05px] pr-[141.04px] justify-center items-start inline-flex">
          <img
            className="w-[626px] h-[297px] relative"
            src={members}
          />
        </div>
        <div className="w-[908.09px] pl-[104.05px] pr-[104.04px] justify-center items-start inline-flex">
          <div className="pl-[14.89px] pr-[14.11px] pb-[11px] flex-col justify-start items-center inline-flex">
            <div className="text-center text-zinc-800 text-4xl font-semibold leading-[48px]">
              Members fund a mix of climate
            </div>
            <div className="text-center">
              <span className="text-zinc-800 text-[35px] font-semibold leading-[48px]">
                solutions via 
              </span>
              <span className="text-green-500 text-[35px] font-semibold leading-[48px]">
                The Wren Classic Portfolio
              </span>
            </div>
          </div>
        </div>
        <div className="w-[726.50px] px-[4.50px] justify-between items-start gap-[12.50px] inline-flex">
          <div className="pl-[2.63px] pr-[2.37px] flex-col justify-start items-center gap-[13px] inline-flex">
            <div className="w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex">
              <div className="w-[35px] h-[35px] relative" />
            </div>
            <div className="text-center text-zinc-800 text-[15px] font-normal">
              Managed automatically
            </div>
          </div>
          <div className="pl-[16.70px] pr-[16.30px] flex-col justify-start items-center gap-[13px] inline-flex">
            <div className="w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex">
              <div className="w-[35px] h-[35px] relative" />
            </div>
            <div className="text-center text-zinc-800 text-[15px] font-normal">
              Diversified projects
            </div>
          </div>
          <div className="pl-[10.91px] pr-[10.09px] flex-col justify-center items-center gap-[13px] inline-flex">
            <div className="self-stretch p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex">
              <div className="h-[35px] px-[4.12px] justify-start items-start flex" />
            </div>
            <div className="text-center text-zinc-800 text-[15px] font-normal">
              Optimized for impact
            </div>
          </div>
          <div className="pl-[28.05px] pr-[27.95px] flex-col justify-start items-center gap-[13px] inline-flex">
            <div className="w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex">
              <div className="w-[35px] h-[35px] relative" />
            </div>
            <div className="text-center text-zinc-800 text-[15px] font-normal">
              Affordable price
            </div>
          </div>
        </div>
        <div className="w-[908.09px] h-[1444.36px] relative">
          <div className="w-[337.64px] h-[489px] left-[570.46px] top-0 absolute">
            <div className="left-0 top-0 absolute text-zinc-800 text-xl font-semibold leading-7">
              About
            </div>
            <div className="w-[337.64px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <div className="w-[337.64px] pr-[5.64px] pb-[0.95px] left-0 top-[62px] absolute justify-start items-start inline-flex">
              <div className="text-zinc-800 text-base font-normal leading-snug">
                The Wren Classic Portfolio offsets carbon
                <br />
                through a curated selection of effective
                <br />
                climate projects. A portion of funds are sent
                <br />
                to policy groups, to extend Wren's impact
                <br />
                beyond carbon offsets.
              </div>
            </div>
            <div className="w-[337.64px] pr-[42.64px] left-0 top-[194.96px] absolute justify-start items-start inline-flex">
              <div className="text-zinc-800 text-base font-normal leading-snug">
                The Portfolio's allocation is periodically
                <br />
                updated to maximize impact.
              </div>
            </div>
          </div>
          <div className="w-[506.45px] h-[489px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-zinc-800 text-xl font-semibold leading-7">
              How is the money spent?
            </div>
            <div className="w-[506.45px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <div className="pr-[15.81px] pt-[33px] pb-[25px] left-0 top-[63px] absolute bg-neutral-100 rounded border border-gray-200 justify-start items-center inline-flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="pt-[16.81px] pb-[20.81px] justify-center items-start flex">
                  <div className="w-[206.38px] h-60 relative origin-top-left -rotate-90" />
                </div>
                <div className="pb-2 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-yellow-400 rounded-sm" />
                    <div className="self-stretch pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Biochar in California - 7.01%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-amber-500 rounded-sm" />
                    <div className="self-stretch pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Enhanced mineral weathering - 6.08%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-emerald-600 rounded-sm" />
                    <div className="self-stretch pr-[0.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Refrigerant destruction (Tradewater) -<br />
                        3.46%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-blue-700 rounded-sm" />
                    <div className="self-stretch pr-[13.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Tech-enabled rainforest protection -<br />
                        16.49%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                    <div className="self-stretch pr-[23.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Refrigerant destruction (Recoolit) -<br />
                        6%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-green-500 rounded-sm" />
                    <div className="self-stretch pr-[35.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Refrigerant destruction (A-Gas) -<br />
                        17.54%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-purple-400 rounded-sm" />
                    <div className="self-stretch pr-[21.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Mangrove conservation in Mexico -<br />
                        26.01%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-red-500 rounded-sm" />
                    <div className="self-stretch pr-[6.08px] pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Adipic acid nitrous oxide abatement -<br />
                        7.41%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-stone-500 rounded-sm" />
                    <div className="self-stretch pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Clean Air Task Force - 5%
                      </div>
                    </div>
                  </div>
                  <div className="justify-center items-center gap-2 inline-flex">
                    <div className="w-3 h-3 bg-violet-700 rounded-sm" />
                    <div className="self-stretch pb-px justify-start items-start inline-flex">
                      <div className="text-zinc-800 text-sm font-normal leading-[18px]">
                        Carbon180 - 5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[506.45px] h-[348.36px] left-0 top-[553px] absolute">
            <div className="left-0 top-0 absolute text-zinc-800 text-xl font-semibold leading-7">
              Contributions by month
            </div>
            <div className="w-[506.45px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <div className="w-[506.45px] h-[285.36px] left-0 top-[63px] absolute">
              <div className="w-[506.45px] h-[249.97px] left-0 top-0 absolute">
                <div className="w-[404.97px] h-[25.26px] left-[65.24px] top-[225.97px] absolute">
                  <div className="w-[52px] h-[25.26px] left-0 top-0 absolute">
                    <div className="left-[-0px] top-[10.26px] absolute text-center text-zinc-800 text-xs font-normal">
                      Jan 2019
                    </div>
                  </div>
                  <div className="w-[54px] h-[25.26px] left-[84.58px] top-0 absolute">
                    <div className="left-0 top-[10.26px] absolute text-center text-zinc-800 text-xs font-normal">
                      Jan 2020
                    </div>
                  </div>
                  <div className="w-[52px] h-[25.26px] left-[171.40px] top-0 absolute">
                    <div className="left-0 top-[10.26px] absolute text-center text-zinc-800 text-xs font-normal">
                      Jan 2021
                    </div>
                  </div>
                  <div className="w-[53px] h-[25.26px] left-[257.48px] top-0 absolute">
                    <div className="left-0 top-[10.26px] absolute text-center text-zinc-800 text-xs font-normal">
                      Jan 2022
                    </div>
                  </div>
                  <div className="w-[54px] h-[25.26px] left-[341.57px] top-0 absolute">
                    <div className="left-[-0px] top-[10.26px] absolute text-center text-zinc-800 text-xs font-normal">
                      Jan 2023
                    </div>
                  </div>
                </div>
                <div className="w-[456.97px] h-[217.97px] left-[13.24px] top-[8px] absolute">
                  <div className="w-[454.97px] h-[15px] left-[2px] top-[155.71px] absolute">
                    <div className="left-0 top-0 absolute text-right text-zinc-800 text-xs font-normal">
                      US$100,000
                    </div>
                  </div>
                  <div className="w-[455.97px] h-[15px] left-[1px] top-[101.18px] absolute">
                    <div className="left-0 top-0 absolute text-right text-zinc-800 text-xs font-normal">
                      US$200,000
                    </div>
                  </div>
                  <div className="w-[456.97px] h-[15px] left-0 top-[46.65px] absolute">
                    <div className="left-0 top-0 absolute text-right text-zinc-800 text-xs font-normal">
                      US$300,000
                    </div>
                  </div>
                </div>
                <div className="w-[346.27px] h-[217.98px] left-[125.79px] top-[8px] absolute">
                  <div className="w-[346.27px] h-[217.65px] left-0 top-0 absolute"></div>
                  <div className="w-[346.27px] h-[122.20px] left-[-0px] top-[95.45px] absolute"></div>
                  <div className="w-[346.27px] h-[111.07px] left-[-0px] top-[106.90px] absolute"></div>
                  <div className="w-[346.27px] h-[46.03px] left-[-0px] top-[171.95px] absolute"></div>
                </div>
              </div>
              <div className="w-[506.45px] h-[253.97px] left-0 top-0 absolute" />
            </div>
          </div>
          <div className="w-[337.64px] h-[348.36px] left-[570.46px] top-[553px] absolute">
            <div className="left-0 top-0 absolute text-zinc-800 text-xl font-semibold leading-7">
              Portfolio map
            </div>
            <div className="w-[337.64px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <img
              className="w-[339.64px] h-[205.42px] left-0 top-[63px] absolute rounded-[5px] border border-stone-300"
              src="https://via.placeholder.com/340x205"
            />
          </div>
          <div className="w-[337.64px] h-[479px] left-[570.46px] top-[965.36px] absolute">
            <div className="left-0 top-[-31.39px] absolute text-zinc-800 text-xl font-semibold leading-7">
              Portfolio updates
            </div>
            <div className="w-[337.64px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <div className="w-[337.64px] py-5 left-0 top-[7.61px] absolute justify-start items-end gap-6 inline-flex">
              <img
                className="w-[92px] h-[92px] relative rounded border border-neutral-400"
                src="https://via.placeholder.com/92x92"
              />
              <div className="pt-[3px] pb-[31px] flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="text-neutral-600 text-xs font-normal leading-none">
                  25 July 2023
                </div>
                <div className="w-[221.64px] pr-[5.64px] justify-start items-start inline-flex">
                  <div className="text-zinc-800 text-base font-bold leading-snug">
                    Conserving mangroves and
                    <br />
                    saving turtles in Mexico
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[337.64px] h-px left-0 top-[179px] absolute bg-black bg-opacity-20" />
            <div className="w-[337.64px] py-5 left-0 top-[148.61px] absolute justify-start items-end gap-6 inline-flex">
              <img
                className="w-[92px] h-[92px] relative rounded border border-neutral-400"
                src="https://via.placeholder.com/92x92"
              />
              <div className="pt-[3px] pb-[8.83px] flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-neutral-600 text-xs font-normal leading-none">
                  14 June 2023
                </div>
                <div className="w-[221.64px] pr-[2.64px] pb-[0.17px] justify-start items-start inline-flex">
                  <div className="text-zinc-800 text-base font-bold leading-snug">
                    A welcome from our newest
                    <br />
                    refrigerant destruction
                    <br />
                    partner
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[337.64px] h-px left-0 top-[320px] absolute bg-black bg-opacity-20" />
            <div className="w-[337.64px] py-5 left-0 top-[289.61px] absolute justify-start items-end gap-6 inline-flex">
              <img
                className="w-[92px] h-[92px] relative rounded border border-neutral-400"
                src="https://via.placeholder.com/92x92"
              />
              <div className="pt-[3px] pb-[31px] flex-col justify-start items-start gap-[5px] inline-flex">
                <div className="text-neutral-600 text-xs font-normal leading-none">
                  9 June 2023
                </div>
                <div className="w-[221.64px] pr-[21.64px] justify-start items-start inline-flex">
                  <div className="text-zinc-800 text-base font-bold leading-snug">
                    Your support stops illegal
                    <br />
                    logging in its tracks
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[506.45px] h-[479px] left-0 top-[965.36px] absolute">
            <div className="left-0 top-[-31.39px] absolute text-zinc-800 text-xl font-semibold leading-7">
              Recent supporters
            </div>
            <div className="w-[506.45px] h-px left-0 top-[38px] absolute bg-black bg-opacity-20" />
            <div className="pr-[15px] left-0 top-[39px] absolute flex-col justify-end items-start inline-flex">
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="w-[301.94px] pr-[257.94px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Sofia
                    </div>
                  </div>
                  <div className="w-[301.94px] pr-[169.94px] pb-px justify-start items-start inline-flex">
                    <div className="text-black text-opacity-30 text-lg font-normal leading-snug">
                      24 minutes ago
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[93.52px] pl-2.5 pr-[9.52px] bg-emerald-50 rounded-[21px] justify-center items-center inline-flex">
                  <div className="text-emerald-600 text-base font-semibold leading-relaxed">
                    0.53 tons
                  </div>
                </div>
              </div>
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="w-[303.64px] pr-[245.64px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Robert
                    </div>
                  </div>
                  <div className="w-[303.64px] pr-[171.64px] pb-px justify-start items-start inline-flex">
                    <div className="text-black text-opacity-30 text-lg font-normal leading-snug">
                      24 minutes ago
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[91.81px] pl-2.5 pr-[9.81px] bg-emerald-50 rounded-[21px] justify-center items-center inline-flex">
                  <div className="text-emerald-600 text-base font-semibold leading-relaxed">
                    2.72 tons
                  </div>
                </div>
              </div>
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="w-[303.34px] pr-[241.34px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Nathan
                    </div>
                  </div>
                  <div className="w-[303.34px] pr-[171.34px] pb-px justify-start items-start inline-flex">
                    <div className="text-black text-opacity-30 text-lg font-normal leading-snug">
                      24 minutes ago
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[92.11px] pl-2.5 pr-[9.11px] bg-emerald-50 rounded-[21px] justify-center items-center inline-flex">
                  <div className="text-emerald-600 text-base font-semibold leading-relaxed">
                    3.78 tons
                  </div>
                </div>
              </div>
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="w-[302.30px] pr-[278.30px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Ari
                    </div>
                  </div>
                  <div className="w-[302.30px] pr-[170.30px] pb-px justify-start items-start inline-flex">
                    <div className="text-black text-opacity-30 text-lg font-normal leading-snug">
                      24 minutes ago
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[93.16px] pl-2.5 pr-[9.16px] bg-emerald-50 rounded-[21px] justify-center items-center inline-flex">
                  <div className="text-emerald-600 text-base font-semibold leading-relaxed">
                    0.47 tons
                  </div>
                </div>
              </div>
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="w-[301.75px] pr-[247.75px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Austin
                    </div>
                  </div>
                  <div className="w-[301.75px] pr-[169.75px] pb-px justify-start items-start inline-flex">
                    <div className="text-black text-opacity-30 text-lg font-normal leading-snug">
                      24 minutes ago
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[93.70px] pl-2.5 pr-[9.70px] bg-emerald-50 rounded-[21px] justify-center items-center inline-flex">
                  <div className="text-emerald-600 text-base font-semibold leading-relaxed">
                    2.04 tons
                  </div>
                </div>
              </div>
              <div className="w-[491.45px] h-[88px] relative border-b border-black border-opacity-10 flex-col justify-start items-start flex">
                <div className="h-[86px] pl-1.5 pt-[15px] pb-12 flex-col justify-start items-start inline-flex">
                  <div className="w-[312.44px] pr-[246.44px] pb-px justify-start items-start inline-flex">
                    <div className="text-zinc-800 text-lg font-normal leading-snug">
                      Michael
                    </div>
                  </div>
                </div>
                <img
                  className="w-[42px] h-[42px] rounded-[42px]"
                  src="https://via.placeholder.com/42x42"
                />
                <div className="w-[83.02px] h-[26px] relative bg-emerald-50 rounded-[21px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
