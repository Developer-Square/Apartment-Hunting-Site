import { createContext, useState } from 'react';

interface ModalContextProps {
  hideMenu: boolean;
  setHideMenu: (showModal: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        hideMenu,
        setHideMenu,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
