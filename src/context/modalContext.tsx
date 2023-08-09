import { createContext, useState } from 'react';

interface ModalContextProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
