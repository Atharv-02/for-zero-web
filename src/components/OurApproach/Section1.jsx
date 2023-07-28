import React from "react";
import approachVid from "../../assets/approach-animation-720.mp4";
import fern from "../../assets/fern-img.avif";
import approach1 from "../../assets/you-funded-rainforest-protection.avif";
const Section1 = () => {
  return (
    <div className='upper-approach'>
      <img src={fern} alt='' className='fern fern-1' />
      <img src={fern} alt='' className='fern fern-2' />

      <div className='first-text'>
        <h1>
          We built Wren to make it easier for you to tackle the climate crisis.
        </h1>

        <video
          style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt='All the devices'
          src={approachVid}
        />
      </div>
      <div className='total-header'>
        <h1>
          No single person can end the climate crisis on their own, but change
          always starts with people who care.
        </h1>
        <p>
          <span className='inner-p'>
            The climate crisis is overwhelming. Every week, there are stories of
            more floods, fires, and famines happening because of our heating
            atmosphere.
          </span>
          <span className='inner-p'>
            Luckily, we have no shortage of solutions—we just need to implement
            them. From tree planting and ecosystem conservation to renewable
            energy and plant-based diets, experts have identified over 100
            solutions to the climate crisis ready for action today.
          </span>
          <span className='inner-p'>
            We built Wren for the millions of people who want to help, but
            aren’t sure where they can have a real impact.
          </span>
        </p>
      </div>
      <div className='three-approaches'>
        <h1 className='overall-header'>
          How Wren helps you have an impact today:
        </h1>
        <div className='approach-1'>
          <div className='image'>
            <svg
              width='41.39533859324643'
              height='41.39533859324643'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M47.0305 24.3264C47.0291 37.3532 36.5287 47.8124 23.4589 47.8074C10.4857 47.8024 0.0216787 37.2814 0.0318219 24.2529C0.0417275 11.2375 10.557 0.79344 23.639 0.807387C36.5703 0.819769 47.0331 11.3388 47.0318 24.3277L47.0305 24.3264ZM11.0842 24.4032C16.3698 27.528 20.2408 31.9975 23.7216 36.8988C26.6269 31.4433 31.3335 27.8851 36.1347 24.3759C30.759 21.3349 27.0226 16.7648 23.5868 11.8104C20.111 16.7107 16.4242 21.3041 11.0842 24.403V24.4032Z'
                fill='#f79f22'
              ></path>
            </svg>
          </div>

          <div className='approach-inner'>
            <h1>1. Wren helps you fund key solutions</h1>
            <p className='app-p'>
              Make an impact by funding offsets, conservation, and policy.
            </p>
            <div className='inner-p'>
              <p>
                For those who can spare some money, funding climate solutions is
                the easiest way you can help. Wren makes this easy through our
                monthly subscription: Sign up in 5 minutes to fund the best
                groups doing tree planting, conservation, technology R&D, and
                policy work.
              </p>
              <div className='approach-inner-img'>
                <img src={approach1} alt='' />

                <h2>Wren member impact by month</h2>
                <img src={approach1} alt='' />
                <p>
                  Thousands of Wren members send millions of dollars each year
                  to key climate solutions.
                </p>
              </div>

              <p>
                We look specifically for solutions that won’t happen without
                outside funding. Solutions like solar panels and electric cars
                are able to turn a profit without our money, but other critical
                solutions like rainforest protection and carbon removal
                technologies don’t have a path to generating revenue. The policy
                work we fund also has to rely entirely on philanthropic funding,
                but it can be very high leverage in combatting climate change.
              </p>
            </div>
          </div>
        </div>

        <div className='approach-1'>
          <div className='image img-2'>
            <svg
              width='41.39533859324643'
              height='41.39533859324643'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16.8914 41.823C9.42832 39.7039 -12.099 30.6482 12.2972 0.552368C25.4894 9.131 30.5728 16.679 31.5139 22.9163C25.2038 25.0817 20.2513 28.7524 20.2513 36.0374C16.8144 28.2054 15.2677 18.2441 14.1109 11.4905C13.5309 19.3799 14.7456 33.4125 16.8914 41.823Z'
                fill='#27ae60'
              ></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M24.3722 44.2465C22.4781 39.1804 18.5433 22.7106 47.9438 23.6185C48.8066 49.4911 34.5653 48.5361 28.0978 46.7897C30.7751 41.7751 34.2216 37.2493 38.5828 33.4281C33.2327 36.2783 28.4683 39.8938 24.3722 44.2465Z'
                fill='#27ae60'
              ></path>
            </svg>
          </div>

          <div className='approach-inner'>
            <h1>2. Wren helps you take action</h1>
            <p className='app-p'>
              Make an impact by making sustainable lifestyle changes and pushing
              for political change.
            </p>
            <div className='inner-p'>
              <p>
                For anyone willing to put time and energy into helping with the
                climate crisis, it can be hard to tell what moves the needle.
                Wren makes this easy by suggesting actions you can take based on
                your lifestyle and interests.
              </p>
              <div className='approach-inner-img'>
                <img src={approach1} alt='' />

                <p>
                  Wren helps you take action, from buying sustainable groceries
                  to decarbonizing your savings.
                </p>
              </div>

              <p>
                For some people, the best way to have an impact is participating
                in activism and being a loud voice to spread awareness on the
                climate crisis. But for others, the best way to get started
                might be cooking more plant-based or even just talking to family
                members about the climate crisis. Every suggestion in our
                Actions tool is personalized to you, and we create guides to
                make having an impact as easy as we can.
              </p>
            </div>
          </div>
        </div>

        <div className='approach-1'>
          <div className='image img-3'>
            <svg
              width='41.39533859324643'
              height='41.39533859324643'
              viewBox='0 0 48 47'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.92808 15.1108V15.18C1.9256 15.6125 1.76943 16.03 1.48746 16.358V16.3633C0.92094 17.0325 0.249512 18.2304 0.249512 20.1459C0.249512 21.882 0.805539 23.1072 1.47487 23.9128C1.76853 24.2701 1.92876 24.7185 1.92808 25.181C1.92808 26.0713 2.28178 26.9251 2.91137 27.5546C3.54095 28.1841 4.39486 28.5378 5.28523 28.5378H6.12451C6.3471 28.5378 6.56058 28.4493 6.71798 28.292C6.87537 28.1346 6.9638 27.9211 6.9638 27.6986V12.5932C6.9638 12.3706 6.87537 12.1572 6.71798 11.9998C6.56058 11.8424 6.3471 11.754 6.12451 11.754H5.28523C4.39486 11.754 3.54095 12.1077 2.91137 12.7372C2.28178 13.3667 1.92808 14.2205 1.92808 15.1108V15.1108ZM44.3309 16.2174L44.2333 16.1996C44.1374 16.1813 44.0509 16.1301 43.9886 16.0549C43.9264 15.9796 43.8923 15.885 43.8924 15.7874V3.15235C43.8924 1.82643 43.0122 0.634788 41.7008 0.181627C40.4502 -0.249505 39.1473 0.101904 38.3772 1.07641C36.739 3.03237 34.9383 4.84624 32.9942 6.49861C30.5152 8.59658 28.1432 10.0914 25.9652 10.9369C25.8064 10.9974 25.6697 11.1047 25.5732 11.2447C25.4768 11.3846 25.425 11.5505 25.4249 11.7204V28.0133C25.4252 28.3414 25.5216 28.6622 25.7023 28.936C25.883 29.2099 26.14 29.4248 26.4415 29.5542C28.4705 30.4238 30.6631 31.8442 32.946 33.7795C34.9047 35.4469 36.7184 37.2772 38.3678 39.251C38.632 39.5825 38.9693 39.8484 39.3533 40.028C39.7373 40.2076 40.1576 40.296 40.5814 40.2864C40.9539 40.2847 41.3237 40.2231 41.6767 40.1039C43.0227 39.657 43.8924 38.5084 43.8924 37.1814V24.5023C43.8925 24.4033 43.9276 24.3075 43.9915 24.2318C44.0554 24.1562 44.1441 24.1056 44.2417 24.089L44.3309 24.0743C45.3401 23.8005 47.2495 22.6288 47.2495 20.1459C47.2495 17.6629 45.3401 16.4912 44.3309 16.2174ZM22.0709 30.2161V12.5932C22.0709 12.3706 21.9825 12.1572 21.8251 11.9998C21.6677 11.8424 21.4542 11.754 21.2317 11.754H11.1602C10.9376 11.754 10.7242 11.8424 10.5668 11.9998C10.4094 12.1572 10.3209 12.3706 10.3209 12.5932V44.4823C10.3209 45.15 10.5862 45.7904 11.0584 46.2625C11.5306 46.7346 12.171 46.9999 12.8388 46.9999H18.3414C18.8644 47.0042 19.3815 46.8888 19.8531 46.6625C20.3246 46.4361 20.738 46.1048 21.0617 45.6939C21.3935 45.2686 21.6167 44.7688 21.712 44.2378C21.8072 43.7069 21.7716 43.1607 21.6083 42.6466C21.4383 42.1032 21.2275 41.4927 21.0029 40.8434C20.1731 38.4412 19.0789 36.9548 18.7872 33.5718C19.6646 33.5526 20.4996 33.1907 21.1134 32.5635C21.7272 31.9362 22.0709 31.0936 22.0709 30.2161Z'
                fill='#ce7fd8'
              ></path>
            </svg>
          </div>

          <div className='approach-inner'>
            <h1>3. Wren helps you spread the word</h1>
            <p className='app-p'>Make an impact by reaching more people.</p>
            <div className='inner-p'>
              <p>
                To end the climate crisis, we need collective action from
                hundreds of governments, thousands of businesses, and millions
                of regular people. While doing something on your own is a great
                way to get started, we need to spread the word if we want to end
                the climate crisis. That’s why we build Wren to be shareable,
                and incentivize our community to bring their friends into
                climate action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
