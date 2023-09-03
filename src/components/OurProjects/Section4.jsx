import React from "react";
import members from "../../assets/members.png";
import PieChart from "../../assets/pie-chart.svg";
import graph from "../../assets/graph.png";
import worldMap from "../../assets/world_map.png";
import wand from "../../assets/wand.svg";
import shock from "../../assets/shock.svg";
import graphy from "../../assets/graph.svg";
import tag from "../../assets/tag.svg";
import face_1 from "../../assets/face_1.png";
import face_4 from "../../assets/face_4.png";
import face_7 from "../../assets/face_5.png";
import face_12 from "../../assets/face_12.png";
import face_14 from "../../assets/face_14.png";
import face_15 from "../../assets/face_15.png";

const Section4 = () => {
  return (
    <div className=' w-full' id='portfolio'>
      {/* Desktop Version  */}
      <div className=' max-w-[1024px] mx-auto flex-col py-24 justify-start items-center gap-16 sm:hidden md:flex'>
        {/* Heading Image  */}
        <div className='justify-center items-start inline-flex'>
          <img className='w-[626px] h-[297px] relative' src={members} />
        </div>
        {/* Heading Text  */}
        <div className=' font-Blanco  justify-center items-start inline-flex'>
          <div className='pl-[14.89px] pr-[14.11px] pb-[11px] flex-col justify-start items-center inline-flex'>
            <div className='text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
              Members fund a mix of climate
            </div>
            <div className='text-center'>
              <span className='text-zinc-800 text-[35px] font-semibold leading-[48px]'>
                solutions via 
              </span>
              <span className='text-green-500 text-[35px] font-semibold leading-[48px]'>
                The Forzero Classic Portfolio
              </span>
            </div>
          </div>
        </div>

        {/* Graphics Heading  */}
        <div className='justify-between items-start gap-[12.50px] inline-flex'>
          <div className='pl-[2.63px] pr-[2.37px] flex-col justify-start items-center gap-[13px] inline-flex'>
            <div className='w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex'>
              <img className='w-[35px] h-[35px] relative' src={wand} />
            </div>
            <div className='text-center text-zinc-800 text-[15px] font-normal'>
              Managed automatically
            </div>
          </div>
          <div className='pl-[16.70px] pr-[16.30px] flex-col justify-start items-center gap-[13px] inline-flex'>
            <div className='w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex'>
              <img className='w-[35px] h-[35px] relative' src={graphy} />
            </div>
            <div className='text-center text-zinc-800 text-[15px] font-normal'>
              Diversified projects
            </div>
          </div>
          <div className='pl-[10.91px] pr-[10.09px] flex-col justify-center items-center gap-[13px] inline-flex'>
            <div className='w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex'>
              <img className='h-[35px] w-[35px] relative' src={shock} />
            </div>
            <div className='text-center text-zinc-800 text-[15px] font-normal'>
              Optimized for impact
            </div>
          </div>
          <div className='pl-[28.05px] pr-[27.95px] flex-col justify-start items-center gap-[13px] inline-flex'>
            <div className='w-[70px] p-[17.50px] bg-emerald-50 rounded-[70px] justify-center items-center inline-flex'>
              <img className='w-[35px] h-[35px] relative' src={tag} />
            </div>
            <div className='text-center text-zinc-800 text-[15px] font-normal'>
              Affordable price
            </div>
          </div>
        </div>

        {/* Core Sections  */}
        <div className=' font-Inter w-full md:hidden lg:flex flex-row-reverse gap-5 flex-wrap'>
          {/* About Section  */}
          <div className='w-[40%]'>
            <div className=' text-zinc-800 text-xl font-semibold leading-7'>
              About
            </div>
            <div className='w-[337.64px] h-px bg-black bg-opacity-20' />
            <div className='w-[337.64px] pb-[0.95px] justify-start items-start inline-flex'>
              <div className='text-zinc-800 text-base font-normal leading-snug'>
                The Forzero Classic Portfolio offsets carbon
                <br />
                through a curated selection of effective
                <br />
                climate projects. A portion of funds are sent
                <br />
                to policy groups, to extend Forzero's impact
                <br />
                beyond carbon offsets.
              </div>
            </div>
            <div className='w-[337.64px] justify-start items-start inline-flex'>
              <div className='text-zinc-800 text-base font-normal leading-snug'>
                The Portfolio's allocation is periodically
                <br />
                updated to maximize impact.
              </div>
            </div>
          </div>

          {/* How is the money spent?  */}
          <div className='w-[55%] '>
            <div className=' text-zinc-800 text-xl font-semibold leading-7'>
              How is the money spent?
            </div>
            <div className='w-[306.45px] h-px bg-black bg-opacity-20' />
            <div className='pr-[15.81px] pt-[33px] pb-[25px] bg-neutral-100 rounded border border-gray-200 justify-start items-center inline-flex'>
              <div className='self-stretch justify-between items-center inline-flex'>
                <div className='pt-[16.81px] pb-[20.81px] justify-center items-start flex'>
                  {/* <div className="w-[206.38px] h-60 relative origin-top-left -rotate-90" /> */}
                  <img src={PieChart} alt='' />
                </div>
                <div className='pb-2 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-yellow-400 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Biochar in California - 7.01%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-amber-500 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Enhanced mineral weathering - 6.08%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-emerald-600 rounded-sm' />
                    <div className='self-stretch pr-[0.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction (Tradewater) -<br />
                        3.46%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-blue-700 rounded-sm' />
                    <div className='self-stretch pr-[13.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Tech-enabled rainforest protection -<br />
                        16.49%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-blue-500 rounded-sm' />
                    <div className='self-stretch pr-[23.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction (Recoolit) -<br />
                        6%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-green-500 rounded-sm' />
                    <div className='self-stretch pr-[35.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction (A-Gas) -<br />
                        17.54%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-purple-400 rounded-sm' />
                    <div className='self-stretch pr-[21.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Mangrove conservation in Mexico -<br />
                        26.01%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-red-500 rounded-sm' />
                    <div className='self-stretch pr-[6.08px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Adipic acid nitrous oxide abatement -<br />
                        7.41%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-stone-500 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Clean Air Task Force - 5%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-violet-700 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Carbon180 - 5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio map */}
          <div className='w-[40%] py-12'>
            <div className='text-zinc-800 text-xl font-semibold leading-7'>
              Portfolio map
            </div>
            <div className='w-[337.64px] h-px bg-black bg-opacity-20' />
            <img
              className='w-[339.64px] h-[205.42px] rounded-[5px] border border-stone-300'
              src={worldMap}
            />
          </div>

          {/* Contributions by month */}
          <div className='w-[55%] py-12'>
            <div className=' text-zinc-800 text-xl font-semibold leading-7'>
              Contributions by month
            </div>
            <div className='h-px bg-black bg-opacity-20' />
            <div className='h-[285.36px]'>
              <img src={graph} alt='' />
              <div className='w-[506.45px] h-[253.97px] left-0 top-0 absolute' />
            </div>
          </div>

          {/* Portfolio updates */}
          {/* <div className='w-[40%] py-12'>
            <div className=' text-zinc-800 text-xl font-semibold leading-7'>
              Portfolio updates
            </div>
            <div className='w-[337px] h-px  bg-black bg-opacity-20' />
            <div className=' py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] relative rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[31px] flex-col justify-start items-start gap-[5px] inline-flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  25 July 2023
                </div>
                <div className='w-[221.64px] pr-[5.64px] justify-start items-start inline-flex'>
                  <div className='text-zinc-800 text-base font-bold leading-snug'>
                    Conserving mangroves and
                    <br />
                    saving turtles in Mexico
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[337.64px] h-px bg-black bg-opacity-20' />
            <div className=' py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] relative rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[8.83px] flex-col justify-start items-start gap-1 inline-flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  14 June 2023
                </div>
                <div className='w-[221.64px] pr-[2.64px] pb-[0.17px] justify-start items-start inline-flex'>
                  <div className='text-zinc-800 text-base font-bold leading-snug'>
                    A welcome from our newest
                    <br />
                    refrigerant destruction
                    <br />
                    partner
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[337.64px] h-px  bg-black bg-opacity-20' />
            <div className=' py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] relative rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[31px] flex-col justify-start items-start gap-[5px] inline-flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  9 June 2023
                </div>
                <div className='w-[221.64px] pr-[21.64px] justify-start items-start inline-flex'>
                  <div className='text-zinc-800 text-base font-bold leading-snug'>
                    Your support stops illegal
                    <br />
                    logging in its tracks
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className='w-[17%]'></div>

          <div className='w-[50%] mr-7 max-h-[400px] overflow-y-scroll py-12'>
            <div className=' text-zinc-800 text-xl font-semibold leading-7'>
              Recent supporters
            </div>
            <div className='w-[466.45px] h-px bg-black bg-opacity-20' />
            <div className=' w-full  flex-col justify-end items-start flex'>
              {/* 1st row */}
              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_4}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_12}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_14}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_15}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_4}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* it is just the core section, main section is taken from desktop version */}
      <div className='max-w-[768px] font-Inter flex-col justify-start items-start py-9 gap-16 sm:hidden md:flex lg:hidden'>
        <div className='w-full px-5'>
          <div className='text-zinc-800 text-xl font-semibold leading-7'>
            About
          </div>
          <div className='w-full h-px my-5 bg-black bg-opacity-20' />
          <div className='w-full pr-[1.69px] pb-[0.17px] justify-start items-start flex'>
            <div className='text-zinc-800 text-base font-normal leading-snug'>
              The Forzero Classic Portfolio offsets carbon through a curated
              selection of effective climate
              <br />
              projects. A portion of funds are sent to policy groups, to extend
              Forzero's impact beyond
              <br />
              carbon offsets.
              <br />
              The Portfolio's allocation is periodically updated to maximize
              impact.
            </div>
          </div>
        </div>

        <div className='w-full px-5'>
          <div className='text-zinc-800 text-xl font-semibold leading-7'>
            How is the money spent?
          </div>
          <div className='w-[677.69px] h-px bg-black bg-opacity-20' />
          <div className=' w-full pl-[47.48px] pr-[71.49px] pt-[33px] pb-[25px] bg-neutral-100 rounded border border-gray-200 justify-center items-start flex'>
            <div className='justify-between w-full items-start flex'>
              <div className='pt-[16.80px] pb-[20.82px] justify-center items-start flex'>
                <img src={PieChart} alt='' />
              </div>
              <div className='pb-2 flex-col justify-start items-start gap-2 inline-flex'>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-yellow-400 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Biochar in California - 7.01%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-amber-500 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Enhanced mineral weathering - 6.08%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-emerald-600 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Refrigerant destruction (Tradewater) - 3.46%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-blue-700 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Tech-enabled rainforest protection - 16.49%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-blue-500 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Refrigerant destruction (Recoolit) - 6%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-green-500 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Refrigerant destruction (A-Gas) - 17.54%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-purple-400 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Mangrove conservation in Mexico - 26.01%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-red-500 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Adipic acid nitrous oxide abatement - 7.41%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-stone-500 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Clean Air Task Force - 5%
                    </div>
                  </div>
                </div>
                <div className='justify-center items-center gap-2 inline-flex'>
                  <div className='w-3 h-3 bg-violet-700 rounded-sm' />
                  <div className='self-stretch pb-px justify-start items-start inline-flex'>
                    <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                      Carbon180 - 5%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full px-5'>
          <div className=' text-zinc-800 text-xl font-semibold leading-7'>
            Contributions by month
          </div>
          <div className='w-[677.69px] h-px bg-black bg-opacity-20' />
          <img src={graph} alt='' />
        </div>

        <div className='w-full px-5'>
          <div className=' text-zinc-800 text-xl font-semibold leading-7'>
            Portfolio map
          </div>
          <div className='h-px my-5 bg-black bg-opacity-20' />
          <img
            className='w-[679.69px] h-[410.31px] rounded-[5px] border border-stone-300'
            src={worldMap}
          />
        </div>

        {/* <div className='w-full px-5'>
          <div className=' text-zinc-800 text-xl font-semibold leading-7'>
            Portfolio updates
          </div>
          <div className='w-[90%] h-px my-5 bg-black bg-opacity-20' />

          <div className='w-full pr-[155.69px] py-5 justify-start items-end gap-6 inline-flex'>
            <img
              className='w-[92px] h-[92px] relative rounded border border-neutral-400'
              src='https://via.placeholder.com/92x92'
            />
            <div className='pt-[3px] pb-[53px] flex-col justify-start items-start gap-[5px] inline-flex'>
              <div className='text-neutral-600 text-xs font-normal leading-none'>
                25 July 2023
              </div>
              <div className='text-zinc-800 text-base font-bold leading-snug'>
                Conserving mangroves and saving turtles in Mexico
              </div>
            </div>
          </div>
          <div className='w-[677.69px] h-px bg-black bg-opacity-20' />

          <div className='w-full pr-[155.69px] py-5 justify-start items-end gap-6 inline-flex'>
            <img
              className='w-[92px] h-[92px] relative rounded border border-neutral-400'
              src='https://via.placeholder.com/92x92'
            />
            <div className='pt-[3px] pb-[53px] flex-col justify-start items-start gap-[5px] inline-flex'>
              <div className='text-neutral-600 text-xs font-normal leading-none'>
                25 July 2023
              </div>
              <div className='text-zinc-800 text-base font-bold leading-snug'>
                Conserving mangroves and saving turtles in Mexico
              </div>
            </div>
          </div>
          <div className='w-[677.69px] h-px bg-black bg-opacity-20' />

          <div className='w-full pr-[155.69px] py-5 justify-start items-end gap-6 inline-flex'>
            <img
              className='w-[92px] h-[92px] relative rounded border border-neutral-400'
              src='https://via.placeholder.com/92x92'
            />
            <div className='pt-[3px] pb-[53px] flex-col justify-start items-start gap-[5px] inline-flex'>
              <div className='text-neutral-600 text-xs font-normal leading-none'>
                25 July 2023
              </div>
              <div className='text-zinc-800 text-base font-bold leading-snug'>
                Conserving mangroves and saving turtles in Mexico
              </div>
            </div>
          </div>
        </div> */}

        <div className='w-full px-5'>
          <div className='text-zinc-800 w-full text-xl font-semibold leading-7'>
            Recent supporters
          </div>

          <div className='w-[677.69px] my-5 h-px bg-black bg-opacity-20' />
          <div className='w-full px-5 max-h-[300px] overflow-y-scroll '>
            <div className=' w-full  flex-col justify-end items-start flex'>
              {/* 1st row */}
              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Rajshree
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_4}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Siya
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        29 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.90 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_12}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_14}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_15}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_4}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%]  h-[88px] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-lg font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className='pr-[169.94px] pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-lg font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-[21px] justify-center items-center flex'>
                  <div className='text-emerald-600 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view  */}
      <div className=' min-w-[320px] mx-auto sm:flex md:hidden flex-col'>
        <div className='min-w-[320px] justify-center items-start flex'>
          <img className='w-[313px] h-[148.50px] relative' src={members} />
        </div>

        <div className='min-w-[320px] mt-4 h-[201.95px] font-Blanco'>
          <div className=' text-center text-zinc-800 text-[32px] font-semibold leading-[38.40px]'>
            Members fund a mix of climate
          </div>
          <div className=' text-center'>
            <span className='text-zinc-800 text-[32px] font-semibold leading-[38.40px]'>
              solutions via 
            </span>
            <span className='text-green-500 text-[32px] italic font-semibold leading-[38.40px]'>
              The
              <br />
              Forzero Classic
              <br />
              Portfolio
            </span>
          </div>
        </div>

        {/* 4 headings  */}
        <div className='min-w-[320px] font-Inter justify-between items-start gap-2 flex'>
          <div className='flex-col justify-start items-center gap-3 flex'>
            <div className='w-[50px] p-[12.50px] bg-emerald-50 rounded-[50px] justify-center items-center flex'>
              <img className='w-[25px] h-[25px] relative' src={wand} />
            </div>
            <div className='pl-[2.27px] pr-[3.73px] flex-col justify-center items-center flex'>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                Managed
              </div>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                automatically
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-center gap-3 flex'>
            <div className='w-[50px] p-[12.50px] bg-emerald-50 rounded-[50px] justify-center items-center flex'>
              <img className='w-[25px] h-[25px] relative' src={graphy} />
            </div>
            <div className='h-[30px] pl-[10.94px] pr-[10.06px] flex-col justify-start items-center flex'>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                Diversified
              </div>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                projects
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-center gap-3 flex'>
            <div className='w-[50px] p-[12.50px] bg-emerald-50 rounded-[50px] justify-center items-center inline-flex'>
              <img className='h-[25px] relative' src={shock} />
            </div>
            <div className='h-[30px] pl-[2.63px] pr-[2.37px] flex-col justify-start items-center flex'>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                Optimized for
              </div>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                impact
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-center gap-3 flex'>
            <div className='w-[50px] p-[12.50px] bg-emerald-50 rounded-[50px] justify-center items-center inline-flex'>
              <img className='w-[25px] h-[25px] relative' src={tag} />
            </div>
            <div className='pl-[10.28px] pr-[11.72px] flex-col justify-center items-center flex'>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                Affordable
              </div>
              <div className='text-center text-zinc-800 text-xs font-normal'>
                price
              </div>
            </div>
          </div>
        </div>

        <div className='min-w-[320px] mt-10 flex-col justify-start items-center gap-10 flex'>
          {/* About Section  */}
          <div className='min-w-[320px] mx-auto pl-4 h-[269.19px] relative font-Inter'>
            <div className=' text-zinc-800 text-lg font-Inter font-semibold leading-relaxed'>
              About
            </div>
            <div className='w-[274.50px] h-px my-4 bg-black bg-opacity-20' />
            <div className='w-[274.50px] pr-[2.50px] justify-start items-start flex'>
              <div className='text-zinc-800 text-[15px] font-normal leading-[21px]'>
                The Forzero Classic Portfolio offsets
                <br />
                carbon through a curated selection of effective climate
                projects. A portion of funds are sent to policy groups, to
                <br />
                extend Forzero's impact beyond carbon
                <br />
                offsets.
              </div>
            </div>
            <div className='w-[274.50px] mt-5 pr-[40.50px] justify-start items-start inline-flex'>
              <div className='text-zinc-800 text-[15px] font-normal leading-[21px]'>
                The Portfolio's allocation is
                <br />
                periodically updated to maximize
                <br />
                impact.
              </div>
            </div>
          </div>

          {/* How is Money Spent ?  */}
          <div className='min-w-[320px] mx-auto px-4'>
            <div className=' text-zinc-800 text-lg font-semibold leading-relaxed'>
              How is the money spent?
            </div>
            <div className='w-[274.50px] h-px bg-black bg-opacity-20 my-5' />
            <div className='pl-px min-w-[280px] max-w-[100vw] pr-[17px] py-[33px] bg-neutral-100 rounded border border-gray-200 justify-center items-start flex'>
              <div className=' h-full relative'>
                <img src={PieChart} alt='' className=' mx-auto' />
                <div className='h-[394px] px-4 pt-4 flex-col justify-start items-start gap-2 inline-flex'>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-yellow-400 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Biochar in California - 7.01%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 flex'>
                    <div className='w-3 h-3 bg-amber-500 rounded-sm' />
                    <div className='self-stretch pr-[8.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Enhanced mineral weathering
                        <br />- 6.08%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-emerald-600 rounded-sm' />
                    <div className='self-stretch pr-[51.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction
                        <br />
                        (Tradewater) - 3.46%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-blue-700 rounded-sm' />
                    <div className='self-stretch pr-[45.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Tech-enabled rainforest
                        <br />
                        protection - 16.49%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 flex'>
                    <div className='w-3 h-3 bg-blue-500 rounded-sm' />
                    <div className='self-stretch pr-[51.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction
                        <br />
                        (Recoolit) - 6%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-green-500 rounded-sm' />
                    <div className='self-stretch pr-[26.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Refrigerant destruction (A-
                        <br />
                        Gas) - 17.54%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 flex'>
                    <div className='w-3 h-3 bg-purple-400 rounded-sm' />
                    <div className='self-stretch pr-[33.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Mangrove conservation in
                        <br />
                        Mexico - 26.01%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-red-500 rounded-sm' />
                    <div className='self-stretch pr-[42.50px] pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Adipic acid nitrous oxide
                        <br />
                        abatement - 7.41%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-stone-500 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Clean Air Task Force - 5%
                      </div>
                    </div>
                  </div>
                  <div className='justify-center items-center gap-2 inline-flex'>
                    <div className='w-3 h-3 bg-violet-700 rounded-sm' />
                    <div className='self-stretch pb-px justify-start items-start inline-flex'>
                      <div className='text-zinc-800 text-sm font-normal leading-[18px]'>
                        Carbon180 - 5%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution by month */}
          <div className='min-w-[320px] mx-auto px-4'>
            <div className=' text-zinc-800 pl-7 text-lg font-semibold leading-relaxed'>
              Contributions by month
            </div>
            <div className='w-[274.50px] h-px ml-4 bg-black bg-opacity-20' />

            <img src={graph} alt='' />
          </div>

          {/* Portfolio map */}
          <div className='min-w-[320px] mx-auto px-4'>
            <div className=' text-zinc-800 text-lg font-semibold leading-relaxed'>
              Portfolio map
            </div>
            <div className='w-[274.50px] my-4 h-px bg-black bg-opacity-20' />
            <img
              className='w-[276.50px] h-[167.38px] rounded-[5px] border border-stone-300'
              src={worldMap}
            />
          </div>

          {/* Portfolio updates */}
          {/* <div className='min-w-[320px] mx-auto px-4'>
            <div className=' text-zinc-800 text-lg font-semibold leading-relaxed'>
              Portfolio updates
            </div>
            <div className=' bg-black h-px bg-opacity-20 my-4' />

            <div className='w-[274.50px] py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] relative rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[13px] flex-col justify-start items-start gap-[5px] flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  14 June 2023
                </div>
                <div className='w-[158.50px] pr-[11.50px] justify-start items-start flex'>
                  <div className='text-zinc-800 text-[15px] font-bold leading-[21px]'>
                    A welcome from our
                    <br />
                    newest refrigerant
                    <br />
                    destruction partner
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[274.50px] h-px bg-black bg-opacity-20' />

            <div className='w-[274.50px] py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] relative rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[13px] flex-col justify-start items-start gap-[5px] flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  14 June 2023
                </div>
                <div className='w-[158.50px] pr-[11.50px] justify-start items-start flex'>
                  <div className='text-zinc-800 text-[15px] font-bold leading-[21px]'>
                    A welcome from our
                    <br />
                    newest refrigerant
                    <br />
                    destruction partner
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[274.50px] h-px bg-black bg-opacity-20' />

            <div className='w-[274.50px] py-5 justify-start items-end gap-6 inline-flex'>
              <img
                className='w-[92px] h-[92px] rounded border border-neutral-400'
                src='https://via.placeholder.com/92x92'
              />
              <div className='pt-[3px] pb-[13px] flex-col justify-start items-start gap-[5px] flex'>
                <div className='text-neutral-600 text-xs font-normal leading-none'>
                  9 June 2023
                </div>
                <div className='w-[158.50px] pr-[17.50px] justify-start items-start flex'>
                  <div className='text-zinc-800 text-[15px] font-bold leading-[21px]'>
                    Your support stops
                    <br />
                    illegal logging in its
                    <br />
                    tracks
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Recent supporters */}
          <div className='min-w-[100vw] mx-auto px-4'>
            <div className='text-zinc-800 text-lg font-semibold leading-relaxed'>
              Recent supporters
            </div>
            <div className='w-[274.50px] h-px bg-black bg-opacity-20 my-4' />
            <div className='h-[340px] pr-[15px] flex-col justify-start items-start flex overflow-y-scroll'>
              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Rajshree
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_4}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_12}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_14}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_15}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_1}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_7}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>

              <div className=' w-[95%] relative border-b border-black border-opacity-10 justify-between items-center flex'>
                <div className=' flex gap-4'>
                  <img
                    className='w-[42px] h-[42px] mt-4 rounded-[42px]'
                    src={face_12}
                  />
                  <div className='h-[86px] pl-1.5 pt-[15px] pb-4 flex-col justify-start items-start gap-[9px] inline-flex'>
                    <div className='  pb-px justify-start items-start flex'>
                      <div className='text-zinc-800 text-md font-normal leading-snug'>
                        Sofia
                      </div>
                    </div>
                    <div className=' pb-px justify-start items-start flex'>
                      <div className='text-black text-opacity-30 text-md font-normal leading-snug'>
                        24 minutes ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className='   bg-emerald-50 rounded-full justify-center items-center flex'>
                  <div className='text-emerald-600 px-2 p-1 text-base font-semibold leading-relaxed'>
                    0.53 tons
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
