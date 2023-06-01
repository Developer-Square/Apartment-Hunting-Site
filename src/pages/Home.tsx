import LandingPage from '@/assets/home/mobile-landing-page.png';
import TabletPage from '@/assets/home/tablet-landing-page.jpg';
import DesktopPage from '@/assets/home/desktop-landing-page.png';
import Menu, { MenuBars } from '@/components/Menu';
import OurTopCitiesSection from '@/components/OurTopCitiesSection';
import {
  AdditionalAbilitiesSection,
  ContactUsSection,
  DesktopMenu,
  Footer,
  LandingSection,
  PopularAmenitiesSection,
  Search,
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
          <source
            media='(min-width: 640px) && (max-width: 1023px)'
            srcSet={TabletPage}
          />
          <source media='(min-width: 1024px)' srcSet={DesktopPage} />
          <img
            src={LandingPage}
            alt='Landing'
            className='w-full h-auto md:h-[800px] lg:h-auto'
          />
        </picture>
        <div className='max-w-[330px] xm:max-w-[360px] w-full'>
          <div className='lg:hidden'>
            <MenuBars setMenu={setShow} />
            <Menu show={show} setShow={setShow} />
          </div>
          <div className='hidden lg:block'>
            <DesktopMenu />
            <Search />
          </div>
          <LandingSection />
        </div>
      </div>
      {/* Other Sections */}
      <div className='amenities pt-10 xm:pt-14 sm:pt-8'>
        <div className='max-w-[330px] xm:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[850px] mx-auto w-full'>
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
