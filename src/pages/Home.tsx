import LandingPage from '@/assets/home/mobile-landing-page.png';
import Menu, { MenuBars } from '@/components/Menu';
import { LandingSection } from '@/components/index';
import { useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <section className='w-full h-full text-white'>
      {/* Landing Section */}
      <div className='relative w-full h-full'>
        <img
          src={LandingPage}
          alt='Home'
          className='w-full h-full object-cover'
        />
        <div className='max-w-[340px] w-full'>
          <MenuBars setMenu={setShow} />
          <Menu show={show} setShow={setShow} />
          <LandingSection />
        </div>
      </div>
      {/* Popular Amenities Section */}
      <div className='amenities'>
        <h4 className='max-w-[340px] mx-auto w-full text-2xl'>
          Popular amenities for Kenyan apartments.
        </h4>
      </div>
    </section>
  );
};

export default Home;
