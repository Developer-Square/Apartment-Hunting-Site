import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import UserProfileModal from './UserProfileModal';
import { ApartmentInfoProps } from './Apartments';

const SingleApartment = ({ info }: { info: ApartmentInfoProps }) => {
  const { title, subtitle, viewApartments, propertyManager, price } = info;
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
    <>
      {showModal ? (
        <UserProfileModal
          propertyManager={propertyManager}
          name='Ryan Njoroge'
          occupation='Hospitality'
          location='Utawala, Nairobi'
          setShowModal={setShowModal}
        />
      ) : null}
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
              {isSaved ? (
                <i className='absolute top-2.5 cursor-pointer right-4 text-2xl fa-solid text-red-500 fa-heart'></i>
              ) : (
                <i className='absolute top-2.5 cursor-pointer right-4 text-2xl fa-regular fa-heart'></i>
              )}
            </div>
          </animated.div>
          <img
            src={viewApartments}
            className='w-full h-full rounded-xl'
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
                src={propertyManager}
                alt='profile'
                className='rounded-full w-12 h-12'
              />
            </div>
          </animated.div>
        </div>
        <div className='mt-3.5'>
          <p className='font-bold'>{title}</p>
          <p className='opacity-60 mt-1.5 text-sm'>{subtitle}</p>
          <p className='mt-1.5'>
            <span className='text-[#1ACA17]'>Ksh </span>
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleApartment;
