import LandingPage from '@/public/home/mobile-landing-page.png';
import Menu, { MenuBars } from '@/components/Menu';
import { useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div className='relative w-full h-full'>
      <img
        src={LandingPage}
        alt='Home'
        className='w-full h-full object-cover'
      />
      <div className='shadow border-0 absolute top-0 left-0 h-12 w-full'></div>
      <MenuBars setMenu={setShow} />
      <Menu show={show} setShow={setShow} />
    </div>
  );
};

export default Home;
