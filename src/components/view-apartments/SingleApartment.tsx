import { animated, useSpring } from '@react-spring/web';
import { useContext, useEffect, useState } from 'react';
import UserProfileModal from './UserProfileModal';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { WishListModal, CreateWishListModal, FilterBackdrop } from './Helpers';
import { ModalContext } from '@/context/modalContext';
import { useNavigate } from 'react-router-dom';

const SingleApartment = ({
  property,
  setShowFilterBackdrop,
}: {
  property: any;
  setShowFilterBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { title, description, photos, price, id } = property;
  const [isApartmentHovered, setIsApartmentHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [wishListModal, setWishListModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isLargerScreen, setIsLargerScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;

  const { setHideMenu } = useContext(ModalContext);

  const { x: apartmentX } = useSpring({
    from: { x: 0 },
    x: isApartmentHovered ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    // Stop outside scrolling when any of the following modals are open.
    if (showModal) {
      document.body.classList.add('body-style');
      setHideMenu(true);
      return;
    }

    // Hide the popup menu on larger screens.
    if (window.innerWidth <= 768) {
      setHideMenu(false);
    }
    document.body.classList.remove('body-style');
  }, [setHideMenu, showModal]);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsLargerScreen(true);
      return;
    }
    setIsLargerScreen(false);
  }, []);

  const handleWishListModal = () => {
    if (isSaved) {
      setIsSaved(false);
      return;
    }
    setShowFilterBackdrop((prevState) => !prevState);
    setWishListModal((prevState) => !prevState);
    setIsSaved((prevState) => !prevState);
  };

  const hanldeCreateWishList = (name: string) => {
    setWishlist([...wishlist, name]);
    setShowFilterBackdrop(true);
    setShowCreateModal(false);
    setWishListModal(true);
  };

  const handleNavigation = () => {
    // Store info in localStorage to be used in the new tab created for view-apartment-detail-page.
    localStorage.setItem('apartmentInfo', JSON.stringify(property));

    if (isMobile) {
      navigate(`/view-apartment/${id}`);
    } else {
      window.open(`/view-apartment/${id}`, '_blank');
    }
  };

  return (
    <>
      {/* Show the Backdrop whenever any of the modals are open */}
      {showModal || wishListModal || showCreateModal
        ? // Only show the backdrop in 768px view and below.
          !isLargerScreen && <FilterBackdrop show={true} />
        : null}
      {showModal ? (
        <UserProfileModal
          propertyManager={photos[0]}
          name='Ryan Njoroge'
          occupation='Hospitality'
          location='Utawala, Nairobi'
          setShowModal={setShowModal}
          setShowFilterBackdrop={setShowFilterBackdrop}
        />
      ) : null}
      {wishListModal ? (
        <WishListModal
          wishlist={wishlist}
          setShowCreateModal={setShowCreateModal}
          setWishListModal={setWishListModal}
          setShowFilterBackdrop={setShowFilterBackdrop}
        />
      ) : null}
      {showCreateModal ? (
        <CreateWishListModal
          showCreateModal={showCreateModal}
          handleCreateWishList={hanldeCreateWishList}
          setShowCreateModal={setShowCreateModal}
          setShowFilterBackdrop={setShowFilterBackdrop}
        />
      ) : null}

      <div
        className='mb-10 px-8 cursor-pointer sm:px-6 lg:pr-5 lg:pl-3 xl:px-3'
        onMouseEnter={() => setIsApartmentHovered(true)}
        onMouseLeave={() => setIsApartmentHovered(false)}
      >
        <div className='relative w-full h-80 lg:h-72 xl:h-[267px]'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            style={{
              height: window.innerWidth >= 1024 ? '267px' : '100%',
            }}
            className='w-full h-full'
          >
            {photos.map((photo: any, index: any) => (
              <SwiperSlide key={index}>
                <>
                  <div
                    className='relative'
                    onClick={() => handleWishListModal()}
                  >
                    {isSaved ? (
                      <i className='absolute top-2.5 cursor-pointer right-4 text-2xl fa-solid text-red-500 fa-heart'></i>
                    ) : (
                      <i className='absolute top-2.5 text-black cursor-pointer right-4 text-2xl fa-regular fa-heart'></i>
                    )}
                  </div>
                  <img
                    src={photo}
                    className='w-full h-full rounded-xl'
                    alt='view apartments'
                    onClick={() => handleNavigation()}
                  />
                  <animated.div
                    style={{
                      scale: apartmentX.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                      }),
                    }}
                    className='absolute bottom-3.5 cursor-pointer left-2.5 h-[76px] w-[70px] flex preview z-10'
                    onClick={() => {
                      setShowFilterBackdrop(true);
                      setShowModal(true);
                    }}
                  >
                    <div className='h-full w-3 border-[1.8px] border-r-[#C6B1A5]/[.6]'></div>
                    <div className='flex h-full w-full justify-center items-center'>
                      <img
                        src={photos[0]}
                        alt='profile'
                        className='rounded-full w-10 h-10 xl:w-8 xl:h-8'
                      />
                    </div>
                  </animated.div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mt-3.5'>
          <p className='font-bold xl:font-semibold xl:text-xs'>{title}</p>
          <p className='opacity-60 mt-1.5 text-sm xl:text-xs'>{description.slice(0, 80)}...</p>
          <p className='mt-1.5 xl:text-xs'>
            <span className='text-[#1ACA17]'>Ksh </span>
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleApartment;
