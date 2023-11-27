import React, { SetStateAction, useState } from 'react';
import ModalWrapper from './ModalWrapper';
import VerificationInput from 'react-verification-input';

type Props = {
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>;
};

const SmsAuthentication = ({ setShowLoginModal }: Props) => {
  const [verificationCode, setVerificationCode] = useState('');
  return (
    <ModalWrapper
      title='Confirm your number'
      icon='fa-chevron-left text-base'
      height='md:h-[50%]'
      handleLoginModal={() => setShowLoginModal(true)}
    >
      <p className='text-xs my-4'>
        Enter the code we sent over SMS to +254796867329
      </p>
      <VerificationInput
        onChange={console.log}
        value={verificationCode}
        inputProps={{
          onChange: (e: any) => setVerificationCode(e.target.value),
        }}
        length={6}
        validChars='0-9'
        classNames={{
          container: 'container',
          character: 'character',
          characterInactive: 'character--inactive',
          characterSelected: 'character--selected',
        }}
      />
      <div className='flex mt-14 items-center justify-between'>
        <p className='underline cursor-pointer underline-offset-2 font-bold text-xs'>
          More options
        </p>
        <button
          disabled={verificationCode.length < 6}
          className={`bg-black ${
            verificationCode.length < 6 ? 'bg-[#ddd] pointer-events-none' : ''
          } rounded-lg h-10 w-20 text-xs text-white`}
          onClick={() => console.log('here')}
        >
          Continue
        </button>
      </div>
    </ModalWrapper>
  );
};

export default SmsAuthentication;