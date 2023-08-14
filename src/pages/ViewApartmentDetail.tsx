import {
  WishListModal,
  CreateWishListModal,
  FilterBackdrop,
} from '@/components/view-apartments/Helpers';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApartmentVideo from '@/assets/view-apartment-detail-page/video_3.mp4';
import Apartment1 from '@/assets/view-apartment-detail-page/view-apartment-1.webp';
import Apartment2 from '@/assets/view-apartment-detail-page/view-apartment-2.webp';
import Apartment3 from '@/assets/view-apartment-detail-page/view-apartment-3.webp';
import { ApartmentInfoProps } from '@/components/view-apartments/Apartments';
import Profile from '@/assets/view-apartments/property-manager-9.jpg';
import {
  AboutApartmentModal,
  AmenitiesModal,
} from '@/components/view-apartment-detail';

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
  const [isSaved, setIsSaved] = useState(false);
  const [wishListModal, setWishListModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [aboutApartmentModal, setAboutApartmentModal] = useState(false);
  const [amenitiesModal, setAmenitiesModal] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cleanedInfo, setCleanedInfo] = useState({} as ApartmentInfoProps);
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
      {showCreateModal ? (
        <CreateWishListModal
          showCreateModal={showCreateModal}
          handleCreateWishList={hanldeCreateWishList}
          setShowCreateModal={setShowCreateModal}
          setShowFilterBackdrop={() => console.log('')}
        />
      ) : null}
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
        </div>
      </main>
    </section>
  );
};

export default ViewApartmentDetailPage;
