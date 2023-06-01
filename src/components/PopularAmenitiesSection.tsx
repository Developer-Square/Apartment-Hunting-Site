import { ReactElement, useEffect, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Amenity = ({
  amenity,
  icon,
}: {
  amenity: string;
  icon: ReactElement;
}) => (
  <div className='h-[120px] w-[110px] xm:w-[120px] rounded-[20px] bg-[#1c252b]'>
    <div className='flex flex-col items-center justify-center h-full w-full'>
      {icon}
      <p className='mt-2'>{amenity}</p>
    </div>
  </div>
);

const PopularAmenitiesSection = () => {
  const amenities = [
    {
      name: 'Gym',
      icon: <i className='fa-solid fa-dumbbell text-3xl'></i>,
    },
    {
      name: 'Parking',
      icon: <i className='fa-solid fa-square-parking text-3xl'></i>,
    },
    {
      name: 'Wifi',
      icon: <i className='fa-solid fa-wifi text-3xl'></i>,
    },
    {
      name: 'Pool',
      icon: <i className='fa-solid fa-person-swimming text-3xl'></i>,
    },
    {
      name: 'Pet Friendly',
      icon: <i className='fa-solid fa-dog text-3xl'></i>,
    },
    {
      name: `24/7 Security`,
      icon: <i className='fa-solid fa-user-shield text-3xl'></i>,
    },
  ];
  const [carouselNumber, setCarouselNumber] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(30);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 639 && width < 767) {
      setCarouselNumber(5);
      setSpaceBetween(50);
    } else if (width >= 768) {
      setCarouselNumber(6);
      setSpaceBetween(0);
    } else {
      setCarouselNumber(3);
      setSpaceBetween(30);
    }
  }, []);
  return (
    <>
      <h4 className='text-2xl mb-5'>
        Popular amenities for Kenyan apartments.
      </h4>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={spaceBetween}
        slidesPerView={carouselNumber}
      >
        {amenities.map((amenity) => (
          <SwiperSlide key={amenity.name}>
            <Amenity amenity={amenity.name} icon={amenity.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularAmenitiesSection;
