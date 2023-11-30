// CURRENTLY NOT IN USE, BUT WILL BE USED IN THE FUTURE.
import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import { SetStateAction, createContext, useState } from 'react';

interface ApartmentsContextProps {
  apartmentInfo: ApartmentInfoProps;
  setApartmentInfo: (info: ApartmentInfoProps) => void;
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>;
  showConfirmPhoneNumber: boolean;
  setShowConfirmPhoneNumber: React.Dispatch<SetStateAction<boolean>>;
  showFinishSignupModal: boolean;
  setShowFinishSignupModal: React.Dispatch<SetStateAction<boolean>>;
  showMoreOptionsModal: boolean;
  setShowMoreOptionsModal: React.Dispatch<SetStateAction<boolean>>;
  showWelcomeBackModal: boolean;
  setShowWelcomeBackModal: React.Dispatch<SetStateAction<boolean>>;
}

export const ApartmentsContext = createContext<ApartmentsContextProps>(
  {} as ApartmentsContextProps
);

export const ApartmentsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [apartmentInfo, setApartmentInfo] = useState({} as ApartmentInfoProps);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showConfirmPhoneNumber, setShowConfirmPhoneNumber] = useState(false);
  const [showFinishSignupModal, setShowFinishSignupModal] = useState(false);
  const [showMoreOptionsModal, setShowMoreOptionsModal] = useState(false);
  const [showWelcomeBackModal, setShowWelcomeBackModal] = useState(false);
  return (
    <ApartmentsContext.Provider
      value={{
        apartmentInfo,
        setApartmentInfo,
        showLoginModal,
        setShowLoginModal,
        showConfirmPhoneNumber,
        setShowConfirmPhoneNumber,
        showFinishSignupModal,
        setShowFinishSignupModal,
        showMoreOptionsModal,
        setShowMoreOptionsModal,
        showWelcomeBackModal,
        setShowWelcomeBackModal,
      }}
    >
      {children}
    </ApartmentsContext.Provider>
  );
};
