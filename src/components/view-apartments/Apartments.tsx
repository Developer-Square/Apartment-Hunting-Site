/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from 'react';
import UserProfileModal from './UserProfileModal';
import SingleApartment from './SingleApartment';

const Apartments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className='h-9 flex flex-col justify-center items-center'>
        <span className='w-10 h-1 bg-gray-500 rounded-lg'></span>
      </div>
      <p className='text-sm w-full text-center font-medium mb-4'>
        Over 1000 apartments
      </p>
      {showModal ? <UserProfileModal setShowModal={setShowModal} /> : null}
      <SingleApartment setShowModal={setShowModal} />
    </div>
  );
};

export default Apartments;
