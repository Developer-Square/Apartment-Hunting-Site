import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Nairobi from '@/assets/home/Nairobi.png';
import Nakuru from '@/assets/home/Nakuru.png';
import Limuru from '@/assets/home/Limuru.png';
import Mombasa from '@/assets/home/Mombasa.png';
import { useState, useEffect } from 'react';

const OurTopCitiesSection = () => {
  const cities = [
    {
      name: 'Nairobi',
      img: Nairobi,
    },
    {
      name: 'Nakuru',
      img: Nakuru,
    },
    {
      name: 'Limuru',
      img: Limuru,
    },
    {
      name: 'Mombasa',
      img: Mombasa,
    },
  ];
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 639) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, []);
  return (
    <div className='mt-11'>
      <h4 className='text-2xl uppercase mb-3'>Our Top Cities</h4>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={isTablet ? 2 : 1}
      >
        {cities.map((city, index) => (
          <SwiperSlide key={city.name}>
            <div className='mt-5 w-full h-96 relative text-xl'>
              <div className='absolute left-5'>
                <p className='text-white/[.7] absolute top-7'>0{index + 1}.</p>
                <p className='absolute top-20 uppercase'>{city.name}</p>
              </div>
              <p className='text-sm -rotate-90 absolute left-0 top-44'>
                Explore
              </p>
              <img src={city.img} alt='city' className='w-full h-full' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTopCitiesSection;
