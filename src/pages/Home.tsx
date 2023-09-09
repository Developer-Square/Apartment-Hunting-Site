import LandingPage from '@/assets/home/mobile-landing-6.jpg';
import TabletPage from '@/assets/home/mobile-landing-2.jpg';
import DesktopPage from '@/assets/home/desktop-landing-1.jpg';
import OurTopCitiesSection from '@/components/home/OurTopCitiesSection';
import {
  AdditionalAbilitiesSection,
  ContactUsSection,
  DesktopMenu,
  FilterBackdrop,
  Footer,
  LandingSection,
  PopularAmenitiesSection,
  Search,
  WhatCanYouDoSection,
} from '@/components/index';
import { useEffect, useState } from 'react';

import ProfileImg from '@/assets/home/Logo - dark surface.png';
import MobileMenu from '@/components/home/MobileMenu';
import { SearchApartmentModal } from '@/components/home/Helpers';

const Home = () => {
  const [show, setShow] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [searchApartmentModal, setSearchApartmentModal] = useState(false);

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
    if (window.innerWidth < 1024) {
      if (show || searchApartmentModal) {
        document.body.classList.add('body-style');
        return;
      }
    }
    document.body.classList.remove('body-style');
  }, [show, searchApartmentModal]);

  return (
    <section
      className={`w-full ${show ? 'h-screen' : 'h-full'} bg-color text-white`}
    >
      {searchApartmentModal ? (
        <>
          <FilterBackdrop show={searchApartmentModal} />
          <SearchApartmentModal
            setSearchApartmentModal={setSearchApartmentModal}
          />
        </>
      ) : null}
      {/* Landing Section */}
      <div className='relative w-full h-full mx-auto'>
        <div className='absolute w-full h-full bg-black/[.1]'></div>
        <button
          className='absolute top-[60%] left-[50%] translate-x-[-50%] w-[320px] xm:w-[368px] sm:w-[85%] lg:hidden text-black h-11 sm:h-12 cursor-pointer rounded-2xl bg-[#FEFEFE] font-semibold'
          onClick={() => setSearchApartmentModal(true)}
        >
          Search
          <i className='fa-solid fa-house-chimney ml-1.5'></i>
        </button>
        <picture>
          <source media='(max-width: 639px)' srcSet={LandingPage} />
          <source media='(max-width: 1023px)' srcSet={TabletPage} />
          <source media='(min-width: 1024px)' srcSet={DesktopPage} />
          <img
            src={LandingPage}
            alt='Landing'
            className='w-full h-auto sm:h-[600px] lg:h-auto 2xl:h-[900px] 3xl:h-[1000px]'
          />
        </picture>
        <div className='w-full'>
          <MobileMenu
            show={show}
            setShow={setShow}
            showStickyHeader={showStickyHeader}
            ProfileImg={ProfileImg}
          />
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
