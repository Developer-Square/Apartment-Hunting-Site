import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import ViewApartments2 from '@/assets/view-apartments/view-apartments-2.webp';
import ViewApartments3 from '@/assets/view-apartments/view-apartments-3.webp';
import ViewApartments4 from '@/assets/view-apartments/view-apartments-4.webp';
import ViewApartments5 from '@/assets/view-apartments/view-apartments-5.webp';
import { ApartmentInfoProps } from '../view-apartments/Apartments';

const SimilarApartment = ({ info }: { info: ApartmentInfoProps }) => {
  const { title, subtitle, price } = info;
  const viewApartments = [
    ViewApartments2,
    ViewApartments3,
    ViewApartments4,
    ViewApartments5,
  ];

  const handleNavigation = () => {
    // Todo: Navigate to the apartment detail page.
  };

  return (
    <div className='mb-5 px-8 cursor-pointer sm:px-6 lg:pr-5 lg:pl-3 xl:px-3'>
      <div className='relative w-full h-[200px] lg:h-72 xl:h-[267px]'>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          style={{
            height: window.innerWidth >= 1024 ? '267px' : '100%',
          }}
          className='w-full h-full'
        >
          {viewApartments.map((apartment, index) => (
            <SwiperSlide key={index}>
              <img
                src={apartment}
                className='w-full h-full rounded-xl'
                alt='view apartments'
                onClick={() => handleNavigation()}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='mt-3.5'>
        <p className='font-bold xl:font-semibold xl:text-xs'>{title}</p>
        <p className='opacity-60 mt-1.5 text-sm xl:text-xs'>{subtitle}</p>
        <p className='mt-1.5 xl:text-xs'>
          <span className='text-[#1ACA17]'>Ksh </span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default SimilarApartment;
