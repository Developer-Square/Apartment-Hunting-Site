import LandingPage from '@/assets/home/mobile-landing-page.png';
import TabletPage from '@/assets/home/tablet-landing-page.jpg';
import Menu, { MenuBars } from '@/components/Menu';
import OurTopCitiesSection from '@/components/OurTopCitiesSection';
import {
  AdditionalAbilitiesSection,
  ContactUsSection,
  Footer,
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
        <picture>
          <source media='(max-width: 639px)' srcSet={LandingPage} />
          <source media='(min-width: 640px)' srcSet={TabletPage} />
          <img
            src={LandingPage}
            alt='Landing'
            className='w-full h-auto md:h-[800px]'
          />
        </picture>
        <div className='max-w-[330px] xm:max-w-[360px] w-full'>
          <MenuBars setMenu={setShow} />
          <Menu show={show} setShow={setShow} />
          <LandingSection />
        </div>
      </div>
      {/* Other Sections */}
      <div className='amenities pt-10 xm:pt-14 sm:pt-8'>
        <div className='max-w-[330px] xm:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] mx-auto w-full'>
          <PopularAmenitiesSection />
          <WhatCanYouDoSection />
          <ContactUsSection />
          <AdditionalAbilitiesSection />
          <OurTopCitiesSection />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Home;
