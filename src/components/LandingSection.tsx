/* eslint-disable @typescript-eslint/ban-ts-comment */
import Slider from '@farbenmeer/react-spring-slider';
import { Transition, animated } from 'react-spring';

import Property1 from '@/assets/home/Property-1.webp';
import { useState } from 'react';

const LandingSectionImage = () => (
  <div className='relative w-28 h-[154px]'>
    <div className='absolute top-0 left-0 w-full h-full bg-black/[.2]'></div>
    <p className='absolute text-[#FFFFFF] font-semibold top-5 left-[50%] translate-x-[-50%]'>
      Nairobi
    </p>
    <img
      src={Property1}
      alt='property'
      className='w-full h-full rounded-[15px]'
    />
  </div>
);

const LandingSection = () => {
  const [index, setIndex] = useState(0);
  const test = [1, 2, 3, 4];
  return (
    <div>
      <div className='absolute bottom-[25%] mx-5 w-full'>
        <button className='w-[320px] h-11 cursor-pointer rounded-2xl bg-[#FEFEFE] font-semibold'>
          Search
          <i className='fa-solid fa-house-chimney ml-1.5'></i>
        </button>
        <div>
          <h4 className='font-semibold mt-3.5 text-[#FFFFFF]'>
            Top rated apartments
          </h4>
          <div className='mt-3.5'>
            <div onClick={() => setIndex(index + 1)}>
              <Transition
                native
                reset
                unique
                items={index}
                from={{ opacity: 0, transform: 'translate3d(100%, 0 ,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0%, 0, 0)' }}
                leave={{ opacity: 0, transform: 'translate3d(-50%, 0, 0)' }}
              >
                {(index) => (style: any) =>
                  (
                    <animated.div style={{ ...style }}>
                      {/* @ts-ignore */}
                      {test[index]}
                    </animated.div>
                  )}
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
