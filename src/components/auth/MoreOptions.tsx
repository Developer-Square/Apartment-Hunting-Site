import React, { SetStateAction, useContext, useState } from 'react';
import ModalWrapper from './ModalWrapper';
import { ApartmentsContext } from '@/context/apartmentsContext';

interface IOptionProps {
  id: string;
  icon: string;
  text: string;
  subtext: string;
  checked: string;
  setChecked: React.Dispatch<SetStateAction<string>>;
}

const Option = ({
  id,
  icon,
  text,
  subtext,
  checked,
  setChecked,
}: IOptionProps) => {
  return (
    <div className='flex w-full justify-between items-center border-b border-black/[.2] pb-3'>
      <div className='flex items-center mt-4'>
        <i className={icon}></i>
        <div className='flex-col justify-center'>
          <h4 className='font-semibold text-xs'>{text}</h4>
          <p className='text-[#717171] text-[12px] mt-[-5px]'>{subtext}</p>
        </div>
      </div>
      <input
        type='radio'
        name='radio-1'
        className='radio radio-primary'
        checked={checked === id}
        onChange={() => setChecked(id)}
      />
    </div>
  );
};

const MoreOptions = () => {
  const [checkedOption, setCheckedOption] = useState('sms');
  console.log(checkedOption, 'checkedOption');
  const { setShowConfirmPhoneNumber, setShowMoreOptionsModal } =
    useContext(ApartmentsContext);

  const handleModalClose = () => {
    setShowConfirmPhoneNumber(true);
    setShowMoreOptionsModal(false);
  };
  return (
    <ModalWrapper
      title='More options'
      icon='fa-chevron-left text-base'
      height='md:h-[90%]'
      handleLoginModal={() => handleModalClose()}
    >
      <h4 className='mt-4 text-xs'>
        Choose another way to get a verification code at +254 796867328
      </h4>
      <p className='text-[#717171] text-[12px]'>
        Make sure your notifications are turned on.
      </p>
      <Option
        id='sms'
        icon='fa-regular fa-message text-lg mr-3'
        text='Text message (SMS)'
        subtext="We'll text you a code"
        checked={checkedOption}
        setChecked={setCheckedOption}
      />
      <Option
        id='phone'
        icon='fa-solid fa-mobile-screen text-lg mr-3'
        text='Phone call'
        subtext="We'll call with you a code"
        checked={checkedOption}
        setChecked={setCheckedOption}
      />
      <button
        className={`bg-black rounded-lg mt-[34%] h-10 w-full text-xs text-white`}
        onClick={() => console.log('here')}
      >
        Resend code
      </button>
    </ModalWrapper>
  );
};

export default MoreOptions;
