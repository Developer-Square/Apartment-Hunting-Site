import {
  WishListModal,
  CreateWishListModal,
  FilterBackdrop,
} from '@/components/view-apartments/Helpers';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import {
  AboutApartmentModal,
  AlternativePictures,
  AmenitiesModal,
  MarketPriceGraph,
  ReportApartmentModal,
  ReserveVisitModal,
  WhatThisPlaceOffers,
  Map,
  Profile,
  SimilarApartments,
  MobileNav,
  DesktopNav,
  ReserveVisitForm,
} from '@/components/view-apartment-detail';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';
import { ThreeDApartmentVideo } from '@/components/view-apartment-detail/index';
import { Footer } from '../components';

export interface IAmenitiesProps {
  title: string;
  available: {
    icon: string;
    text: string;
  }[];
}

const amenities: IAmenitiesProps[] = [
  {
    title: 'Bathroom',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-shower mr-3.5',
        text: 'Hot water',
      },
    ],
  },
  {
    title: 'Laundry',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-socks mr-3.5',
        text: 'Laundry washer',
      },
      {
        icon: 'fa-solid text-lg xl:text-base fa-shirt mr-3.5',
        text: 'Wardrobe',
      },
    ],
  },
  {
    title: 'Entertainment',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-tv mr-3.5',
        text: 'Cable tv',
      },
    ],
  },
  {
    title: 'Internet',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-wifi mr-3.5',
        text: 'Wifi',
      },
    ],
  },
  {
    title: 'Kitchen',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-utensils mr-3.5',
        text: 'Dining room',
      },
    ],
  },
  {
    title: 'Outdoor',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-seedling mr-3.5',
        text: 'Outdoor compound',
      },
    ],
  },
  {
    title: 'Parking and facilities',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-dumbbell mr-3.5',
        text: 'Gym',
      },
      {
        icon: 'fa-solid text-lg xl:text-base fa-square-parking mr-3.5',
        text: 'Free parking',
      },
      {
        icon: 'fa-solid text-lg xl:text-base fa-elevator mr-3.5',
        text: 'Elevator',
      },
    ],
  },
  {
    title: 'Services',
    available: [
      {
        icon: 'fa-solid text-lg xl:text-base fa-paw mr-3.5',
        text: 'Pets allowed',
      },
    ],
  },
];

