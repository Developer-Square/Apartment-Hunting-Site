// CURRENTLY NOT IN USE, BUT WILL BE USED IN THE FUTURE.
import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import { SetStateAction, createContext, useState } from 'react';

interface ApartmentsContextProps {
  apartmentInfo: ApartmentInfoProps;
  setApartmentInfo: (info: ApartmentInfoProps) => void;
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>;
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
  return (
    <ApartmentsContext.Provider
      value={{
        apartmentInfo,
        setApartmentInfo,
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {children}
    </ApartmentsContext.Provider>
  );
};
