import LandingPage from '@/assets/home/mobile-landing-page.png';
import Menu, { MenuBars } from '@/components/Menu';
import OurTopCitiesSection from '@/components/OurTopCitiesSection';
import {
  AdditionalAbilitiesSection,
  ContactUsSection,
  LandingSection,
  PopularAmenitiesSection,
  WhatCanYouDoSection,
} from '@/components/index';
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
        <div className='max-w-[330px] w-full'>
          <MenuBars setMenu={setShow} />
          <Menu show={show} setShow={setShow} />
          <LandingSection />
        </div>
      </div>
      {/* Popular Amenities Section */}
      <div className='amenities'>
        <div className='max-w-[330px] mx-auto w-full'>
          <PopularAmenitiesSection />
          <WhatCanYouDoSection />
          <ContactUsSection />
          <AdditionalAbilitiesSection />
          <OurTopCitiesSection />
        </div>
      </div>
    </section>
  );
};

export default Home;
