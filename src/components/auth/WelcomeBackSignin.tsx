import React, { useContext } from 'react';
import ModalWrapper from './ModalWrapper';
import { ApartmentsContext } from '@/context/apartmentsContext';

type Props = Record<string, never>;

const username = 'Ryan';

const WelcomeBackSignin = (props: Props) => {
  const { setShowWelcomeBackModal, setShowLoginModal } =
    useContext(ApartmentsContext);

  const handleLoginModal = () => {
    setShowWelcomeBackModal(false);
    setShowLoginModal(true);
  };
  return (
    <ModalWrapper
      title='Welcome back, Ryan'
      icon='fa-xmark text-lg'
      height='md:h-[60%]'
      handleLoginModal={() => setShowWelcomeBackModal(false)}
    >
      <div className='flex flex-col w-full mt-5 items-center'>
        <div className='h-20 w-20 rounded-full bg-[#0083E2] flex items-center justify-center'>
          <h1 className='text-white text-4xl font-bold'>
            {username.slice(0, 1)}
          </h1>
        </div>
        <div className='flex items-center mt-5'>
          <i className='fa-regular fa-envelope text-xs'></i>
          <p className='text-xs ml-2 font-light'>ki..........21@gmail.com</p>
        </div>
        <button className='border text-left py-2.5 text-xs mt-5 border-black/[.8] w-full rounded-lg'>
          <i className='fa-brands fa-google pl-4 mr-[30%]'></i>
          <span>Continue with Google</span>
        </button>
      </div>
      <div className='flex mt-3'>
        <p className='text-xs mr-2'>Not you?</p>
        <span
          className='text-xs underline underline-offset-2 font-semibold cursor-pointer'
          onClick={() => handleLoginModal()}
        >
          Use another account
        </span>
      </div>
    </ModalWrapper>
  );
};

export default WelcomeBackSignin;
