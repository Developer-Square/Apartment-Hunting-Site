import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProfileImg from '@/assets/home/Logo - light surface.png';
import { NavBarMenu } from '../view-apartments/Helpers';

export const MobileNav = ({
  setWishListModal,
  isSaved,
  setIsSaved,
}: {
  setWishListModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSaved: boolean;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const handleWishListModal = () => {
    if (isSaved) {
      setIsSaved(false);
      return;
    }
    setWishListModal((prevState) => !prevState);
    setIsSaved((prevState) => !prevState);
  };

  // Only available for mobile and tablet screens
  const handleRouteBack = () => {
    navigate('/apartments');
  };

  return (
    <>
      <i
        className='fa-solid cursor-pointer text-lg fa-chevron-left'
        onClick={() => handleRouteBack()}
      ></i>
      <div className='flex'>
        <i className='fa-solid cursor-pointer text-lg fa-arrow-up-from-bracket pr-5'></i>
        <i
          className='fa-regular cursor-pointer text-lg fa-heart'
          onClick={() => handleWishListModal()}
        ></i>
      </div>
    </>
  );
};

const navbarItems = ['Video Tour', 'Photos', 'Amenities', 'Agent', 'Location'];

export const DesktopNav = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(600);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollHeight) {
        setShowStickyHeader(true);
        return;
      }
      setShowStickyHeader(false);
    });
  }, [scrollHeight]);

  return (
    <>
      {/* Show the sticky header when the user scrolls past a certain point. Otherwise show the normal header */}
      {showStickyHeader ? (
        <div
          className={`flex items-center transition-all ease-in-out duration-[1s] ${
            showStickyHeader
              ? 'fixed top-0 left-0 w-full bg-[#141b1f]/[.9] px-10 z-20 h-20'
              : ''
          }`}
        >
          {navbarItems.map((item, index) => (
            <p
              className='mr-6 cursor-pointer hover:underline hover:underline-offset-4'
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      ) : (
        <>
          <img
            src={ProfileImg}
            alt='profile'
            className='cursor-pointer w-11 h-11 rounded-full'
            onClick={() => navigate('/')}
          />
          <NavBarMenu />
        </>
      )}
    </>
  );
};