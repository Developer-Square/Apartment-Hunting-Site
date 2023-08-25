import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import ViewApartments2 from '@/assets/view-apartments/view-apartments-2.webp';
import ViewApartments3 from '@/assets/view-apartments/view-apartments-3.webp';
import ViewApartments4 from '@/assets/view-apartments/view-apartments-4.webp';
import ViewApartments5 from '@/assets/view-apartments/view-apartments-5.webp';
import PropertyManager1 from '@/assets/view-apartments/property-manager.png';
import PropertyManager2 from '@/assets/view-apartments/property-manager-2.jpg';
import PropertyManager3 from '@/assets/view-apartments/property-manager-3.jpg';
import PropertyManager4 from '@/assets/view-apartments/property-manager-4.jpg';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';
import { ApartmentInfoProps } from '../view-apartments/Apartments';
import { useEffect, useState } from 'react';

const apartmentInfo: ApartmentInfoProps[] = [
  {
    id: 1,
    propertyManager: PropertyManager2,
    title: 'Haven woods apartments',
    subtitle: 'Nairobi apartment with 3 bedrooms',
    price: '20,000',
  },
  {
    id: 2,
    propertyManager: PropertyManager3,
    title: 'Serenity heights apartment',
    subtitle: 'Stunning loft apartment facing the indian ocean',
    price: '25,000',
  },
  {
    id: 3,
    propertyManager: PropertyManager1,
    title: 'Harmony haven apartments',
    subtitle: 'Haven apartments stunning view of Nakuru city',
    price: '35,000',
  },
  {
    id: 4,
    propertyManager: PropertyManager4,
    title: 'Jambo Heights apartment',
    subtitle: 'Elevated Urban Living',
    price: '17,000',
  },
  {
    id: 5,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
];

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
    <div className='mb-5 px-1 cursor-pointer sm:pr-4 lg:px-0'>
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

const SimilarApartments = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [spaceBetween, setSpaceBetween] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 640 && window.innerWidth < 767) {
      setSlidesPerView(2);
      setSpaceBetween(16);
      return;
    }

    if (window.innerWidth >= 768 && window.innerWidth < 1023) {
      setSlidesPerView(3);
      setSpaceBetween(0);
      return;
    }

    if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      setSlidesPerView(4);
      setSpaceBetween(16);
      return;
    }

    setSlidesPerView(1);
    setSpaceBetween(0);
  }, []);

  return (
    <div>
      <h2 className='font-semibold text-xl mb-6'>Similar Apartments</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        {apartmentInfo.map((info, index) => (
          <SwiperSlide key={index}>
            <SimilarApartment key={index} info={info} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarApartments;
