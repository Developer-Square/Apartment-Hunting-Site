import React from 'react';
import Logo from '@/assets/home/Logo - light surface.png';
import Giftcard from '@/assets/home/giftcard.png';
import { useNavigate } from 'react-router-dom';

type Props = object;

const GiftCards = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col m-6 text-white '>
      <div
        className='flex items-center cursor-pointer'
        onClick={() => navigate('/account')}
      >
        <i className='fa-solid fa-chevron-left text-lg'></i>
        <p className='text-lg ml-2'>Go Back</p>
      </div>
      <div className='flex flex-col items-center'>
        <img src={Logo} className='mt-16 w-14 h-14 rounded-full' alt='logo' />
        <h1 className='font-bold text-3xl mt-10'>Techive Gift cards</h1>
        <h1 className='font-bold text-3xl mt-3'>...Coming soon</h1>
        <img src={Giftcard} className='w-full h-full mt-10' alt='gift-card' />
      </div>
    </div>
  );
};

export default GiftCards;
