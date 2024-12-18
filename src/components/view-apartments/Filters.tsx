/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSpring, animated } from '@react-spring/web';
import { SetStateAction, useEffect, useState } from 'react';

import { AmenitiesList, NumberOfRooms, PropertyType } from './Helpers';

const Filters = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const props = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: show ? 0 : 100, opacity: show ? 1 : 0 },
  });

  const rooms = ['Any', '1', '2', '3', '4+'];
  const amenitiesList = ['wifi', 'parking', 'washer', 'kitchen', 'gym'];
  const essentialsList = ['dryer', 'heating', 'dedicatedWorkspace', 'tv'];
  const featuresList = [
    'pool',
    'hotTub',
    'evCharger',
    'smokingAllowed',
    'breakfast',
  ];
  const [bedrooms, setBedrooms] = useState('Any');
  const [bathrooms, setBathrooms] = useState('Any');
  const [propertyType, setPropertyType] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [amenities, setAmenities] = useState({
    wifi: false,
    parking: false,
    washer: false,
    kitchen: false,
    gym: false,
  });
  const [essentials, setEssentials] = useState({
    dryer: false,
    heating: false,
    dedicatedWorkspace: false,
    tv: false,
  });
  const [features, setFeatures] = useState({
    pool: false,
    hotTub: false,
    evCharger: false,
    smokingAllowed: false,
    breakfast: false,
  });
  const [largerScreenWidth, setLargerScreenWidth] = useState('100%');
  const [largerScreenHeight, setLargerScreenHeight] = useState('740px');

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1023) {
      setLargerScreenWidth('720px');
      return;
    }

    if (window.innerWidth >= 1024) {
      setLargerScreenWidth('768px');
      setLargerScreenHeight('647px');
      return;
    }
    setLargerScreenWidth('100%');
    setLargerScreenHeight('740px');
  }, []);

  const clearAllFilters = () => {
    setBedrooms('Any');
    setBathrooms('Any');
    setPropertyType('');
    setAmenities({
      wifi: false,
      parking: false,
      washer: false,
      kitchen: false,
      gym: false,
    });
    setEssentials({
      dryer: false,
      heating: false,
      dedicatedWorkspace: false,
      tv: false,
    });
    setFeatures({
      pool: false,
      hotTub: false,
      evCharger: false,
      smokingAllowed: false,
      breakfast: false,
    });
  };

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: show ? 45 : window.innerHeight,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#FFFFFF',
        height: largerScreenHeight,
        width: largerScreenWidth,
        zIndex: '50',
        borderRadius: '1rem',
        overflow: 'hidden',
        ...props,
      }}
    >
      <div className='xm:max-w-[360px] max-w-[330px] sm:max-w-[600px] lg:max-w-[700px] mx-auto overflow-hidden'>
        <div className='flex items-center border-b pb-2.5 border-black/[.2]'>
          <i
            className='fa-solid fa-xmark text-xl mt-5 cursor-pointer'
            onClick={() => setShow(false)}
          ></i>
          <p className='font-bold text-base text-center xl:text-sm mt-5 w-full'>
            Filters
          </p>
        </div>
        <div className='w-full max-h-[790px] overflow-y-scroll'>
          <div className='mt-5 w-full'>
            <p className='font-bold text-center xl:text-sm'>Price range</p>
            <div className='flex mt-6 items-center justify-around'>
              <div className='w-32 sm:w-40 h-20 p-3 rounded-2xl flex flex-col border border-black/[.08]'>
                <p className='text-xs'>Minimum</p>
                <input
                  type='text'
                  placeholder='Ksh 10,000'
                  className='bg-transparent pl-0 text-black outline-none border-none focus:ring-0 w-24 sm:w-28 h-full xl:text-sm'
                />
              </div>
              <span className='h-0.5 w-7 bg-black/[0.5]'></span>
              <div className='w-32 h-20 sm:w-40 p-3 rounded-2xl flex flex-col border border-black/[.08]'>
                <p className='text-xs'>Maximum</p>
                <input
                  type='text'
                  placeholder='Ksh 100,000'
                  className='bg-transparent pl-0 text-black outline-none w-24 sm:w-28 border-none focus:ring-0 h-full xl:text-sm'
                />
              </div>
            </div>
          </div>
          <div className='mt-10 bg-black/[0.4] w-full h-[0.5px]'></div>
          <div className='mt-5'>
            <p className='font-bold xl:text-sm'>Rooms and Beds</p>
            <NumberOfRooms
              rooms={rooms}
              title='Bedrooms'
              currentRoom={bedrooms}
              setCurrentRoom={setBedrooms}
            />
            <div className='mt-5'></div>
            <NumberOfRooms
              rooms={rooms}
              title='Bathrooms'
              currentRoom={bathrooms}
              setCurrentRoom={setBathrooms}
            />
          </div>
          <div className='mt-14 bg-black/[0.4] w-full h-[1px]'></div>
          <div className='mt-5'>
            <p className='font-bold xl:text-sm'>Property Type</p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-7'>
              <PropertyType
                icon='fa-solid fa-house text-3xl pl-5'
                content='House'
                propertyType={propertyType}
                setPropertyType={setPropertyType}
              />
              <PropertyType
                icon='fa-solid fa-building text-3xl pl-5'
                content='Apartment'
                propertyType={propertyType}
                setPropertyType={setPropertyType}
              />
              <PropertyType
                icon='fa-solid fa-house-flood-water text-3xl pl-5'
                content='Townhouse'
                propertyType={propertyType}
                setPropertyType={setPropertyType}
              />
              <PropertyType
                icon='fa-solid fa-hotel text-3xl pl-5'
                content='Hotel'
                propertyType={propertyType}
                setPropertyType={setPropertyType}
              />
            </div>
          </div>
          <AmenitiesList
            title='Amenities'
            amenitiesList={amenitiesList}
            amenities={amenities}
            setAmenities={setAmenities}
            topAmenities={true}
            showMore={showMore}
            setShowMore={setShowMore}
          />
          {showMore && (
            <>
              <AmenitiesList
                title='Essentials'
                amenitiesList={essentialsList}
                amenities={essentials}
                setAmenities={setEssentials}
                topAmenities={false}
                setShowMore={() => {}}
              />
              <AmenitiesList
                title='Features'
                amenitiesList={featuresList}
                amenities={features}
                setAmenities={setFeatures}
                topAmenities={false}
                setShowMore={() => {}}
              />
            </>
          )}
          {showMore && (
            <p
              className='underline mt-7 xl:text-sm mb-44 2xl:mb-60 cursor-pointer'
              onClick={() => setShowMore(false)}
            >
              Show less
            </p>
          )}
        </div>
      </div>
      <footer className='absolute bg-white w-full bottom-0 mt-5 px-6 pt-3 border-t border-black/[.2] h-16'>
        <div className='flex items-center justify-between'>
          <p
            className='underline font-medium cursor-pointer xl:text-sm'
            onClick={() => clearAllFilters()}
          >
            Clear all
          </p>
          <button className='rounded-lg xl:text-sm xl:py-2.5 xl:px-3 py-3.5 px-6 bg-black text-white'>
            No places available
          </button>
        </div>
      </footer>
    </animated.div>
  );
};

export default Filters;
