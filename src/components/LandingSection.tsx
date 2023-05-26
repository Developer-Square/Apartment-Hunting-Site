/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Property1 from '@/assets/home/Property-1.webp';
import Property2 from '@/assets/home/Property-2.webp';
import Property3 from '@/assets/home/Property-3.webp';
import Property4 from '@/assets/home/Property-5.webp';
import Property5 from '@/assets/home/Property-9.webp';
import 'swiper/css';
import 'swiper/css/navigation';

interface LandingSectionImageProps {
  town: string;
  img: string;
}

const LandingSectionImage = ({ town, img }: LandingSectionImageProps) => (
  <div className='relative w-28 h-[154px]'>
    <p className='absolute text-[#FFFFFF] font-semibold top-5 left-[50%] translate-x-[-50%]'>
      {town}
    </p>
    <img src={img} alt='property' className='w-full h-full rounded-[15px]' />
  </div>
);

const LandingSection = () => {
  return (
    <div>
      <div className='absolute bottom-[10%] mx-5 w-full'>
        <button className='w-[320px] h-11 cursor-pointer rounded-2xl bg-[#FEFEFE] font-semibold'>
          Search
          <i className='fa-solid fa-house-chimney ml-1.5'></i>
        </button>
        <div>
          <h4 className='font-semibold mt-3.5 text-[#FFFFFF]'>
            Top rated apartments
          </h4>
          <div className='mt-3.5'>
            <Swiper
              modules={[Navigation]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={12}
              slidesPerView={3}
            >
              <SwiperSlide>
                <LandingSectionImage town='Nairobi' img={Property1} />
              </SwiperSlide>
              <SwiperSlide>
                <LandingSectionImage town='Nakuru' img={Property2} />
              </SwiperSlide>
              <SwiperSlide>
                <LandingSectionImage town='Mombasa' img={Property3} />
              </SwiperSlide>
              <SwiperSlide>
                <LandingSectionImage town='Naivasha' img={Property4} />
              </SwiperSlide>
              <SwiperSlide>
                <LandingSectionImage town='Thika' img={Property5} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
