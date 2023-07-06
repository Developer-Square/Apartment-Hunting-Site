/* eslint-disable @typescript-eslint/ban-ts-comment */
import SingleApartment from './SingleApartment';
import PropertyManager1 from '@/assets/view-apartments/property-manager.png';
import PropertyManager2 from '@/assets/view-apartments/property-manager-2.jpg';
import PropertyManager3 from '@/assets/view-apartments/property-manager-3.jpg';
import PropertyManager4 from '@/assets/view-apartments/property-manager-4.jpg';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';

export interface ApartmentInfoProps {
  propertyManager: string;
  title: string;
  subtitle: string;
  price: string;
}

const apartmentInfo: ApartmentInfoProps[] = [
  {
    propertyManager: PropertyManager1,
    title: 'Haven woods apartments',
    subtitle: 'Nairobi apartment with 3 bedrooms',
    price: '20,000',
  },
  {
    propertyManager: PropertyManager2,
    title: 'Serenity heights apartment',
    subtitle: 'Stunning loft apartment facing the indian ocean',
    price: '25,000',
  },
  {
    propertyManager: PropertyManager3,
    title: 'Harmony haven apartments',
    subtitle: 'Haven apartments stunning view of Nakuru city',
    price: '35,000',
  },
  {
    propertyManager: PropertyManager4,
    title: 'Jambo Heights apartment',
    subtitle: 'Elevated Urban Living',
    price: '17,000',
  },
  {
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
];

const Apartments = () => {
  return (
    <div>
      <div className='h-9 flex flex-col justify-center items-center'>
        <span className='w-10 h-1 bg-gray-500 rounded-lg'></span>
      </div>
      <p className='text-sm w-full text-center font-medium mb-4'>
        Over 1000 apartments
      </p>
      {apartmentInfo.map((info, index) => (
        <SingleApartment key={index} info={info} />
      ))}
    </div>
  );
};

export default Apartments;
