import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import UserProfileModal from './UserProfileModal';
import { ApartmentInfoProps } from './Apartments';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import ViewApartments1 from '@/assets/view-apartments/view-apartments-1.png';
import ViewApartments2 from '@/assets/view-apartments/view-apartments-2.webp';
import ViewApartments3 from '@/assets/view-apartments/view-apartments-3.webp';
import ViewApartments4 from '@/assets/view-apartments/view-apartments-4.webp';
import ViewApartments5 from '@/assets/view-apartments/view-apartments-5.webp';
import { WishListModal, CreateWishListModal } from './Helpers';

const SingleApartment = ({ info }: { info: ApartmentInfoProps }) => {
  const { title, subtitle, propertyManager, price } = info;
  const viewApartments = [
    ViewApartments1,
    ViewApartments2,
    ViewApartments3,
    ViewApartments4,
    ViewApartments5,
  ];
  const [isApartmentHovered, setIsApartmentHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [wishListModal, setWishListModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [swiperQualities, setswiperQualities] = useState([Pagination]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const { x: apartmentX } = useSpring({
    from: { x: 0 },
    x: isApartmentHovered ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (window.innerWidth > 640) {
      setswiperQualities([...swiperQualities, Navigation]);
      return;
    }
    setswiperQualities([Pagination]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);

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

  return (
    <>
      {showModal ? (
        <UserProfileModal
          propertyManager={propertyManager}
          name='Ryan Njoroge'
          occupation='Hospitality'
          location='Utawala, Nairobi'
          setShowModal={setShowModal}
        />
      ) : null}
      {wishListModal ? (
        <WishListModal
          wishlist={wishlist}
          setShowCreateModal={setShowCreateModal}
          setWishListModal={setWishListModal}
        />
      ) : null}
      {showCreateModal ? (
        <CreateWishListModal
          showCreateModal={showCreateModal}
          handleCreateWishList={hanldeCreateWishList}
          setShowCreateModal={setShowCreateModal}
        />
      ) : null}
      <div
        className='mb-10 px-12'
        onMouseEnter={() => setIsApartmentHovered(true)}
        onMouseLeave={() => setIsApartmentHovered(false)}
      >
        <div className='relative w-full h-80'>
          <Swiper
            modules={swiperQualities}
            navigation={swiperQualities.includes(Navigation) ? true : false}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            className='w-full h-full'
          >
            {viewApartments.map((apartment, index) => (
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
                    src={apartment}
                    className='w-full h-full rounded-xl'
                    alt='view apartments'
                  />
                  <animated.div
                    style={{
                      scale: apartmentX.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                      }),
                    }}
                    className='absolute bottom-3.5 cursor-pointer left-2.5 h-[76px] w-[70px] flex preview z-10'
                    onClick={() => setShowModal(true)}
                  >
                    <div className='h-full w-3 border-[1.8px] border-r-[#C6B1A5]/[.6]'></div>
                    <div className='flex h-full w-full justify-center items-center'>
                      <img
                        src={propertyManager}
                        alt='profile'
                        className='rounded-full w-10 h-10'
                      />
                    </div>
                  </animated.div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mt-3.5'>
          <p className='font-bold'>{title}</p>
          <p className='opacity-60 mt-1.5 text-sm'>{subtitle}</p>
          <p className='mt-1.5'>
            <span className='text-[#1ACA17]'>Ksh </span>
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleApartment;
