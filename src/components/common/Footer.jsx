import React from "react";
import navImage from "../../assets/12th Project/Logo Files/PNGs & SVGs/2x/Asset 1@2x.png";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='w-full pt-3 pb-24 bg-for_zero_blue border-t-8 border-for_zero_green justify-center items-start flex'>
      <div className='max-w-[1024px] mt-[50px] mx-auto sm:hidden md:flex flex-col md:scale-[85%] lg:scale-100'>
        <div className='pb-[50px] justify-start items-start flex'>
          {/* 1st Col  */}
          <div className='pb-[104.28px] justify-start items-start flex'>
            <div className='justify-start items-start gap-4 flex'>
              <img className='w-[42px] h-[42px] relative' src={navImage} />
              <div className='grow shrink basis-0 h-[164.78px] pr-[28.89px] justify-start items-start flex'>
                <div className='pr-[15px] pb-10 flex-col justify-start items-start gap-[13px] inline-flex'>
                  <div className='text-white text-base font-semibold'>
                    Forzero
                  </div>
                  <div className='self-stretch pr-3.5 opacity-90 justify-start items-start inline-flex'>
                    <div className='text-white text-sm font-normal leading-tight'>
                      Offset your carbon footprint
                      <br />
                      by supporting projects you
                      <br />
                      care about.
                    </div>
                  </div>
                  <div className='self-stretch pr-[90px] justify-start items-start gap-3 inline-flex'>
                    <div className='pt-[2.06px] pb-1.5 justify-start items-start flex'>
                      <div className='h-[13.94px] justify-center items-start flex'>
                        <div className='h-[13.94px] px-[0.04px] justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='pb-1 justify-start items-start flex'>
                      <div className='h-[18px] justify-center items-start flex'>
                        <div className='h-[18px] px-[0.02px] py-[1.70px] justify-start items-start flex' />
                      </div>
                    </div>
                    <div className='pb-1 justify-start items-start flex'>
                      <img
                        className='w-[28px] h-[28px] relative'
                        src='https://cdn-icons-png.flaticon.com/128/174/174855.png'
                      />
                      {/* <AiOutlineInstagram/> */}
                    </div>
                    <div className='pb-1 justify-start items-start flex'>
                      <img
                        className='w-[28px] h-[28px] relative'
                        src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png'
                      />
                      {/* <AiFillLinkedin/> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Col  */}
          {/* <div className='w-[188.67px] h-[469.06px] relative'>
            <div className='left-0 top-0 absolute text-white text-base font-semibold'>
              Explore
            </div>
            <div className='left-0 top-[32px] absolute text-white text-[15px] font-normal leading-snug'>
              How it works
            </div>
            <div className='left-0 top-[69.42px] absolute text-white text-[15px] font-normal leading-snug'>
              About us
            </div>
            <div className='left-0 top-[106.84px] absolute text-white text-[15px] font-normal leading-snug'>
              Blog
            </div>
            <div className='left-0 top-[144.26px] absolute text-white text-[15px] font-normal leading-snug'>
              Groups
            </div>
            <div className='left-0 top-[181.69px] absolute text-white text-[15px] font-normal leading-snug'>
              Offset flights
            </div>
            <div className='left-0 top-[219.11px] absolute text-white text-[15px] font-normal leading-snug'>
              One-off offsets
            </div>
            <div className='left-0 top-[256.53px] absolute text-white text-[15px] font-normal leading-snug'>
              Gift Forzero
            </div>
            <div className='left-0 top-[293.95px] absolute text-white text-[15px] font-normal leading-snug'>
              API
            </div>
            <div className='left-0 top-[331.37px] absolute text-white text-[15px] font-normal leading-snug'>
              Receipts Ledger
            </div>
            <div className='left-0 top-[368.80px] absolute text-white text-[15px] font-normal leading-snug'>
              Forzero for Companies
            </div>
            <div className='left-0 top-[406.22px] absolute text-white text-[15px] font-normal leading-snug'>
              🏅 Leaderboard
            </div>
            <div className='left-0 top-[443.64px] absolute text-white text-[15px] font-normal leading-snug'>
              FAQ
            </div>
          </div> */}
          {/* 3rd Col  */}
          <div className='w-[188.67px] relative'>
            <div className='left-0 top-0 absolute text-white text-base font-semibold'>
              Resources
            </div>
            <div className='left-0 top-[32px] absolute text-white text-[15px] font-normal leading-snug'>
              Follow on Twitter
            </div>
            <div className='left-0 top-[69.42px] absolute text-white text-[15px] font-normal leading-snug'>
              Follow on Instagram
            </div>
            <div className='left-0 top-[106.84px] absolute text-white text-[15px] font-normal leading-snug'>
              Support
            </div>
            <div className='left-0 top-[144.26px] absolute text-white text-[15px] font-normal leading-snug'>
              Contact us
            </div>
          </div>
          {/* 4th Col  */}
          <div className='w-[320.75px] h-[269.06px] relative'>
            <div className='left-0 top-0 absolute text-white text-base font-semibold'>
              Projects
            </div>
            <div className='pl-[7px] pr-[10.88px] pt-0.5 pb-3 left-[-7px] top-[30px] absolute rounded-[3px] justify-start items-start flex border-b-2'>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🌍 Forzero Climate Portfolio
              </div>
            </div>
            {/* <div className='h-[251.94px] pl-4 pr-[37.75px] pt-0.5 pb-[3.42px] left-0 top-[77.42px] absolute flex-col justify-start items-start gap-[15.42px] inline-flex'>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🪨 Biochar in California
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🌧 Enhanced mineral weathering
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🛰 Tech-enabled rainforest protection
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🐋 Mangrove conservation in Mexico
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                ️ Refrigerant destruction
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                💼 Clean Air Task Force
              </div>
              <div className='text-white text-[15px] font-normal leading-snug'>
                🔬 Carbon180
              </div>
            </div> */}
          </div>
        </div>

        <div className='opacity-80 justify-start items-start border-b-2 border-gray-200 py-3 flex'>
          <div className='text-white text-base font-semibold'>
            For Zero Climate, PBC © 2023
          </div>
        </div>

        <div className=' flex pt-3 gap-3'>
          <div className='opacity-80 text-white text-[15px] font-normal'>
            Privacy Policy
          </div>
          <div className=' text-white text-[15px] font-normal'>•</div>
          <div className='opacity-80 text-white text-[15px] font-normal'>
            Data Collection
          </div>
          <div className=' text-white text-[15px] font-normal'>•</div>
          <div className='opacity-80 text-white text-[15px] font-normal'>
            TrustPilot reviews
          </div>
          <div className=' text-white text-[15px] font-normal'>•</div>
          <div className='opacity-80 text-white text-[15px] font-normal'>
            Contact support
          </div>
        </div>
      </div>

      {/* Mobile Footer */} 
      <div className='max-w-[100vw] h-[659.75px] pt-3 pb-4 bg-for_zero_blue justify-center items-start sm:flex md:hidden'>
        <div className='w-[310px] relative'>
          <div className='pb-[50px] left-0 top-[50px] absolute flex-col justify-start items-start gap-[50px] inline-flex'>
            <div className='w-[317px] h-[76.38px] relative'>
              <div className='left-0 top-0 absolute text-white text-base font-semibold'>
                Projects
              </div>
              <div className='pl-[7px] pr-[10.88px] pt-0.5 pb-[3.42px] left-[-7px] top-[30px] absolute rounded-[3px] justify-start items-start inline-flex'>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🌍 Forzero Climate Portfolio
                </div>
              </div>
              <div className='w-full h-0.5 left-0 top-[69.42px] absolute opacity-20 border border-white' />
              {/* <div className='h-[251.94px] w-full pl-4 pr-[64px] pt-0.5 pb-[3.42px] left-0 top-[87.42px] absolute flex-col justify-start items-start gap-[15.42px] flex'>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🪨 Biochar in California
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🌧 Enhanced mineral weathering
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🛰 Tech-enabled rainforest protection
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🐋 Mangrove conservation in Mexico
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  ️ Refrigerant destruction
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  💼 Clean Air Task Force
                </div>
                <div className='text-white text-[15px] font-normal leading-snug'>
                  🔬 Carbon180
                </div>
              </div> */}
            </div>
            <div className='w-[317px] h-[244.53px] relative'>
              <div className='left-0 top-0 absolute text-white text-base font-semibold'>
                Resources
              </div>
              <div className='left-0 top-[32px] absolute text-white text-[15px] font-normal leading-snug'>
                Follow on Twitter
              </div>
              <div className='left-0 top-[69.43px] absolute text-white text-[15px] font-normal leading-snug'>
                Follow on Instagram
              </div>
              <div className='left-0 top-[106.85px] absolute text-white text-[15px] font-normal leading-snug'>
                Support
              </div>
              <div className='left-0 top-[144.27px] absolute text-white text-[15px] font-normal leading-snug'>
                Contact us
              </div>
            </div>
            {/*
            <div className='w-[387px] h-[469.06px] relative'>
              <div className='left-0 top-0 absolute text-white text-base font-semibold'>
                Explore
              </div>
              <div className='left-0 top-[32px] absolute text-white text-[15px] font-normal leading-snug'>
                How it works
              </div>
              <div className='left-0 top-[69.42px] absolute text-white text-[15px] font-normal leading-snug'>
                About us
              </div>
              <div className='left-0 top-[106.84px] absolute text-white text-[15px] font-normal leading-snug'>
                Blog
              </div>
              <div className='left-0 top-[144.26px] absolute text-white text-[15px] font-normal leading-snug'>
                Groups
              </div>
              <div className='left-0 top-[181.68px] absolute text-white text-[15px] font-normal leading-snug'>
                Offset flights
              </div>
              <div className='left-0 top-[219.11px] absolute text-white text-[15px] font-normal leading-snug'>
                One-off offsets
              </div>
              <div className='left-0 top-[256.53px] absolute text-white text-[15px] font-normal leading-snug'>
                Gift Forzero
              </div>
              <div className='left-0 top-[293.95px] absolute text-white text-[15px] font-normal leading-snug'>
                API
              </div>
              <div className='left-0 top-[331.37px] absolute text-white text-[15px] font-normal leading-snug'>
                Receipts Ledger
              </div>
              <div className='left-0 top-[368.79px] absolute text-white text-[15px] font-normal leading-snug'>
                Forzero for Companies
              </div>
              <div className='left-0 top-[406.21px] absolute text-white text-[15px] font-normal leading-snug'>
                🏅 Leaderboard
              </div> 
              <div className='left-0 top-[443.64px] absolute text-white text-[15px] font-normal leading-snug'>
                FAQ
              </div>
            </div>
            */}
            <div className='w-[317px] justify-start items-start flex'>
              <div className='pr-[15px] pb-10 flex-col justify-start items-start gap-[13px] flex'>
                <div className='text-white text-base font-semibold'>
                  Forzero
                </div>
                <div className='self-stretch opacity-90 justify-start items-start inline-flex'>
                  <div className='text-white text-sm font-normal leading-tight'>
                    Offset your carbon footprint
                    <br />
                    by supporting projects you
                    <br />
                    care about.
                  </div>
                </div>
                <div className='self-stretch justify-start items-start gap-3 inline-flex'>
                  <div className='pt-[2.06px] pb-1.5 justify-start items-start flex'>
                    <div className='h-[13.94px] justify-center items-start flex'>
                      <div className='h-[13.94px] px-[0.05px] justify-start items-start flex' />
                    </div>
                  </div>
                  <div className='pb-1 justify-start items-start flex'>
                    <div className='h-[18px] justify-center items-start flex'>
                      <div className='h-[18px] px-[0.02px] py-[1.70px] justify-start items-start flex' />
                    </div>
                  </div>
                  <div className='pb-1 justify-start items-start flex'>
                    {/* <img
                      className='w-[18px] h-[18px] relative'
                      src='https://via.placeholder.com/18x18'
                    /> */}
                  </div>
                  <div className='pb-1 justify-start items-start flex'>
                    {/* <img
                      className='w-[18px] h-[18px] relative'
                      src='https://via.placeholder.com/18x18'
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' max-w-[320px] flex px-3'>
            <div className='left-0 top-[623.75px] absolute opacity-80 text-white text-[15px] font-normal'>
              Privacy Policy
            </div>
            <div className='left-[102.63px] top-[623.75px] absolute text-white text-[15px] font-normal'>
              •
            </div>

            <div className='left-[125px] top-[625.75px] absolute opacity-80 text-white text-[15px] font-normal'>
              Contact support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
