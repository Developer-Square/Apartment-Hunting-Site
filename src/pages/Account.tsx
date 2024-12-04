import ProfilePhoto from '@/assets/view-apartments/property-manager-9.jpg';
import DesktopAccount from '@/components/account/DesktopAccount';
import MobileAccount from '@/components/account/MobileAccount';
import Footer from '@/components/home/Footer';
import { useEffect, useState } from 'react';

const Account = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className='text-white mx-6 lg:container lg:mx-auto'>
      {/* <header className='flex py-3.5 justify-between border-b border-white/[.5]'>
        <img src={Logo} alt='logo' className='w-5 h-5 rounded-full' />
      </header> */}
      <h1 className='mt-8 text-2xl font-semibold'>Profile</h1>
      <div className='mt-6 flex'>
        <img
          src={ProfilePhoto}
          alt='profile'
          className='w-14 h-14 rounded-full'
        />
        <div className='flex ml-2 justify-between items-center w-full'>
          <div className='flex flex-col cursor-pointer'>
            <p className='text-sm font-semibold'>Hi!</p>
            <p className='text-xs text-white/[.7]'>Show profile</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>      
      {isMobile ? <MobileAccount /> : <DesktopAccount />}
      <Footer />
    </div>
  );
};

export default Account;
