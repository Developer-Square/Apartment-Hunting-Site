/* eslint-disable @typescript-eslint/ban-ts-comment */
import SingleApartment from './SingleApartment';
import PropertyManager1 from '@/assets/view-apartments/property-manager.png';
import PropertyManager2 from '@/assets/view-apartments/property-manager-2.jpg';
import PropertyManager3 from '@/assets/view-apartments/property-manager-3.jpg';
import PropertyManager4 from '@/assets/view-apartments/property-manager-4.jpg';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';
import { useState, useEffect } from 'react';

export interface ApartmentInfoProps {
  id: number;
  propertyManager: string;
  title: string;
  subtitle: string;
  price: string;
}

const apartmentInfo: ApartmentInfoProps[] = [
  {
    id: 1,
    propertyManager: PropertyManager1,
    title: 'Haven woods apartments',
    subtitle: 'Nairobi apartment with 3 bedrooms',
    price: '20,000',
  },
  {
    id: 2,
    propertyManager: PropertyManager2,
    title: 'Serenity heights apartment',
    subtitle: 'Stunning loft apartment facing the indian ocean',
    price: '25,000',
  },
  {
    id: 3,
    propertyManager: PropertyManager3,
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
  {
    id: 6,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
  {
    id: 7,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
  {
    id: 8,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
  {
    id: 9,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
];

const Apartments = ({
  search,
  setShowFilterBackdrop,
}: {
  search: string;
  setShowFilterBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
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
        {apartmentInfo.map((info, index) => (
          <SingleApartment
            key={index}
            setShowFilterBackdrop={setShowFilterBackdrop}
            info={info}
          />
        ))}
      </div>
      {/* TODO: Add Infinite scrolling */}
    </div>
  );
};

export default Apartments;