const ViewApartmentDetailPage = () => {
  const [wishListModal, setWishListModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [aboutApartmentModal, setAboutApartmentModal] = useState(false);
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  const [reserveVisitModal, setReserveVisitModal] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cleanedInfo, setCleanedInfo] = useState({} as ApartmentInfoProps);
  const [reportApartmentModal, setReportApartmentModal] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  const show =
    wishListModal ||
    showCreateModal ||
    aboutApartmentModal ||
    amenitiesModal ||
    reportApartmentModal ||
    reserveVisitModal ||
    showCreateModal;

  useEffect(() => {
    // Stop outside scrolling when any of the following modals are open.
    if (show) {
      document.body.classList.add('body-style');
      return;
    }

    document.body.classList.remove('body-style');
  }, [show]);

  useEffect(() => {
    const info = localStorage.getItem('apartmentInfo');
    const cleanedInfo = info ? JSON.parse(info) : null;
    setCleanedInfo(cleanedInfo);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsSmallerScreen(false);
      return;
    }
    setIsSmallerScreen(true);
  }, []);

  const handleWishListModal = () => {
    if (isSaved) {
      setIsSaved(false);
      return;
    }
    setWishListModal((prevState) => !prevState);
    setIsSaved((prevState) => !prevState);
  };

  const hanldeCreateWishList = (name: string) => {
    setWishlist([...wishlist, name]);
    setShowCreateModal(false);
    setWishListModal(true);
  };

  const style = useSpring({
    height: showContent ? 'auto' : 0,
    opacity: showContent ? 1 : 0,
    config: { duration: 500 },
  });

  const content =
    'Source: tecHiveApartments.com The fair price serves as a guide and is based on the average price of similar listings with shared characteristics such as location, category and more. The algorithm is applied on the data entered by estate agents on tecHiveApartments.';

  return (
    <section className='body-background w-full h-full text-white'>
      {/* Show the Backdrop whenever any of the modals are open */}
      {show ? (
        // Only show the backdrop in 768px view and below.
        <FilterBackdrop show={true} />
      ) : null}
      {wishListModal ? (
        <WishListModal
          wishlist={wishlist}
          setShowCreateModal={setShowCreateModal}
          setWishListModal={setWishListModal}
          setShowFilterBackdrop={() => console.log('')}
        />
      ) : null}
      {aboutApartmentModal ? (
        <AboutApartmentModal setAboutApartmentModal={setAboutApartmentModal} />
      ) : null}
      {amenitiesModal ? (
        <AmenitiesModal
          amenities={amenities}
          setAmenitiesModal={setAmenitiesModal}
        />
      ) : null}
      {reportApartmentModal ? (
        <ReportApartmentModal
          setReportApartmentModal={setReportApartmentModal}
        />
      ) : null}
      {reserveVisitModal ? (
        <ReserveVisitModal setReserveVisitModal={setReserveVisitModal} />
      ) : null}
      {showCreateModal ? (
        <CreateWishListModal
          showCreateModal={showCreateModal}
          handleCreateWishList={hanldeCreateWishList}
          setShowCreateModal={setShowCreateModal}
          setShowFilterBackdrop={() => console.log('')}
        />
      ) : null}
      {/* Navbar */}
      <header className='flex justify-between items-center px-4 md:px-10 h-16 md:h-20'>
        {isSmallerScreen ? (
          <MobileNav
            isSaved={isSaved}
            setIsSaved={setIsSaved}
            setWishListModal={setWishListModal}
          />
        ) : (
          <DesktopNav />
        )}
      </header>
      <main className=''>
        {/* 3D apartment tour */}
        <ThreeDApartmentVideo />
        <div className='px-6 pt-6 2xl:max-w-[1280px] mx-auto'>
          <div className='md:flex w-full justify-between'>
            <h1 className='text-[24px] xl:text-[22px] font-semibold mb-2'>
              {cleanedInfo.title}
            </h1>
            <div className='hidden md:flex justify-between'>
              <div className='flex mr-5 cursor-pointer items-center'>
                <i className='fa-solid text-lg xl:text-sm fa-arrow-up-from-bracket pr-2'></i>
                <p className='underline underline-offset-1 xl:text-sm'>Share</p>
              </div>
              <div
                className='flex mr-5 cursor-pointer items-center'
                onClick={() => handleWishListModal()}
              >
                <i className='fa-regular cursor-pointer text-lg pr-2 fa-heart xl:text-sm'></i>
                <p className='underline underline-offset-1 xl:text-sm'>Save</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <span className='flex items-center text-sm xl:text-[15px] mb-1'>
              <i className='fa-solid fa-award mr-2'></i>
              <p>Super Agent</p>
            </span>
            <p className='text-sm xl:text-[15px] font-bold sm:ml-3 underline'>
              Nairobi, Kenya
            </p>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Alternative apartment pictures */}
          <AlternativePictures />
          {/* This is where the sticky form will start for 768px and above */}
          <div className='md:grid grid-cols-2 gap-6'>
            <div>
              <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
              <div className='flex justify-between'>
                <h1 className='text-[20px] xl:text-[18px] font-semibold mb-2'>
                  Entire apartment <br /> managed by Roronoa Z.
                </h1>
                <img
                  src={PropertyManager5}
                  className='w-12 h-12 rounded-full'
                  alt='profile'
                />
              </div>
              <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
              {/* Description */}
              <div className='flex flex-col'>
                <p className='text-base xl:text-sm'>
                  Centrally located at the heart of Kilimani, a few minutes walk
                  or drive to major shopping center's( Yahya, Junction Mall),
                  famous eateries and the main landmarks of Nairobi, is the The
                  View at Heartland. This apartment combines modern finishes...{' '}
                </p>
                <div
                  className='flex items-center mt-4 text-sm cursor-pointer'
                  onClick={() => setAboutApartmentModal(true)}
                >
                  <span className='font-semibold xl:text-sm underline'>
                    Show More
                  </span>
                  <i className='fa-solid mt-1 ml-2 fa-chevron-right'></i>
                </div>
              </div>
              <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
              {/* What this place offers */}
              <WhatThisPlaceOffers
                amenities={amenities}
                setAmenitiesModal={setAmenitiesModal}
              />
            </div>
            <ReserveVisitForm />
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Market Price */}
          <div>
            <div className='border-white/[.4] border mb-6 rounded-lg w-full xl:w-[65%] py-3 px-4 xl:text-sm'>
              82% of similar properties in Kilimani with 2 bedrooms have a lower
              asking price.
              <div className='flex items-center mt-2 text-[#230ee7]'>
                <p
                  className='cursor-pointer'
                  onClick={() => setShowContent((prevState) => !prevState)}
                >
                  Show
                </p>
                {showContent ? (
                  <i className='fa-solid fa-caret-up ml-1'></i>
                ) : (
                  <i className='fa-solid fa-caret-down ml-1'></i>
                )}
              </div>
              <animated.div style={style}>{content}</animated.div>
            </div>
            <MarketPriceGraph />
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Profile section */}
          <Profile profile={PropertyManager5} />
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Map */}
          <Map />
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Similar apartments */}
          <SimilarApartments />
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Report apartment */}
          <div>
            <div className='flex items-center'>
              <h2
                className='text-lg xl:text-base font-semibold underline underline-offset-4 cursor-pointer'
                onClick={() => setReportApartmentModal(true)}
              >
                Report this apartment
              </h2>
            </div>
            <div
              className='flex items-center cursor-pointer mb-10'
              onClick={() => setReportApartmentModal(true)}
            >
              <p className='mt-3 xl:text-sm'>
                If you come across any listing on our platform that appears
                inaccurate, misleading, or suspicious, we encourage you to
                report it.
              </p>
              <i className='block xl:hidden fa-solid fa-chevron-right mt-4 ml-2'></i>
            </div>
          </div>
          <div className='mt-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Reserve visit tab */}
          <div className='md:hidden fixed flex justify-between items-center bg-[#141b1f] bottom-0 left-0 z-20 w-full h-20 px-6'>
            <div className='flex flex-col justify-center'>
              <p className='font-semibold text-sm'>Ksh 1500</p>
              <p className='font-semibold text-sm underline cursor-pointer'>
                Aug 13-Aug 14
              </p>
            </div>
            <button
              className='h-12 bg-white rounded-lg text-black w-[150px]'
              onClick={() => setReserveVisitModal(true)}
            >
              Reserve Visit
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default ViewApartmentDetailPage;
