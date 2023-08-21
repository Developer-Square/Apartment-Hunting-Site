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
} from '@/components/view-apartment-detail';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';
import { ThreeDApartmentVideo } from '@/components/view-apartment-detail/index';

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
        icon: 'fa-solid text-lg fa-shower mr-3.5',
        text: 'Hot water',
      },
    ],
  },
  {
    title: 'Laundry',
    available: [
      {
        icon: 'fa-solid text-lg fa-socks mr-3.5',
        text: 'Laundry washer',
      },
      {
        icon: 'fa-solid text-lg fa-shirt mr-3.5',
        text: 'Wardrobe',
      },
    ],
  },
  {
    title: 'Entertainment',
    available: [
      {
        icon: 'fa-solid text-lg fa-tv mr-3.5',
        text: 'Cable tv',
      },
    ],
  },
  {
    title: 'Internet',
    available: [
      {
        icon: 'fa-solid text-lg fa-wifi mr-3.5',
        text: 'Wifi',
      },
    ],
  },
  {
    title: 'Kitchen',
    available: [
      {
        icon: 'fa-solid text-lg fa-utensils mr-3.5',
        text: 'Dining room',
      },
    ],
  },
  {
    title: 'Outdoor',
    available: [
      {
        icon: 'fa-solid text-lg fa-seedling mr-3.5',
        text: 'Outdoor compound',
      },
    ],
  },
  {
    title: 'Parking and facilities',
    available: [
      {
        icon: 'fa-solid text-lg fa-dumbbell mr-3.5',
        text: 'Gym',
      },
      {
        icon: 'fa-solid text-lg fa-square-parking mr-3.5',
        text: 'Free parking',
      },
      {
        icon: 'fa-solid text-lg fa-elevator mr-3.5',
        text: 'Elevator',
      },
    ],
  },
  {
    title: 'Services',
    available: [
      {
        icon: 'fa-solid text-lg fa-paw mr-3.5',
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
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    // Stop outside scrolling when any of the following modals are open.
    if (wishListModal || showCreateModal) {
      document.body.classList.add('body-style');
      return;
    }

    document.body.classList.remove('body-style');
  }, [showCreateModal, wishListModal]);

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
      {wishListModal || showCreateModal ? (
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
          <MobileNav setWishListModal={setWishListModal} />
        ) : (
          <DesktopNav />
        )}
      </header>
      <main>
        {/* 3D apartment tour */}
        <ThreeDApartmentVideo />
        <div className='p-6'>
          <div className='md:flex w-full justify-between'>
            <h1 className='text-[24px] font-semibold mb-2'>
              {cleanedInfo.title}
            </h1>
            <div className='hidden md:flex justify-between'>
              <div className='flex mr-5 cursor-pointer items-center'>
                <i className='fa-solid text-lg fa-arrow-up-from-bracket pr-2'></i>
                <p className='underline underline-offset-1'>Share</p>
              </div>
              <div className='flex mr-5 cursor-pointer items-center'>
                <i
                  className='fa-regular cursor-pointer text-lg pr-2 fa-heart'
                  onClick={() => handleWishListModal()}
                ></i>
                <p className='underline underline-offset-1'>Save</p>
              </div>
            </div>
          </div>
          <div className='flex'>
            <span className='flex items-center text-sm mb-1'>
              <i className='fa-solid fa-award mr-2'></i>
              <p>Super Agent</p>
            </span>
            <p className='text-sm font-bold sm:ml-3 underline'>
              Nairobi, Kenya
            </p>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Alternative apartment pictures */}
          <AlternativePictures />
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          <div className='flex justify-between'>
            <h1 className='text-[20px] font-semibold mb-2'>
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
            <p className='text-base'>
              Centrally located at the heart of Kilimani, a few minutes walk or
              drive to major shopping center's( Yahya, Junction Mall), famous
              eateries and the main landmarks of Nairobi, is the The View at
              Heartland. This apartment combines modern finishes...{' '}
            </p>
            <div
              className='flex items-center mt-4 text-sm cursor-pointer'
              onClick={() => setAboutApartmentModal(true)}
            >
              <span className='font-semibold underline'>Show More</span>
              <i className='fa-solid mt-1 ml-2 fa-chevron-right'></i>
            </div>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* What this place offers */}
          <WhatThisPlaceOffers
            amenities={amenities}
            setAmenitiesModal={setAmenitiesModal}
          />
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Market Price */}
          <div>
            <div className='border-white/[.4] border mb-6 rounded-lg w-full py-3 px-4'>
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
            <h2 className='text-lg font-semibold cursor-pointer'>
              Report this apartment
            </h2>
            <div
              className='flex items-center cursor-pointer mb-10'
              onClick={() => setReportApartmentModal(true)}
            >
              <p className='mt-3'>
                If you come across any listing on our platform that appears
                inaccurate, misleading, or suspicious, we encourage you to
                report it.
              </p>
              <i className='fa-solid fa-chevron-right mt-4 ml-2'></i>
            </div>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
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
    </section>
  );
};

export default ViewApartmentDetailPage;
