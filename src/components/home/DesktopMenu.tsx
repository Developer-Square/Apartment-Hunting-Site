import { useState, useEffect, useContext } from 'react';
import ProfileImg from '@/assets/home/Logo - dark surface.png';
import { ApartmentsContext } from '@/context/apartmentsContext';

const menuLinks = [{title: 'List with us', path: '/list-with-us'}, {title: 'About', path: '/about'}, {title: 'Contact', path: '/contact'}];

const DesktopMenu = () => {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(600);
  const { setShowLoginModal } = useContext(ApartmentsContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollHeight) {
        setShowStickyHeader(true);
        return;
      }
      setShowStickyHeader(false);
    });
  }, [scrollHeight]);

  useEffect(() => {
    if (window.innerWidth >= 1280 && window.innerWidth < 1440) {
      setScrollHeight(850);
      return;
    }

    if (window.innerWidth >= 1440) {
      setScrollHeight(950);
      return;
    }
    setScrollHeight(600);
  }, []);
  return (
    <div
      className={`absolute top-[5%] z-20 w-full transition-all ease-in-out duration-[1s] ${
        showStickyHeader ? 'stickyHeader !fixed !top-0 ' : ''
      } `}
    >
      {showStickyHeader && (
        <img
          src={ProfileImg}
          alt='profile'
          className='absolute top-2.5 xl:top-1 left-[5%] cursor-pointer w-11 h-11 rounded-full'
        />
      )}
      <div className='absolute top-4 xl:top-2 right-[5%] flex justify-around'>
        {menuLinks.map((link, index) => (
          <div
            key={index}
            className='bg-black/[.3] mr-4 rounded-3xl cursor-pointer pt-2 px-4 uppercase text-sm xl:text-[13px]'
          >
            <a href={link.path}>{link.title}</a>
          </div>
        ))}
        <div className='bg-white flex items-center mr-4 rounded-3xl cursor-pointer py-2 px-4 uppercase text-sm xl:text-[13px]' onClick={() => setShowLoginModal(true)}>
          <p className='text-black mr-2'>Login</p>
          <i className='text-black text-[17px] fa-solid fa-arrow-right'></i>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
