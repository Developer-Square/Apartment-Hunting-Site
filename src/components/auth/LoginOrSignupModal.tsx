import { SetStateAction, useState } from 'react';
import ModalWrapper from './ModalWrapper';

const loginLinks = [
  {
    icon: 'fa-brands text-xl text-[#1877F2] fa-square-facebook',
    name: 'Continue with Facebook',
  },
  {
    icon: 'fa-brands text-xl fa-google',
    name: 'Continue with Google',
  },
  {
    icon: 'fa-regular text-xl fa-envelope',
    name: 'Continue with Email',
  },
];

const LoginOrSignupModal = ({
  setShowLoginModal,
  setShowConfirmPhoneNumber,
}: {
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>;
  setShowConfirmPhoneNumber: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [phoneNumber, setPhoneNumber] = useState('+254');

  const handleSubmit = () => {
    if (phoneNumber.length > 4) {
      setShowLoginModal(false);
      setShowConfirmPhoneNumber(true);
    }
  };
  return (
    <ModalWrapper
      title='Login or Sign up'
      icon='fa-xmark text-lg'
      height='md:h-[90%]'
      handleLoginModal={() => setShowLoginModal(false)}
    >
      <div className='max-h-[100vh] px-6 overflow-y-scroll text-base'>
        <h1 className='text-[24px] font-[600] mt-3 mb-1'>
          Welcome to Our Site
        </h1>
        <label className='label'>
          <span className='label-text'>Country / Region</span>
        </label>
        <select className='select border border-black/[.5] focus:border-black focus:outline-none focus:ring-0 rounded-t-lg rounded-b-none bg-transparent w-full'>
          <option selected className='font-normal xl:text-sm'>
            Kenya(+254)
          </option>
          <option className='font-normal xl:text-sm'>Uganda(+256)</option>
          <option className='font-normal xl:text-sm'>Tanzania(+255)</option>
        </select>
        <input
          type='text'
          placeholder='Phone number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className='border border-black/[.5] h-11 focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
        />
        {/* <input
              type='text'
              placeholder='Email'
              className='border border-black/[.5] h-11 focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
            />
            <input
              type='text'
              placeholder='Password'
              className='border border-black/[.5] h-11 rounded-b-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
            /> */}
        <span className='text-[14px] d-flex'>
          We’ll text you to confirm your number. Standard message and data rates
          apply.
          <p className='font-bold underline leading-3'>Privacy Policy</p>
        </span>
        <button
          className='bg-black mt-4 rounded-lg h-12 w-full text-sm text-white'
          onClick={() => handleSubmit()}
        >
          Continue
        </button>
        <span className='my-2 text-xs flex justify-center'>or</span>
        {loginLinks.map((link) => (
          <div
            key={link.name}
            className='w-full cursor-pointer border mb-3 border-black py-1.5 px-6 rounded-lg flex'
          >
            <i className={link.icon}></i>
            <p className='text-sm m-auto'>{link.name}</p>
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
};

export default LoginOrSignupModal;
