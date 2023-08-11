import React from "react";
import Land_1 from "../../assets/land_1.png";
import Land_2 from "../../assets/land_2.png";
import Land_3 from "../../assets/land_3.png";
import Land_4 from "../../assets/land_4.png";

const Section5 = () => {
  return (
    <div className=' w-full font-Blanco' id='choose'>
      {/* Desktop  */}
      <div className='sm:hidden md:flex flex-col'>
        <div className='  max-w-[1024px] mx-auto h-[140px] flex-col justify-center items-center gap-[9px] flex'>
          <div className='text-center text-zinc-800 text-3xl font-semibold leading-9'>
            How we choose our projects
          </div>
          <div className='self-stretch pl-[12.86px] pr-[12.14px] pb-[11px] justify-center items-start inline-flex'>
            <div className='text-center text-zinc-800 text-[17px] font-normal leading-7'>
              We guarantee the impact of each project. If a project doesn’t
              offset
              <br />
              as much as planned, we fund another project to make up the
              <br />
              difference.
            </div>
          </div>
        </div>

        {/* Section 1  */}
        <div className='w-full pb-1 justify-start items-start flex flex-col'>
          <img
            className=' h-[373px] w-full relative object-cover'
            src={Land_1}
          />

          <div className='max-w-[1024px] mx-auto h-[20.59px] justify-start items-start gap-[7.38px] flex'>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                An annotated satellite image shows potential reforestation sites
                in the Amazon.
              </div>
            </div>
          </div>

          <div className='max-w-[1024px] mx-auto mt-5 flex lg:gap-16'>
            <div className='w-[30%] pr-[63.69px] pb-2.5 justify-start items-start flex'>
              <div className='text-zinc-800 text-3xl font-semibold leading-9'>
                1. Measurable
                <br />
                results
              </div>
            </div>
            <div className=' pb-3 flex-col justify-start items-start gap-3 flex'>
              <div className=' pr-[32.27px] pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal '>
                  The amount of carbon offset by our
                  <br />
                  projects is based on peer reviewed
                  <br />
                  science. There is a clear and direct
                  <br />
                  relationship between what we measure
                  <br />
                  for a project (e.g. the diameter of a tree
                  <br />
                  trunk) and how much carbon is being
                  <br />
                  offset.
                </div>
              </div>
              <div className='w-[350.27px]'>
                <div className=' text-zinc-800 text-[17px] font-normal '>
                  The way we measure total carbon offset
                  <br />
                  varies depending on the project. Here are
                  <br />
                  two examples:
                </div>
                <div className=' pl-10 flex-col justify-start items-start flex'>
                  <ul className='w-[310.27px] h-48'>
                    <li className=' text-zinc-800 text-lg font-normal '>
                      For our{" "}
                      <span className='text-blue-500 text-lg font-normal underline '>
                        Community Tree Planting project
                      </span>
                      , we measure tree trunks on the ground every 18 months,
                      then tie
                      <br />
                      those measurements to GPS
                      <br />
                      coordinates and the names of the
                      <br />
                      farmers who planted them.
                    </li>
                  </ul>
                  <div className='w-[310.27px] h-48 '>
                    <div className=' text-zinc-800 text-lg font-normal '>
                      For our{" "}
                      <span className=' text-blue-500 text-lg font-normal underline'>
                        Tech Enabled Rainforest Protection project
                      </span>
                      , we start with figures from scientific literature.
                      <br />
                      Then we analyze satellite imagery
                      <br />
                      from Global Forest Watch
                    </div>
                    <div className=' text-zinc-800 text-[17px] font-normal '>
                      to detect
                    </div>
                    <div className=' text-zinc-800 text-[17px] font-normal '>
                      forest loss.
                    </div>
                  </div>
                </div>
                <div className=' text-zinc-800 text-[17px] font-normal mt-5'>
                  Every project has different requirements,
                  <br />
                  but we only partner with a project when
                  <br />
                  we’re confident in the project’s
                  <br />
                  monitoring plan.
                </div>
              </div>
            </div>

            {/* 3rd Section  */}
            <div className=' pb-2  flex-col justify-start items-start gap-[17.39px] flex'>
              <div className='pb-[29.78px] justify-start items-start flex'>
                <div className='text-zinc-800 text-base font-bold leading-snug'>
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className='w-[175.14px] '>
                <div className=' text-green-500 text-base font-normal'>
                  1. Measurable results
                </div>
                <div className=' text-zinc-800 text-base font-normal'>
                  2. Lasting impact
                </div>
                <div className='pr-[25.14px] pb-[3.39px]  flex-col justify-start items-start gap-px flex'>
                  <div className='text-zinc-800 text-base font-normal'>
                    3. Wouldn’t happen
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    without your
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    funding
                  </div>
                </div>
                <div className=' text-zinc-800 text-base font-normal'>
                  4. No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2  */}
        <div className='w-full pb-16 justify-start items-start flex flex-col'>
          <img className='w-full h-[373px] object-cover' src={Land_2} />

          <div className='max-w-[95%] h-[20.59px] mx-auto pr-[28.71px] mt-5 justify-start items-start gap-[7.38px] flex'>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                Forzero members are funding enhanced mineral weathering, above,
                which sequesters carbon with high-permanence in basalt rocks.
              </div>
            </div>
          </div>

          <div className='max-w-[95%] mx-auto flex mt-10 gap-16'>
            <div className='w-[262.69px] pb-2.5 justify-start items-start flex'>
              <div className='text-zinc-800 text-3xl font-semibold leading-9'>
                2. Lasting impact
              </div>
            </div>
            <div className='w-[350.27px] pb-3 justify-start items-start flex'>
              <div className='w-[350.27px] h-[416px]'>
                <div className=' text-zinc-800 text-[17px] font-normal leading-loose'>
                  We choose projects that are able to keep
                  <br />
                  carbon out of the atmosphere for a long
                  <br />
                  time. If a project is planting trees, we
                  <br />
                  make sure there are safeguards in place
                  <br />
                  to prevent those trees being cut, burned,
                  <br />
                  or otherwise hurt. When there are
                  <br />
                  unavoidable risks, we make sure to leave a "buffer" and offset
                  more CO <sub>2</sub> than we
                </div>

                <div className=' text-zinc-800 text-[17px] font-normal leading-loose'>
                  need to so those risks are accounted for.
                  <br />
                  For most tree planting projects, a buffer
                  <br />
                  of about 10-20% is sufficient. In areas
                  <br />
                  with more wildfire or disease risks, the
                  <br />
                  buffer can be larger.
                </div>
              </div>
            </div>
            <div className='h-[244.17px] pb-2 flex-col justify-start items-start gap-[17.39px] flex'>
              <div className='pb-[29.78px] justify-start items-start flex'>
                <div className='text-zinc-800 text-base font-bold leading-snug'>
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className='w-[175.14px] h-36'>
                <div className=' text-zinc-800 text-base font-normal'>
                  1. Measurable results
                </div>
                <div className=' text-green-500 text-base font-normal'>
                  2. Lasting impact
                </div>
                <div className='pr-[25.14px] flex-col justify-start items-start gap-px flex'>
                  <div className='text-zinc-800 text-base font-normal'>
                    3. Wouldn’t happen
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    without your
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    funding
                  </div>
                </div>
                <div className=' text-zinc-800 text-base font-normal'>
                  4. No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3  */}
        <div className='w-full pb-16 justify-start items-start flex flex-col'>
          <img
            className='w-full h-[373px] object-cover'
            src={Land_3}
            alt='Land_3'
          />

          <div className='max-w-[1024px] mx-auto mt-5 h-[20.59px] pr-[406.71px] justify-start items-start gap-[7.38px] flex'>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                The production of these clean briquettes was funded by Forzero
                members.
              </div>
            </div>
          </div>

          <div className='max-w-[95%] mx-auto flex mt-10 lg:gap-16 '>
            <div className='w-[262.69px] pr-[34.69px] pb-2.5 justify-start items-start inline-flex'>
              <div className='text-zinc-800 text-3xl font-semibold leading-9'>
                3. Wouldn’t
                <br />
                happen without
                <br />
                your funding
              </div>
            </div>

            <div className='pb-3 flex-col justify-start items-start gap-[11px] flex'>
              <div className='w-[350.27px] pr-[26.27px] pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  Every project on Forzero needs funding
                  <br />
                  from carbon offsets in order to succeed.
                  <br />
                  That funding goes towards purchasing
                  <br />
                  the supplies and paying for the team
                  <br />
                  members necessary to make those
                  <br />
                  projects happen. If a project would be
                  <br />
                  profitable on its own without us, they
                  <br />
                  aren't eligible for Forzero.
                </div>
              </div>
              <div className='w-[350.27px] pr-[33.27px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  For instance, if a landowner has
                  <br />
                  protected their forest for hundreds of
                  <br />
                  years and there’s no reason they’d start
                  <br />
                  logging now, we won’t fund them. Their
                  <br />
                  forest will likely stay standing even
                  <br />
                  without money from carbon offsets.
                </div>
              </div>
              <div className='w-[350.27px] pr-[14.27px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  Similarly, in most countries today
                  <br />
                  renewable energy projects can be highly
                  <br />
                  profitable. We wouldn’t fund a renewable
                  <br />
                  energy project unless we could be certain
                  <br />
                  they need our funding.
                </div>
              </div>
            </div>

            <div className='h-[244.17px] pb-2 flex-col justify-start items-start gap-[17.40px] flex'>
              <div className='pb-[9.78px] justify-start items-start flex'>
                <div className='text-zinc-800 text-base font-bold leading-snug'>
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className='w-[175.14px]'>
                <div className='text-zinc-800 text-base font-normal'>
                  Measurable results
                </div>
                <div className=' text-zinc-800 text-base font-normal'>
                  Lasting impact
                </div>
                <div className='pr-[25.14px] pb-[2.39px] flex-col justify-start items-start gap-px flex'>
                  <div className='text-green-500 text-base font-normal'>
                    Wouldn’t happen
                  </div>
                  <div className='text-green-500 text-base font-normal'>
                    without your
                  </div>
                  <div className='text-green-500 text-base font-normal'>
                    funding
                  </div>
                </div>
                <div className='text-zinc-800 text-base font-normal'>
                  No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4  */}
        <div className='w-full pb-16 justify-start items-start flex flex-col'>
          <img className='w-full h-[373px] object-cover' src={Land_4} />

          <div className='max-w-[1024px] pr-[131.71px] justify-start items-start gap-[7.38px] mx-auto mt-5 flex'>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='pb-[0.59px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                For most projects, Forzero is one of the sole purchasers of
                carbon credits, limiting the risk of double counted credits.
              </div>
            </div>
          </div>

          <div className='max-w-[95%] mx-auto flex mt-10 lg:gap-16'>
            <div className='w-[262.69px] pr-[79.69px] pb-2.5 justify-start items-start flex'>
              <div className='text-zinc-800 text-3xl font-semibold leading-9'>
                4. No double
                <br />
                counting
              </div>
            </div>
            <div className=' pb-3 flex-col justify-start items-start gap-[11px] flex'>
              <div className='w-[350.27px] pr-[21.27px] pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  When you purchase a carbon offset on
                  <br />
                  Forzero, no one else gets credit for that
                  <br />
                  same offset. That means if some
                  <br />
                  company wants to go carbon neutral,
                  <br />
                  they can’t take credit for the impact that
                  <br />
                  you’re funding. This way, by offsetting
                  <br />
                  your carbon footprint on Forzero you’re
                  <br />
                  advancing the entire carbon offset
                  <br />
                  market, and setting a higher standard for
                  <br />
                  companies who want to claim carbon
                  <br />
                  neutrality.
                </div>
              </div>
              <div className='w-[350.27px] pr-[26.27px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  To ensure there’s no double counting,
                  <br />
                  projects we work with either have public
                  <br />
                  ledgers that show who gets credit for
                  <br />
                  which carbon offset, or we are the sole
                  <br />
                  buyer of carbon offsets from the project
                  <br />
                  (or sometimes both).
                </div>
              </div>
            </div>
            <div className='pb-2 flex-col justify-start items-start gap-[17.39px] flex'>
              <div className='pb-[29.78px] justify-start items-start flex'>
                <div className='text-zinc-800 text-base font-bold leading-snug'>
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className='w-[175.14px] '>
                <div className=' text-zinc-800 text-base font-normal'>
                  Measurable results
                </div>
                <div className=' text-zinc-800 text-base font-normal'>
                  Lasting impact
                </div>
                <div className=' pr-[25.14px] pb-[3.39px] flex-col justify-start items-start gap-px flex'>
                  <div className='text-zinc-800 text-base font-normal'>
                    Wouldn’t happen
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    without your
                  </div>
                  <div className='text-zinc-800 text-base font-normal'>
                    funding
                  </div>
                </div>
                <div className=' text-green-500 text-base font-normal'>
                  No double counting
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View  */}
      <div className=' sm:flex md:hidden flex-col min-w-[100vw] mt-16'>
        {/* Heading  */}
        <div className='min-w-[320px] mx-auto flex-col justify-center items-center flex'>
          <div className='w-[274.50px] pb-[11.59px] justify-center items-start flex'>
            <div className='text-center text-zinc-800 text-2xl font-semibold leading-7'>
              How we choose our
              <br />
              projects
            </div>
          </div>
          <div className='w-[274.50px] pl-[9.17px] pr-[8.33px] pb-[10.75px] justify-center items-start flex'>
            <div className='text-center text-zinc-800 text-[15px] font-normal leading-relaxed'>
              We guarantee the impact of each
              <br />
              project. If a project doesn’t offset as
              <br />
              much as planned, we fund another
              <br />
              project to make up the difference.
            </div>
          </div>
        </div>

        {/* Section 1  */}
        <div className='w-full pb-1 my-5 justify-start items-start flex flex-col'>
          <img className='w-full' src={Land_1} />

          <div className='justify-start items-end gap-[7.38px] flex'>
            <div className='justify-start items-start flex'>
              <div className='text-stone-500 text-sm px-5 mt-5 font-normal leading-tight'>
                ↑ An annotated satellite image shows potential reforestation
                sites in the Amazon.
              </div>
            </div>
          </div>

          <div className=' mx-auto flex-col justify-start items-start gap-[23px] flex'>
            <div className='pr-[29.50px] mx-auto py-[10.80px] justify-start items-start flex'>
              <div className='text-zinc-800 text-2xl font-semibold leading-7'>
                1. Measurable results
              </div>
            </div>
            <div className=' pb-3 flex-col m-auto justify-start items-start gap-3 flex'>
              <div className='px-[16.50px] mx-auto pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  The amount of carbon offset by
                  <br />
                  our projects is based on peer
                  <br />
                  reviewed science. There is a<br />
                  clear and direct relationship
                  <br />
                  between what we measure for a<br />
                  project (e.g. the diameter of a<br />
                  tree trunk) and how much
                  <br />
                  carbon is being offset.
                </div>
              </div>

              <div className=' mx-auto flex flex-col gap-5'>
                <div className='min-w-[320px] pl-[15px] text-zinc-800 text-[17px] font-normal leading-loose'>
                  The way we measure total
                  <br />
                  carbon offset varies depending
                  <br />
                  on the project. Here are two
                  <br />
                  examples:
                </div>

                {/* List  */}
                <div className=' pl-10 flex-col justify-start items-start flex'>
                  <ul className='flex gap-5 flex-col'>
                    <li className=' text-zinc-800 text-lg font-normal leading-loose'>
                      For our Community Tree Planting project , we measure tree
                      trunks on the ground every 18 months, then tie those
                      measurements to GPS coordinates and the names of the
                      farmers who planted them.
                    </li>

                    <li className=' text-zinc-800 text-lg font-normal leading-loose'>
                      For our, Tech Enabled Rainforest Protection project , we
                      start with figures from scientific literature. Then we
                      analyze satellite imagery from Global Forest Watch to
                      detect forest loss.
                    </li>
                  </ul>
                </div>

                <div className=' text-zinc-800 pl-[15px] text-[17px] font-normal leading-loose'>
                  Every project has different
                  <br />
                  requirements, but we only
                  <br />
                  partner with a project when
                  <br />
                  we’re confident in the project’s
                  <br />
                  monitoring plan.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2  */}
        <div className='w-full pb-1 mt-5 justify-normal flex flex-col'>
          <img className='w-[100vw]' src={Land_2} />

          <div className=' justify-start items-start gap-[7.38px] flex'>
            <div className='pb-[59.38px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='px-[4.13px] pb-[0.38px] justify-start items-start flex'>
              <div className='text-black text-opacity-70 text-sm font-normal leading-tight'>
                Forzero members are funding enhanced
                <br />
                mineral weathering, above, which
                <br />
                sequesters carbon with high-
                <br />
                permanence in basalt rocks.
              </div>
            </div>
          </div>

          <div className='min-w-[320px] pb-[0.01px] flex-col justify-normal items-center gap-6 flex'>
            <div className=' pb-[10.80px] justify-start items-start flex'>
              <div className='text-zinc-800 text-2xl font-semibold leading-7'>
                2. Lasting impact
              </div>
            </div>
            <div className='min-w-[274.50px] pb-3 justify-start items-start inline-flex'>
              <div className=''>
                <div className=' text-zinc-800 text-[17px] font-normal leading-loose'>
                  We choose projects that are able
                  <br />
                  to keep carbon out of the
                  <br />
                  atmosphere for a long time. If a<br />
                  project is planting trees, we
                  <br />
                  make sure there are safeguards
                  <br />
                  in place to prevent those trees
                  <br />
                  being cut, burned, or otherwise
                  <br />
                  hurt. When there are
                  <br />
                  unavoidable risks, we make sure
                  <br />
                  to leave a "buffer" and offset
                  <br />
                  more CO <sub>2</sub>
                </div>
                <div className=' text-zinc-800 text-[17px] font-normal leading-loose'>
                  {" "}
                  than we need to so
                </div>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  those risks are accounted for.
                  <br />
                  For most tree planting projects,
                  <br />a buffer of about 10-20% is
                  <br />
                  sufficient. In areas with more
                  <br />
                  wildfire or disease risks, the
                  <br />
                  buffer can be larger.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3  */}
        <div className='w-full pb-1 mt-5 justify-normal flex flex-col'>
          <img className='w-[100vw]' src={Land_3} />

          <div className='min-w-[274.50px] justify-start items-end gap-[7.38px] flex'>
            <div className='pb-[39.78px] pl-6 justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑ The production of these clean
                <br />
                briquettes was funded by Forzero
                <br />
                members.
              </div>
            </div>
          </div>

          <div className='min-w-[274.50px] flex-col justify-start items-center gap-[23.01px] flex'>
            <div className=' pr-[31.50px] pb-[11.59px] justify-start items-start flex'>
              <div className='text-zinc-800 text-2xl font-semibold leading-7'>
                3. Wouldn’t happen
                <br />
                without your funding
              </div>
            </div>
            <div className='pb-3 flex-col justify-start items-start gap-[11px] flex'>
              <div className='min-w-[274.50px] pr-[11.50px] pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  Every project on Forzero needs
                  <br />
                  funding from carbon offsets in
                  <br />
                  order to succeed. That funding
                  <br />
                  goes towards purchasing the
                  <br />
                  supplies and paying for the team
                  <br />
                  members necessary to make
                  <br />
                  those projects happen. If a<br />
                  project would be profitable on
                  <br />
                  its own without us, they aren't
                  <br />
                  eligible for Forzero.
                </div>
              </div>
              <div className='min-w-[274.50px] pr-[11.50px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  For instance, if a landowner has
                  <br />
                  protected their forest for
                  <br />
                  hundreds of years and there’s no
                  <br />
                  reason they’d start logging now,
                  <br />
                  we won’t fund them. Their
                  <br />
                  forest will likely stay standing
                  <br />
                  even without money from
                  <br />
                  carbon offsets.
                </div>
              </div>
              <div className='min-w-[274.50px] pr-[10.50px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  Similarly, in most countries
                  <br />
                  today renewable energy projects
                  <br />
                  can be highly profitable. We
                  <br />
                  wouldn’t fund a renewable
                  <br />
                  energy project unless we could
                  <br />
                  be certain they need our
                  <br />
                  funding.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4  */}
        <div className='w-full pb-1 mt-5 justify-normal flex flex-col'>
          <img className='w-[100vw]' src={Land_4} />

          <div className='min-w-[274.50px] justify-start items-start gap-[7.38px] flex'>
            <div className='pb-[59.38px] justify-start items-start flex'>
              <div className='text-stone-500 text-sm font-normal leading-tight'>
                ↑
              </div>
            </div>
            <div className='pr-[9.13px] py-[0.38px] justify-start items-start flex'>
              <div className='text-black text-opacity-70 text-sm font-normal leading-tight'>
                For most projects, Forzero is one of the
                <br />
                sole purchasers of carbon credits,
                <br />
                limiting the risk of double counted
                <br />
                credits.
              </div>
            </div>
          </div>

          <div className='min-w-[274.50px] flex-col mt-5 justify-start items-center gap-[23.01px] flex'>
            <div className='min-w-[274.50px] pr-[19.50px] pb-[10.80px] justify-start items-start inline-flex'>
              <div className='text-zinc-800 text-2xl font-semibold leading-7'>
                4. No double counting
              </div>
            </div>
            <div className='min-w-[274.50px] pb-3 flex-col justify-start items-start gap-[11px] flex'>
              <div className='min-w-[274.50px] pr-[14.50px] pb-px justify-start items-start flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  When you purchase a carbon
                  <br />
                  offset on Forzero, no one else gets
                  <br />
                  credit for that same offset. That
                  <br />
                  means if some company wants
                  <br />
                  to go carbon neutral, they can’t
                  <br />
                  take credit for the impact that
                  <br />
                  you’re funding. This way, by
                  <br />
                  offsetting your carbon footprint
                  <br />
                  on Forzero you’re advancing the
                  <br />
                  entire carbon offset market, and
                  <br />
                  setting a higher standard for
                  <br />
                  companies who want to claim
                  <br />
                  carbon neutrality.
                </div>
              </div>
              <div className='min-w-[274.50px] pr-[12.50px] pb-px justify-start items-start inline-flex'>
                <div className='text-zinc-800 text-[17px] font-normal leading-loose'>
                  To ensure there’s no double
                  <br />
                  counting, projects we work with
                  <br />
                  either have public ledgers that
                  <br />
                  show who gets credit for which
                  <br />
                  carbon offset, or we are the sole
                  <br />
                  buyer of carbon offsets from the
                  <br />
                  project (or sometimes both).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
