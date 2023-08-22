import React, { useEffect } from "react";
import { useState } from "react";
import face_1 from "../../assets/face_1.png";
import face_2 from "../../assets/face_2.png";
import face_3 from "../../assets/face_3.png";
import face_4 from "../../assets/face_4.png";
import face_5 from "../../assets/face_5.png";
import face_6 from "../../assets/face_6.png";
import face_7 from "../../assets/face_7.png";
import face_8 from "../../assets/face_8.png";
import face_9 from "../../assets/face_9.png";
import face_10 from "../../assets/face_10.png";
import face_11 from "../../assets/face_11.png";
import face_12 from "../../assets/face_12.png";
import face_13 from "../../assets/face_13.png";
import face_14 from "../../assets/face_14.png";
import face_15 from "../../assets/face_15.png";
import face_16 from "../../assets/face_16.png";
import face_17 from "../../assets/face_17.png";

const Section6 = () => {

  const reviewList = [
    {
      id: 1,
      name: "Priya Singh",
      title: "CEO of ABC Company",
      review:
        "ForZero has been a game-changer for me. Finally, a carbon offset company that's not just all talk! Their transparency and commitment to meaningful offsets are truly commendable.",
      image: face_1,
    },
    {
      id: 2,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "I was skeptical at first, but ForZero blew me away with their genuine approach to offsetting. Unlike other companies, they provide clear, research-backed solutions that actually make a difference.",
      image: face_2,
    },
    {
      id: 3,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "Impressed by ForZero's dedication to transparency and real impact. It's refreshing to see a startup that walks the talk when it comes to offsetting personal footprints.",
      image: face_3,
    },
    {
      id: 4,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero is a breath of fresh air in the world of carbon offsets. Their straightforward approach and concrete results set them apart from the rest.",
      image: face_4,
    },
    {
      id: 5,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero's commitment to transparency is what won me over. Unlike other offsetting options, they provide detailed information and evidence of their impact, making me a loyal supporter.",
      image: face_5,
    },
    {
      id: 6,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "I'm thrilled to have found ForZero! Their authenticity shines through, and I can trust that my efforts to offset my footprint are making a true impact.",
      image: face_6,
    },
    {
      id: 7,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "Kudos to ForZero for bringing transparency to the forefront of carbon offsetting. They've gained my trust by going beyond mere lip service and delivering substantial, researched solutions.",
      image: face_7,
    },
    {
      id: 8,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero has redefined carbon offsetting for me. Their well-researched methods and meaningful offsets prove that they're not just another company in the space.",
      image: face_8,
    },
    {
      id: 9,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "I've tried other carbon offset platforms, but ForZero's genuine approach and real impact have made me a believer. They're the real deal.",
      image: face_9,
    },
    {
      id: 10,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero's sincerity is evident in everything they do. From their realistic approach to the way they communicate, they've set a new standard for carbon offset startups.",
      image: face_10,
    },
    {
      id: 11,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "I'm thrilled to have found ForZero! Their authenticity shines through, and I can trust that my efforts to offset my footprint are making a true impact.",
      image: face_11,
    },
    {
      id: 12,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "Kudos to ForZero for bringing transparency to the forefront of carbon offsetting. They've gained my trust by going beyond mere lip service and delivering substantial, researched solutions.",
      image: face_12,
    },
    {
      id: 13,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "I've tried other carbon offset platforms, but ForZero's genuine approach and real impact have made me a believer. They're the real deal.",
      image: face_13,
    },
    {
      id: 14,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero has been a game-changer for me. Finally, a carbon offset company that's not just all talk! Their transparency and commitment to meaningful offsets are truly commendable.",
      image: face_14,
    },
    {
      id: 15,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero's sincerity is evident in everything they do. From their realistic approach to the way they communicate, they've set a new standard for carbon offset startups",
      image: face_15,
    },
    {
      id: 16,
      name: "John Doe",
      title: "CEO of ABC Company",
      review:
        "ForZero is a breath of fresh air in the world of carbon offsets. Their straightforward approach and concrete results set them apart from the rest.",
      image: face_16,
    },
  ];

  const [currentReview, setCurrentReview] = useState(reviewList[0]);

  const handleNextReview = (id) => {
    const nextReview = reviewList.find((review) => review.id === id);
    if (nextReview) {
      setCurrentReview(nextReview);
    } else {
      setCurrentReview(reviewList[0]);
    }
  };

  var i = 0;

  //function such that the review changes every 5 seconds
  function changeReview() {
    setInterval(() => {
        setCurrentReview(reviewList[i]);
        console.log("Changing review", i);
    }, 5000);
    i++;
  }




  return (
    <div className='w-full justify-start items-start'>
      <div className='w-full p-[60px] bg-neutral-50 flex-col justify-start items-center gap-[30px] sm:hidden lg:flex '>
        <div className='w-[500px] h-[115.59px] relative'>
          <div className='left-[66.36px] top-[7px] absolute text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
            Members from
          </div>
          <div className='left-[331.64px] top-[-1px] absolute text-center text-zinc-800 text-[42px] font-semibold leading-[57.60px]'>
            100+
          </div>
          <div className='left-[18.89px] top-[56.59px] absolute text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
            countries love using Forzero!
          </div>
        </div>
        <div className='w-[1740px] h-[430.39px] relative'>
          <div className='w-[1710px] h-[400px] left-0 top-0 absolute'>
            <img
              className='w-[66px] h-[66px] left-[5%] top-[20%] absolute rounded-[66px] shadow cursor-pointer hover:scale-95'
              src={face_1}
              onClick={() => handleNextReview(1)}
            />
            <div className='w-[50px] left-[256.50px] top-[120px] absolute rounded-[50px] justify-start items-start inline-flex'>
              <div className='w-[50px] h-[50px] relative' />
            </div>
            <img
              className='w-16 h-16 left-[10%] top-[50%] absolute rounded-[64px] cursor-pointer hover:scale-95'
              src={face_2}
              onClick={() => handleNextReview(2)}
            />
            <img
              className='w-[66px] h-[66px] left-[15%] top-[30%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_3}
              onClick={() => handleNextReview(3)}
            />
            <img
              className='w-[50px] h-[50px] left-[20%] top-[70%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_4}
              onClick={() => handleNextReview(4)}
            />
            <img
              className='w-16 h-16 left-[25%] top-[39%] absolute rounded-[64px] cursor-pointer hover:scale-95'
              src={face_5}
              onClick={() => handleNextReview(5)}
            />
            <img
              className='w-[66px] h-[66px] left-[28%] top-[65%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_6}
              onClick={() => handleNextReview(6)}
            />
            <img
              className='w-[50px] h-[50px] left-[65%] top-[23%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_7}
              onClick={() => handleNextReview(7)}
            />
            <img
              className='w-16 h-16 left-[68%] top-[60%] absolute rounded-[64px] cursor-pointer hover:scale-95'
              src={face_8}
              onClick={() => handleNextReview(8)}
            />
            <img
              className='w-[66px] h-[66px] left-[75%] top-[30%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_9}
              onClick={() => handleNextReview(9)}
            />
            <img
              className='w-[50px] h-[50px] left-[78%] top-[53%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_10}
              onClick={() => handleNextReview(10)}
            />
            <img
              className='w-16 h-16 left-[85%] top-[20%] absolute rounded-[64px] cursor-pointer hover:scale-95'
              src={face_11}
              onClick={() => handleNextReview(11)}
            />
            <img
              className='w-[66px] h-[66px] left-[88%] top-[66%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_12}
              onClick={() => handleNextReview(12)}
            />
            <img
              className='w-[50px] h-[50px] left-[95%] top-[30%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_13}
              onClick={() => handleNextReview(13)}
            />
            <img
              className='w-16 h-16 left-[82%] top-[80%] absolute rounded-[64px] cursor-pointer hover:scale-95'
              src={face_14}
              onClick={() => handleNextReview(14)}
            />
            <img
              className='w-[66px] h-[66px] left-[35%] top-[10%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_15}
              onClick={() => handleNextReview(15)}
            />
            <img
              className='w-[50px] h-[50px] left-[65%] top-[51%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_16}
              onClick={() => handleNextReview(16)}
            />
            <img
              className='w-16 h-16 left-[8%] top-[79%] absolute rounded-[64px] cursor-pointer hover:scale-95 '
              src={face_1}
              onClick={() => handleNextReview(1)}  
            />
            <img
              className='w-[66px] h-[66px] left-[1%] top-[48%] absolute rounded-[66px] cursor-pointer hover:scale-95'
              src={face_12}
              onClick={() => handleNextReview(12)}
            />
            <img
              className='w-[50px] h-[50px] left-[55%] top-[5%] absolute rounded-[50px] cursor-pointer hover:scale-95'
              src={face_13}
              onClick={() => handleNextReview(13)}
            />
          </div>
          <div className='w-[350px] h-[350px] left-[695px] top-[20px] absolute bg-white rounded border border-zinc-900'>
            <img
              className='w-[60px] h-[60px] left-[137.50px] top-[27px] absolute rounded-[60px] hover:scale-95'
              src={currentReview.image}
            />
            <div className='left-[121.27px] top-[99px] absolute text-center text-zinc-800 text-base font-semibold leading-snug'>
              {currentReview.name}
            </div>
            <div className='left-[116.72px] top-[121.39px] absolute opacity-30 text-center text-zinc-800 text-base font-normal leading-snug'>
              {`@${currentReview.name}`}
            </div>
            <div className='h-[135.95px] px-[0.08px] left-[3px] top-[160.79px] absolute flex-col justify-start items-center gap-[0.95px] inline-flex'>
              <div className='text-center text-zinc-800 text-base font-normal leading-snug'>
                {`"${currentReview.review}"`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB VIEW */}
      <div className='w-full p-[60px] bg-neutral-50 flex-col justify-start items-center gap-[30px] sm:hidden md:flex lg:hidden'>
        <div className='w-[500px] h-[115.59px] relative'>
          <div className='left-[66.36px] top-[7px] absolute text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
            Members from
          </div>
          <div className='left-[331.64px] top-[-1px] absolute text-center text-zinc-800 text-[42px] font-semibold leading-[57.60px]'>
            100+
          </div>
          <div className='left-[18.89px] top-[56.59px] absolute text-center text-zinc-800 text-4xl font-semibold leading-[48px]'>
            countries love using Forzero!
          </div>
        </div>
        <div className='w-[648px] h-[430.39px] relative'>
          <div className='w-[618px] h-[400px] left-0 top-0 absolute'>
            <img
              className='w-[66px] h-[66px] left-[5%] top-[20%] absolute rounded-[66px] shadow'
              src={face_1}
              onClick={() => handleNextReview(1)}
            />
            <div className='w-[50px] left-[10%] top-[50%] absolute rounded-[50px] justify-start items-start inline-flex'>
              <div className='w-[50px] h-[50px] relative' />
            </div>
            <img
              className='w-16 h-16 left-[15%] top-[156px] absolute rounded-[64px]'
              src={face_2}
              onClick={() => handleNextReview(2)}
            />
            <img
              className='w-[66px] h-[66px] left-[216.30px] top-[136px] absolute rounded-[66px]'
              src={face_3}
              onClick={() => handleNextReview(3)}
            />
            <img
              className='w-[50px] h-[50px] left-[278.09px] top-[80px] absolute rounded-[50px]'
              src={face_4}
              onClick={() => handleNextReview(4)}
            />
            <img
              className='w-16 h-16 left-[339.89px] top-[144px] absolute rounded-[64px]'
              src={face_5}
              onClick={() => handleNextReview(5)}
            />
            <img
              className='w-[66px] h-[66px] left-[401.69px] top-[92px] absolute rounded-[66px]'
              src={face_6}
              onClick={() => handleNextReview(6)}
            />
            <img
              className='w-[50px] h-[50px] left-[463.50px] top-[120px] absolute rounded-[50px]'
              src={face_7}
              onClick={() => handleNextReview(7)}
            />
            <img
              className='w-16 h-16 left-[525.30px] top-[80px] absolute rounded-[64px]'
              src={face_8}
              onClick={() => handleNextReview(8)}
            />
            <img
              className='w-[66px] h-[66px] left-[587.09px] top-[120px] absolute rounded-[66px]'
              src={face_9}
              onClick={() => handleNextReview(9)}
            />
            <img
              className='w-[50px] h-[50px] left-[61.80px] top-[200px] absolute rounded-[50px]'
              src={face_10}
              onClick={() => handleNextReview(10)}
            />
            <img
              className='w-16 h-16 left-[173.03px] top-[260px] absolute rounded-[64px]'
              src={face_11}
              onClick={() => handleNextReview(11)}
            />
            <img
              className='w-[66px] h-[66px] left-[234.83px] top-[212px] absolute rounded-[66px]'
              src={face_12}
              onClick={() => handleNextReview(12)}
            />
            <img
              className='w-[50px] h-[50px] left-[296.63px] top-[256px] absolute rounded-[50px]'
              src={face_13}
              onClick={() => handleNextReview(13)}
            />
            <img
              className='w-16 h-16 left-[358.44px] top-[224px] absolute rounded-[64px]'
              src={face_14}
              onClick={() => handleNextReview(14)}
            />
            <img
              className='w-[66px] h-[66px] left-[420.23px] top-[240px] absolute rounded-[66px]'
              src={face_15}
              onClick={() => handleNextReview(15)}
            />
            <img
              className='w-[50px] h-[50px] left-[482.03px] top-[212px] absolute rounded-[50px]'
              src={face_16}
              onClick={() => handleNextReview(16)}
            />
            <img
              className='w-16 h-16 left-[543.83px] top-[264px] absolute rounded-[64px]'
              src={face_1}
              onClick={() => handleNextReview(1)}
            />
            <img
              className='w-[66px] h-[66px] left-[30.89px] top-[80px] absolute rounded-[66px]'
              src={face_2}
              onClick={() => handleNextReview(2)}

            />
            <img
              className='w-[50px] h-[50px] left-[123.59px] top-[280px] absolute rounded-[50px]'
              src={face_3}
              onClick={() => handleNextReview(3)}
            />
          </div>
          <div className='w-[350px] h-[350px] left-[149px] top-[20px] absolute bg-white rounded border border-zinc-900'>
            <img
              className='w-[60px] h-[60px] left-[145px] top-[27px] absolute rounded-[60px]'
              src={currentReview.image}
            />
            <div className='left-[128.77px] top-[99px] absolute text-center text-zinc-800 text-base font-semibold leading-snug'>
              {currentReview.name}
            </div>
            <div className='left-[124.22px] top-[121.39px] absolute opacity-30 text-center text-zinc-800 text-base font-normal leading-snug'>
              {`@${currentReview.name}`}
            </div>
            <div className='left-[7px] top-[161.78px] absolute flex-col justify-center items-center gap-px inline-flex'>
              <div className='text-center text-zinc-800 text-base font-normal leading-snug'>
                {currentReview.review}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className='max-w-[100vw] bg-neutral-50 h-[741.59px] justify-start items-start sm:flex md:hidden'>
        <div className='max-w-[320px] mx-auto py-[50px] pb-[49.99px]  flex-col justify-start items-center flex'>
          <div className='w-[300px] h-[67.59px] relative'>
            <div className='left-[43.27px] top-[-1px] absolute text-center text-zinc-800 text-[22px] font-semibold leading-7'>
              Members from
            </div>
            <div className='left-[204.23px] top-[-1px] absolute text-center text-zinc-800 text-[21px] font-semibold leading-7'>
              100+
            </div>
            <div className='left-[14.73px] top-[27.80px] absolute text-center text-zinc-800 text-[21px] font-semibold leading-7'>
              countries love using Forzero!
            </div>
          </div>
          <div className='w-[100vw] h-[624px] relative'>
            <div className='w-[100vw] h-[400px] -left-[40px] top-0 absolute'>
              <img
                className='w-[30px] h-[30px] left-[5%] top-[20%] absolute rounded-[30px] shadow'
                src={face_1}
                onClick={() => handleNextReview(1)}
              />
              <div className='w-10 left-[60px] top-[120px] absolute rounded-[40px] justify-start items-start inline-flex'>
                <div className='w-10 h-10 relative' />
              </div>
              <img
                className='w-[45px] h-[45px] left-[10%] top-[50%] absolute rounded-[45px]'
                src={face_2}
                onClick={() => handleNextReview(2)}
              />
              <img
                className='w-[30px] h-[30px] left-[140px] top-[136px] absolute rounded-[30px]'
                src={face_3}
                onClick={() => handleNextReview(3)}
              />
              <img
                className='w-10 h-10 left-[180px] top-[80px] absolute rounded-[40px]'
                src={face_4}
                onClick={() => handleNextReview(4)}
              />
              <img
                className='w-[45px] h-[45px] left-[220px] top-[144px] absolute rounded-[45px]'
                src={face_5}
                onClick={() => handleNextReview(5)}
              />
              <img
                className='w-[30px] h-[30px] left-[260px] top-[92px] absolute rounded-[30px]'
                src={face_6}
                onClick={() => handleNextReview(6)}
              />
              <img
                className='w-10 h-10 left-[300px] top-[120px] absolute rounded-[40px]'
                src={face_7}
                onClick={() => handleNextReview(7)}
              />
              <img
                className='w-[45px] h-[45px] left-[340px] top-[80px] absolute rounded-[45px]'
                src={face_8}
                onClick={() => handleNextReview(8)}
              />
              <img
                className='w-[30px] h-[30px] left-[380px] top-[120px] absolute rounded-[30px]'
                src={face_9}
                onClick={() => handleNextReview(9)}
              />
            </div>
            <div className='w-[320px] h-[350px] left-[40px] top-[274px] absolute bg-white rounded border border-zinc-900'>
              <img
                className='w-[60px] h-[60px] left-[145px] top-[27px] absolute rounded-[60px]'
                src={currentReview.image}
              />
              <div className='left-[131.64px] top-[99px] absolute text-center text-zinc-800 text-[15px] font-semibold leading-[21px]'>
                {currentReview.name}
              </div>
              <div className='left-[127.33px] top-[120px] absolute opacity-30 text-center text-zinc-800 text-[15px] font-normal leading-[21px]'>
                {`@${currentReview.name}`}
              </div>
              <div className='h-[126px] pl-[4.70px] pr-[4.30px] left-[27px] top-[159px] absolute flex-col justify-start items-center inline-flex'>
                <div className='text-center text-zinc-800 text-[15px] font-normal leading-[21px]'>
                  {currentReview.review}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
