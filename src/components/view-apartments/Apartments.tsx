/* eslint-disable @typescript-eslint/ban-ts-comment */
import SingleApartment from './SingleApartment';
import { useState, useEffect } from 'react';


const Apartments = ({
  search,
  setShowFilterBackdrop,
  properties,
}: {
  search: string;
  setShowFilterBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
  properties: any;
}) => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate how close to bottom (e.g., 100px from bottom)
      const bottomThreshold = 100;
      const isNearBottom = documentHeight - (scrollTop + windowHeight) < bottomThreshold;
      
      setIsFixed(!isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`lg:flex flex-1 flex-col bg-[#0b1920] lg:bg-transparent lg: relative ${search.length ? `top-[365px] lg:top-0 ${isFixed ? 'lg:ml-[40%]' : ''}` : ''} `}>
      {search.length ? (
        <>
          <div className='h-7 flex flex-col justify-center items-center'>
            <span className='w-10 h-1 xl:w-8 bg-gray-500 rounded-lg'></span>
          </div>
          <p className='text-sm xl:text-xs w-full text-center font-medium mb-3'>
            Over 1000 apartments
          </p>
        </>
      ) : null}
      {/* Show 3 columns when the map is not visible and 2 columns when the map is visible */}
      <div
        className={`w-full sm:grid grid-cols-2 ${
          search.length
            ? 'lg:grid-cols-2 xl:grid-cols-3'
            : 'lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5'
        }`}
      >
        {properties.map((property: any, index: any) => (
          <SingleApartment
            key={index}
            setShowFilterBackdrop={setShowFilterBackdrop}
            property={property}
          />
        ))}
      </div>
      {/* TODO: Add Infinite scrolling */}
    </div>
  );
};

export default Apartments;
