import ProfilePhoto from '@/assets/view-apartments/property-manager-9.jpg';
import Footer from '@/components/home/Footer';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white mx-6'>
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
      <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Account settings</h1>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/personal-info')}
        >
          <div className='flex'>
            <i className='fa-regular fa-user text-xl'></i>
            <p className='text-lg ml-3'>Personal info</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/edit-account')}
        >
          <div className='flex'>
            <i className='fa-solid fa-gear text-xl'></i>
            <p className='text-lg ml-3'>Account</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Referrals & credits</h1>
        <div className='flex justify-between items-center my-5 cursor-pointer'>
          <div className='flex'>
            <i className='fa-solid fa-gift text-xl'></i>
            <p className='text-lg ml-3'>Gift cards</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Support</h1>
        <div className='flex justify-between items-center my-5 cursor-pointer'>
          <div className='flex'>
            <i className='fa-regular fa-building text-xl'></i>
            <p className='text-lg ml-3'>How our website works</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
        <div className='flex justify-between items-center my-5 cursor-pointer'>
          <div className='flex'>
            <i className='fa-regular fa-circle-question text-xl'></i>
            <p className='text-lg ml-3'>Get help</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
