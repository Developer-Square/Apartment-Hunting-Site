// CURRENTLY NOT IN USE, BUT WILL BE USED IN THE FUTURE.
import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import { createContext, useState } from 'react';

interface ApartmentsContextProps {
  apartmentInfo: ApartmentInfoProps;
  setApartmentInfo: (info: ApartmentInfoProps) => void;
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
  return (
    <ApartmentsContext.Provider
      value={{
        apartmentInfo,
        setApartmentInfo,
      }}
    >
      {children}
    </ApartmentsContext.Provider>
  );
};
