import LandingPage from '@/assets/home/mobile-landing-page.png';
import Menu, { MenuBars } from '@/components/Menu';
import { LandingSection } from '@/components/index';
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
      <div className='max-w-[340px] w-full'>
        <MenuBars setMenu={setShow} />
        <Menu show={show} setShow={setShow} />
        <LandingSection />
      </div>
    </div>
  );
};

export default Home;
