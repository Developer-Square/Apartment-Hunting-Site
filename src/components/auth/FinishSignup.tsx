import React, { useContext } from 'react';
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
      FinishSignup
    </ModalWrapper>
  );
};

export default FinishSignup;
