import { IAmenitiesProps } from '@/pages/ViewApartmentDetail';
import React from 'react';

const WhatThisPlaceOffers = ({
  amenities,
  setAmenitiesModal,
}: {
  amenities: IAmenitiesProps[];
  setAmenitiesModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div id='amenities'>
      <h2 className='font-semibold text-xl mb-6'>What this place offers</h2>
      {amenities.slice(0, 5).map((amenity, index) => (
        <div className='flex items-center mb-3' key={index}>
          <i className={`${amenity.available[0].icon}`}></i>
          <p>{amenity.available[0].text}</p>
        </div>
      ))}
      <button
        className='mt-4 h-12 w-full rounded-lg border border-white/[.4]'
        onClick={() => setAmenitiesModal(true)}
      >
        Show all 11 amenities
      </button>
    </div>
  );
};

export default WhatThisPlaceOffers;
