/* eslint-disable @typescript-eslint/ban-ts-comment */
import ViewApartments1 from '@/assets/view-apartments/view-apartments-1.png';
import PropertyManager from '@/assets/view-apartments/property-manager.png';
import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import UserProfileModal from './UserProfileModal';

const Apartments = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isApartmentHovered, setIsApartmentHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: isHovered ? 1 : 0,
    config: { duration: 1000 },
  });

  const { x: apartmentX } = useSpring({
    from: { x: 0 },
    x: isApartmentHovered ? 1 : 0,
    config: { duration: 1000 },
  });

  const handleHoverState = (hover: string) => {
    if (isSaved) return;

    if (hover === 'isEnter') {
      setIsHovered(true);
      setIsApartmentHovered(false);
      return;
    }
    setIsHovered(false);
    setIsApartmentHovered(false);
  };

  return (
    <div>
      <div className='h-9 flex flex-col justify-center items-center'>
        <span className='w-10 h-1 bg-gray-500 rounded-lg'></span>
      </div>
      <p className='text-sm w-full text-center font-medium mb-4'>
        Over 1000 apartments
      </p>
      {showModal ? <UserProfileModal setShowModal={setShowModal} /> : null}

      <div
        className='mb-10 px-12'
        onMouseEnter={() => setIsApartmentHovered(true)}
        onMouseLeave={() => setIsApartmentHovered(false)}
      >
        <div className='relative w-full h-80'>
          <animated.div
            style={{
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
            onMouseEnter={() => handleHoverState('isEnter')}
            onMouseLeave={() => handleHoverState('isLeave')}
            onClick={() => setIsSaved(!isSaved)}
          >
            <div className='relative'>
              <i
                className={`absolute top-2.5 cursor-pointer right-4 text-2xl fa-regular fa-heart ${
                  isSaved ? 'text-red-500' : ''
                }`}
              ></i>
            </div>
          </animated.div>
          <img
            src={ViewApartments1}
            className='w-full h-full'
            alt='view apartments'
          />
          <animated.div
            style={{
              scale: apartmentX.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
            className='absolute bottom-2.5 cursor-pointer left-2.5 h-20 w-[78px] flex preview'
            onClick={() => setShowModal(true)}
          >
            <div className='h-full w-3 border-[1.8px] border-r-[#C6B1A5]/[.6]'></div>
            <div className='flex h-full w-full justify-center items-center'>
              <img
                src={PropertyManager}
                alt='profile'
                className='rounded-full w-12 h-12'
              />
            </div>
          </animated.div>
        </div>
        <div className='mt-3.5'>
          <p className='font-bold'>Haven woods apartments</p>
          <p className='opacity-60 mt-1.5 text-sm'>
            Nairobi apartment with 3 bedrooms
          </p>
          <p className='opacity-60 mt-1.5 text-sm'>3 Beds</p>
          <p className='mt-1.5'>
            <span className='text-[#1ACA17]'>Ksh </span>
            20,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
