import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Property1 from '@/assets/home/Property-1.webp';
import Property2 from '@/assets/home/Property-2.webp';
import Property3 from '@/assets/home/Property-3.webp';
import Property4 from '@/assets/home/Property-5.webp';
import Property5 from '@/assets/home/Property-7.webp';
import Property6 from '@/assets/home/Property-10.webp';
import Property7 from '@/assets/home/Property-11.webp';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface LandingSectionImageProps {
  town: string;
  img: string;
  navigate: NavigateFunction;
}

const LandingSectionImage = ({
  town,
  img,
  navigate,
}: LandingSectionImageProps) => (
  <div
    className='relative w-28 h-[154px] xm:w-32 xm:h-[174px] sm:w-[125px] sm:h-[154px]  md:w-[220px] md:h-[170px] shadow-xl cursor-pointer'
    onClick={() => navigate('/apartments')}
  >
    <div className='hidden sm:block absolute top-0 left-0 w-full h-full bg-black/[.2]'></div>
    <p className='absolute text-[#FFFFFF] font-semibold top-5 left-[50%] translate-x-[-50%]'>
      {town}
    </p>
    <img src={img} alt='property' className='w-full h-full rounded-[15px]' />
  </div>
);

const LandingSection = () => {
  const [carouselNumber, setCarouselNumber] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(30);
  const landingImages = [
    {
      town: 'Kilimani',
      img: Property1,
    },
    {
      town: 'Kileleshwa',
      img: Property2,
    },
    {
      town: 'Runda',
      img: Property3,
    },
    {
      town: 'Westlands',
      img: Property4,
    },
    {
      town: 'Lavington',
      img: Property5,
    },
    {
      town: 'Karen',
      img: Property6,
    },
    {
      town: 'Muthaiga',
      img: Property7,
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 639 && width < 767) {
      setCarouselNumber(4);
    } else if (width >= 768 && width < 1279) {
      setCarouselNumber(4);
      setSpaceBetween(60);
    } else if (width >= 1280) {
      setCarouselNumber(5);
      setSpaceBetween(60);
    } else {
      setCarouselNumber(3);
      setSpaceBetween(30);
    }
  }, []);
  console.log(carouselNumber);

  return (
    <div>
      <div className='absolute bottom-0 sm:bottom-[5%] md:bottom-[4%] lg:bottom-[3%] xl:bottom-[5.5%] mx-5 w-full'>
        <button className='w-[320px] xm:w-[368px] sm:w-[320px] lg:hidden text-black h-11 cursor-pointer rounded-2xl bg-[#FEFEFE] font-semibold'>
          Search
          <i className='fa-solid fa-house-chimney ml-1.5'></i>
        </button>
        <div className='w-full md:w-[87%] mx-auto'>
          <h4 className='font-semibold mt-3.5 text-[#FFFFFF] flex items-center'>
            <span className='mr-2'>Top rated apartments</span>
            <div className='hidden sm:block'>
              <i className='fa-solid fa-star mr-1'></i>
              <i className='fa-solid fa-star mr-1'></i>
              <i className='fa-solid fa-star mr-1'></i>
              <i className='fa-solid fa-star mr-1'></i>
              <i className='fa-solid fa-star'></i>
            </div>
          </h4>
          <div className='mt-3.5'>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={spaceBetween}
              slidesPerView={carouselNumber}
            >
              {landingImages.map((image) => (
                <SwiperSlide key={image.town}>
                  <LandingSectionImage
                    town={image.town}
                    img={image.img}
                    navigate={navigate}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
