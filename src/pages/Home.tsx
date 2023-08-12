import LandingPage from '@/assets/home/mobile-landing-page.png';
import TabletPage from '@/assets/home/tablet-landing-page.jpg';
import DesktopPage from '@/assets/home/desktop-landing-page.png';
import Menu, { MenuBars } from '@/components/home/Menu';
import OurTopCitiesSection from '@/components/home/OurTopCitiesSection';
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
import { useEffect, useState } from 'react';

import ProfileImg from '@/assets/home/Logo - dark surface.png';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 21) {
        setShowStickyHeader(true);
        return;
      }
      setShowStickyHeader(false);
    });
  }, []);

  useEffect(() => {
    // Stop outside scrolling when any of the modals are open.
    if (show && window.innerWidth < 1024) {
      document.body.classList.add('body-style');
      return;
    }
    document.body.classList.remove('body-style');
  }, [show]);

  return (
    <section className='w-full h-screen bg-color lg:h-full text-white'>
      {/* Landing Section */}
      <div className='relative w-full h-full 2xl:w-[1440px] 3xl:w-[1700px] mx-auto'>
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
            className='w-full h-auto md:h-[800px] lg:h-auto 2xl:h-[1440px] 3xl:max-w-[1700px]'
          />
        </picture>
        <div className='max-w-[330px] xm:max-w-[360px] w-full'>
          <div
            className={`lg:hidden fixed top-0 z-20 w-full transition-all ease-in-out duration-[1.5s] ${
              showStickyHeader ? 'stickyHeader' : ''
            }`}
          >
            <img
              src={ProfileImg}
              alt='profile'
              className='absolute top-3 left-5 cursor-pointer w-11 h-11 rounded-full'
            />
            <MenuBars setMenu={setShow} />
          </div>
          <div className='lg:hidden'>
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
        <div className='max-w-[330px] xm:max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[850px] xl:max-w-[1045px] 2xl:max-w-[1200px] 3xl:max-w-[1700px] mx-auto w-full'>
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
