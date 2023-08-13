import React from 'react';
import Menu, { MenuBars } from './Menu';

interface IMobileMenuProps {
  showStickyHeader: boolean;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  ProfileImg: string;
}

const MobileMenu = ({
  showStickyHeader,
  show,
  setShow,
  ProfileImg,
}: IMobileMenuProps) => {
  return (
    <div>
      <div
        className={`lg:hidden fixed top-0 z-20 w-full transition-all ease-in-out duration-[1.5s] ${
          showStickyHeader ? 'stickyHeader' : ''
        }`}
      >
        <img
          src={ProfileImg}
          alt='profile'
          className='absolute top-3 left-5 cursor-pointer w-11 h-11 rounded-full'
        />
        <MenuBars setMenu={setShow} />
      </div>
      <div className='lg:hidden'>
        <Menu show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default MobileMenu;
