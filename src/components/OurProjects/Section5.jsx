import React from "react";
import Land_1 from "../../assets/land_1.png";
import Land_2 from "../../assets/land_2.png";
import Land_3 from "../../assets/land_3.png";
import Land_4 from "../../assets/land_4.png";

const Section5 = () => {
  return (
    <div className=" w-full">
      {/* Desktop  */}
      <div className="">
        <div className="  max-w-[1024px] mx-auto h-[140px] flex-col justify-center items-center gap-[9px] flex">
          <div className="text-center text-zinc-800 text-3xl font-semibold leading-9">
            How we choose our projects
          </div>
          <div className="self-stretch pl-[12.86px] pr-[12.14px] pb-[11px] justify-center items-start inline-flex">
            <div className="text-center text-zinc-800 text-[17px] font-normal leading-7">
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
        <div className="w-full pb-1 justify-start items-start flex flex-col">
          <img
            className=" h-[373px] w-full relative object-cover"
            src={Land_1}
          />

          <div className="max-w-[1024px] mx-auto h-[20.59px] justify-start items-start gap-[7.38px] flex">
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                ↑
              </div>
            </div>
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                An annotated satellite image shows potential reforestation sites
                in the Amazon.
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto mt-5 flex">
            <div className="w-[30%] pr-[63.69px] pb-2.5 justify-start items-start flex">
              <div className="text-zinc-800 text-3xl font-semibold leading-9">
                1. Measurable
                <br />
                results
              </div>
            </div>
            <div className=" pb-3 flex-col justify-start items-start gap-3 flex">
              <div className=" pr-[32.27px] pb-px justify-start items-start flex">
                <div className="text-zinc-800 text-[17px] font-normal ">
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
              <div className="w-[350.27px]">
                <div className=" text-zinc-800 text-[17px] font-normal ">
                  The way we measure total carbon offset
                  <br />
                  varies depending on the project. Here are
                  <br />
                  two examples:
                </div>
                <div className=" pl-10 flex-col justify-start items-start flex">
                  <ul className="w-[310.27px] h-48">
                    <li className=" text-zinc-800 text-lg font-normal ">
                      For our{" "}
                      <span className="text-blue-500 text-lg font-normal underline ">
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
                  <div className="w-[310.27px] h-48 ">
                    <div className=" text-zinc-800 text-lg font-normal ">
                      For our{" "}
                      <span className=" text-blue-500 text-lg font-normal underline">
                        Tech Enabled Rainforest Protection project
                      </span>
                      , we start with figures from scientific literature.
                      <br />
                      Then we analyze satellite imagery
                      <br />
                      from Global Forest Watch
                    </div>
                    <div className=" text-zinc-800 text-[17px] font-normal ">
                      to detect
                    </div>
                    <div className=" text-zinc-800 text-[17px] font-normal ">
                      forest loss.
                    </div>
                  </div>
                </div>
                <div className=" text-zinc-800 text-[17px] font-normal mt-5">
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
            <div className=" pb-2  flex-col justify-start items-start gap-[17.39px] flex">
              <div className="pb-[29.78px] justify-start items-start flex">
                <div className="text-zinc-800 text-base font-bold leading-snug">
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className="w-[175.14px] ">
                <div className=" text-green-500 text-base font-normal">
                  1. Measurable results
                </div>
                <div className=" text-zinc-800 text-base font-normal">
                  2. Lasting impact
                </div>
                <div className="pr-[25.14px] pb-[3.39px]  flex-col justify-start items-start gap-px flex">
                  <div className="text-zinc-800 text-base font-normal">
                    3. Wouldn’t happen
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    without your
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    funding
                  </div>
                </div>
                <div className=" text-zinc-800 text-base font-normal">
                  4. No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2  */}
        <div className="w-full pb-16 justify-start items-start flex flex-col">
          <img className="w-full h-[373px] object-cover" src={Land_2} />

          <div className="max-w-[1024px] h-[20.59px] mx-auto pr-[28.71px] mt-5 justify-start items-start gap-[7.38px] flex">
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                ↑
              </div>
            </div>
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                Wren members are funding enhanced mineral weathering, above,
                which sequesters carbon with high-permanence in basalt rocks.
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto flex mt-10 gap-16">
            <div className="w-[262.69px] pb-2.5 justify-start items-start flex">
              <div className="text-zinc-800 text-3xl font-semibold leading-9">
                2. Lasting impact
              </div>
            </div>
            <div className="w-[350.27px] pb-3 justify-start items-start flex">
              <div className="w-[350.27px] h-[416px]">
                <div className=" text-zinc-800 text-[17px] font-normal leading-loose">
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

                <div className=" text-zinc-800 text-[17px] font-normal leading-loose">
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
            <div className="h-[244.17px] pb-2 flex-col justify-start items-start gap-[17.39px] flex">
              <div className="pb-[29.78px] justify-start items-start flex">
                <div className="text-zinc-800 text-base font-bold leading-snug">
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className="w-[175.14px] h-36">
                <div className=" text-zinc-800 text-base font-normal">
                  1. Measurable results
                </div>
                <div className=" text-green-500 text-base font-normal">
                  2. Lasting impact
                </div>
                <div className="pr-[25.14px] flex-col justify-start items-start gap-px flex">
                  <div className="text-zinc-800 text-base font-normal">
                    3. Wouldn’t happen
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    without your
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    funding
                  </div>
                </div>
                <div className=" text-zinc-800 text-base font-normal">
                  4. No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3  */}
        <div className="w-full pb-16 justify-start items-start flex flex-col">
          <img
            className="w-full h-[373px] object-cover"
            src={Land_3}
            alt="Land_3"
          />

          <div className="max-w-[1024px] mx-auto mt-5 h-[20.59px] pr-[406.71px] justify-start items-start gap-[7.38px] flex">
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                ↑
              </div>
            </div>
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                The production of these clean briquettes was funded by Wren
                members.
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto flex mt-10 gap-16 ">
            <div className="w-[262.69px] pr-[34.69px] pb-2.5 justify-start items-start inline-flex">
              <div className="text-zinc-800 text-3xl font-semibold leading-9">
                3. Wouldn’t
                <br />
                happen without
                <br />
                your funding
              </div>
            </div>

            <div className="pb-3 flex-col justify-start items-start gap-[11px] flex">
              <div className="w-[350.27px] pr-[26.27px] pb-px justify-start items-start flex">
                <div className="text-zinc-800 text-[17px] font-normal leading-loose">
                  Every project on Wren needs funding
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
                  aren't eligible for Wren.
                </div>
              </div>
              <div className="w-[350.27px] pr-[33.27px] pb-px justify-start items-start inline-flex">
                <div className="text-zinc-800 text-[17px] font-normal leading-loose">
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
              <div className="w-[350.27px] pr-[14.27px] pb-px justify-start items-start inline-flex">
                <div className="text-zinc-800 text-[17px] font-normal leading-loose">
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

            <div className="h-[244.17px] pb-2 flex-col justify-start items-start gap-[17.40px] flex">
              <div className="pb-[9.78px] justify-start items-start flex">
                <div className="text-zinc-800 text-base font-bold leading-snug">
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className="w-[175.14px]">
                <div className="text-zinc-800 text-base font-normal">
                  Measurable results
                </div>
                <div className=" text-zinc-800 text-base font-normal">
                  Lasting impact
                </div>
                <div className="pr-[25.14px] pb-[2.39px] flex-col justify-start items-start gap-px flex">
                  <div className="text-green-500 text-base font-normal">
                    Wouldn’t happen
                  </div>
                  <div className="text-green-500 text-base font-normal">
                    without your
                  </div>
                  <div className="text-green-500 text-base font-normal">
                    funding
                  </div>
                </div>
                <div className="text-zinc-800 text-base font-normal">
                  No double counting
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4  */}
        <div className="w-full pb-16 justify-start items-start flex flex-col">
          <img className="w-full h-[373px] object-cover" src={Land_4} />

          <div className="max-w-[1024px] pr-[131.71px] justify-start items-start gap-[7.38px] mx-auto mt-5 flex">
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                ↑
              </div>
            </div>
            <div className="pb-[0.59px] justify-start items-start flex">
              <div className="text-stone-500 text-sm font-normal leading-tight">
                For most projects, Wren is one of the sole purchasers of carbon
                credits, limiting the risk of double counted credits.
              </div>
            </div>
          </div>

          <div className="max-w-[1024px] mx-auto flex mt-10 gap-16">
            <div className="w-[262.69px] pr-[79.69px] pb-2.5 justify-start items-start flex">
              <div className="text-zinc-800 text-3xl font-semibold leading-9">
                4. No double
                <br />
                counting
              </div>
            </div>
            <div className=" pb-3 flex-col justify-start items-start gap-[11px] flex">
              <div className="w-[350.27px] pr-[21.27px] pb-px justify-start items-start flex">
                <div className="text-zinc-800 text-[17px] font-normal leading-loose">
                  When you purchase a carbon offset on
                  <br />
                  Wren, no one else gets credit for that
                  <br />
                  same offset. That means if some
                  <br />
                  company wants to go carbon neutral,
                  <br />
                  they can’t take credit for the impact that
                  <br />
                  you’re funding. This way, by offsetting
                  <br />
                  your carbon footprint on Wren you’re
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
              <div className="w-[350.27px] pr-[26.27px] pb-px justify-start items-start inline-flex">
                <div className="text-zinc-800 text-[17px] font-normal leading-loose">
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
            <div className="pb-2 flex-col justify-start items-start gap-[17.39px] flex">
              <div className="pb-[29.78px] justify-start items-start flex">
                <div className="text-zinc-800 text-base font-bold leading-snug">
                  How we choose
                  <br />
                  projects
                </div>
              </div>
              <div className="w-[175.14px] ">
                <div className=" text-zinc-800 text-base font-normal">
                  Measurable results
                </div>
                <div className=" text-zinc-800 text-base font-normal">
                  Lasting impact
                </div>
                <div className=" pr-[25.14px] pb-[3.39px] flex-col justify-start items-start gap-px flex">
                  <div className="text-zinc-800 text-base font-normal">
                    Wouldn’t happen
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    without your
                  </div>
                  <div className="text-zinc-800 text-base font-normal">
                    funding
                  </div>
                </div>
                <div className=" text-green-500 text-base font-normal">
                  No double counting
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
