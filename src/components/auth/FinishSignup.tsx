import { useContext } from 'react';
import ModalWrapper from './ModalWrapper';
import { ApartmentsContext } from '@/context/apartmentsContext';

const FinishSignup = () => {
  const { setShowLoginModal, setShowFinishSignupModal } =
    useContext(ApartmentsContext);

  const handleModalClose = () => {
    setShowLoginModal(true);
    setShowFinishSignupModal(false);
  };
  return (
    <ModalWrapper
      title='Finish signing up'
      icon='fa-chevron-left text-base'
      height='md:h-[90%]'
      handleLoginModal={() => handleModalClose()}
    >
      <div className='mt-4'>
        <input
          type='text'
          placeholder='First name'
          className='border rounded-t-lg border-black/[.3] h-11 focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
        />
        <input
          type='text'
          placeholder='Last name'
          className='border border-black/[.3] h-11 rounded-b-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
        />
        <span className='mt-2 text-[12px] text-[#717171]'>
          Make sure it matches the name on your government ID.
        </span>
        <input
          type='text'
          placeholder='Birthdate'
          className='border border-black/[.3] mt-2.5 h-11 rounded-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
        />
        <span className='text-[12px] text-[#717171]'>
          To sign up, you need to be at least 18. Your birthday won’t be shared
          with other people.
        </span>
        <input
          type='text'
          placeholder='Email'
          className='border border-black/[.3] mt-2.5 h-11 rounded-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
        />
        <p className='text-[12px] leading-3 my-2.5'>
          By selecting Agree and continue, I agree to the Apartment's website
          Terms of Service, Payments Terms of Service, and acknowledge the
          Privacy Policy.
        </p>
        <button
          className={`bg-black rounded-lg mt-5 h-10 w-full text-xs text-white`}
          onClick={() => console.log('here')}
        >
          Agree and Continue
        </button>
      </div>
    </ModalWrapper>
  );
};

export default FinishSignup;
