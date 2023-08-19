import {
  WishListModal,
  CreateWishListModal,
  FilterBackdrop,
} from '@/components/view-apartments/Helpers';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from '@react-spring/web';
import ApartmentVideo from '@/assets/view-apartment-detail-page/video_3.mp4';
import Apartment1 from '@/assets/view-apartment-detail-page/view-apartment-1.webp';
import Apartment2 from '@/assets/view-apartment-detail-page/view-apartment-2.webp';
import Apartment3 from '@/assets/view-apartment-detail-page/view-apartment-3.webp';
import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import Profile from '@/assets/view-apartments/property-manager-9.jpg';
import {
  AboutApartmentModal,
  AmenitiesModal,
  ReportApartmentModal,
  ReserveVisitModal,
} from '@/components/view-apartment-detail';
import PropertyManager1 from '@/assets/view-apartments/property-manager.png';
import PropertyManager2 from '@/assets/view-apartments/property-manager-2.jpg';
import PropertyManager3 from '@/assets/view-apartments/property-manager-3.jpg';
import PropertyManager4 from '@/assets/view-apartments/property-manager-4.jpg';
import PropertyManager5 from '@/assets/view-apartments/property-manager-5.jpg';
import SimilarApartment from '@/components/view-apartment-detail/SimilarApartment';
import MarketPriceGraph from '@/components/view-apartment-detail/MarketPriceGraph';

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

const apartmentInfo: ApartmentInfoProps[] = [
  {
    id: 1,
    propertyManager: PropertyManager2,
    title: 'Haven woods apartments',
    subtitle: 'Nairobi apartment with 3 bedrooms',
    price: '20,000',
  },
  {
    id: 2,
    propertyManager: PropertyManager3,
    title: 'Serenity heights apartment',
    subtitle: 'Stunning loft apartment facing the indian ocean',
    price: '25,000',
  },
  {
    id: 3,
    propertyManager: PropertyManager1,
    title: 'Harmony haven apartments',
    subtitle: 'Haven apartments stunning view of Nakuru city',
    price: '35,000',
  },
  {
    id: 4,
    propertyManager: PropertyManager4,
    title: 'Jambo Heights apartment',
    subtitle: 'Elevated Urban Living',
    price: '17,000',
  },
  {
    id: 5,
    propertyManager: PropertyManager5,
    title: 'Mawingu Gardens apartment',
    subtitle: 'Serene Skyline Retreat',
    price: '32,000',
  },
];

const ViewApartmentDetailPage = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [wishListModal, setWishListModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [aboutApartmentModal, setAboutApartmentModal] = useState(false);
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  const [reserveVisitModal, setReserveVisitModal] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cleanedInfo, setCleanedInfo] = useState({} as ApartmentInfoProps);
  const [reportApartmentModal, setReportApartmentModal] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const navigate = useNavigate();

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

  // Only available for mobile and tablet screens
  const handleRouteBack = () => {
    navigate('/apartments');
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
      <header className='flex justify-between items-center px-4 h-16'>
        <i
          className='fa-solid cursor-pointer text-lg fa-chevron-left'
          onClick={() => handleRouteBack()}
        ></i>
        <div className='flex'>
          <i className='fa-solid cursor-pointer text-lg fa-arrow-up-from-bracket pr-5'></i>
          <i
            className='fa-regular cursor-pointer text-lg fa-heart'
            onClick={() => handleWishListModal()}
          ></i>
        </div>
      </header>
      <main>
        {/* 3D apartment tour */}
        <div className='relative h-[630px]'>
          <video
            width='100%'
            height='100%'
            className='w-full h-full absolute top-0 left-[50%] transform translate-x-[-50%]'
            controls={true}
          >
            <source src={ApartmentVideo} type='video/mp4' />
          </video>
        </div>
        <div className='p-6'>
          <h1 className='text-[24px] font-semibold mb-2'>
            {cleanedInfo.title}
          </h1>
          <span className='flex items-center text-sm mb-1'>
            <i className='fa-solid fa-award mr-2'></i>
            <p>Super Agent</p>
          </span>
          <p className='text-sm font-bold underline'>Nairobi, Kenya</p>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Alternative apartment pictures */}
          <div className='text-base'>
            <p className='mb-4'>
              Alternatively you can also view professional apartment pictures
            </p>
            <div className='grid grid-cols-2 gap-2 cursor-pointer'>
              <img src={Apartment1} className='w-full h-full' alt='apartment' />
              <div className='flex flex-col'>
                <img src={Apartment2} className='mb-3' alt='apartment' />
                <img src={Apartment3} alt='apartment' />
              </div>
            </div>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          <div className='flex justify-between'>
            <h1 className='text-[20px] font-semibold mb-2'>
              Entire apartment <br /> managed by Roronoa Z.
            </h1>
            <img
              src={Profile}
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
          <div>
            <h2 className='font-semibold text-xl mb-6'>
              What this place offers
            </h2>
            {amenities.slice(0, 5).map((amenity, index) => (
              <div className='flex items-center mb-3' key={index}>
                <i className={`${amenity.available[0].icon}`}></i>
                <p>{amenity.available[0].text}</p>
              </div>
            ))}
            <button
              className='mt-4 h-12 w-full rounded-lg border border-white/[.4]'
              onClick={() => setAmenitiesModal(true)}
            >
              Show all 11 amenities
            </button>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Market Price */}
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
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Map */}
          <div>
            <p className='text-left mb-3'>Nairobi, Kenya</p>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.43284925167!2d36.7203741732993!3d-1.3021282380375216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20County!5e0!3m2!1sen!2ske!4v1692081502773!5m2!1sen!2ske'
              width='100%'
              height='250'
              style={{ border: 0 }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='my-6 border-b border-[#f0efe9]/[.4]'></div>
          {/* Similar apartments */}
          <div>
            <h2 className='font-semibold text-xl mb-6'>Similar Apartments</h2>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={0}
              slidesPerView={1}
            >
              {apartmentInfo.map((info, index) => (
                <SwiperSlide key={index}>
                  <SimilarApartment key={index} info={info} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
          <div className='fixed flex justify-between items-center bg-[#141b1f] bottom-0 left-0 z-20 w-full h-20 px-6'>
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
