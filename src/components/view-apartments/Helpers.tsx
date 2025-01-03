/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ApartmentsContext } from '@/context/apartmentsContext';
import { useSpring, animated } from '@react-spring/web';
import React, { SetStateAction, useContext, useState } from 'react';

export const FilterBackdrop = ({ show }: { show: boolean }) => {
  const props = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: show ? 0 : 100, opacity: show ? 1 : 0 },
  });

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: show ? 0 : window.innerHeight,
        backgroundColor: '#FFFFFF',
        height: '100vh',
        width: '100%',
        zIndex: '30',
        backdropFilter: 'blur(5px)',
        background: 'rgba(255, 255, 255, 0.4)',
        ...props,
      }}
    />
  );
};

export const NumberOfRooms = ({
  title,
  rooms,
  currentRoom,
  setCurrentRoom,
}: {
  title: string;
  rooms: string[];
  currentRoom: string;
  setCurrentRoom: React.Dispatch<SetStateAction<string>>;
}) => (
  <div className='mt-4'>
    <p className='xl:text-sm'>{title}</p>
    <div className='flex justify-start gap-4 mt-2'>
      {rooms.map((room, index) => (
        <span
          key={index}
          className={`w-[65px] flex items-center justify-center h-[33px] ${
            currentRoom === room ? 'bg-black text-white' : 'bg-white text-black'
          } text-sm rounded-3xl xl:text-xs cursor-pointer border border-black/[0.6]`}
          onClick={() => setCurrentRoom(room)}
        >
          {room}
        </span>
      ))}
    </div>
  </div>
);

export const PropertyType = ({
  icon,
  content,
  propertyType,
  setPropertyType,
}: {
  icon: string;
  content: string;
  propertyType: string;
  setPropertyType: React.Dispatch<SetStateAction<string>>;
}) => (
  <div
    className={`${
      content === propertyType
        ? 'bg-black text-white hover:text-white/[0.8]'
        : 'border-black/[0.4] hover:border-black/[0.1] hover:text-black/[0.5]'
    } flex flex-col gap-2 justify-center sm:justify-around border w-36 sm:w-64 h-28 sm:h-48 md:w-32 md:h-28 lg:w-[160px] lg:h-[120px] rounded-xl cursor-pointer`}
    onClick={() => setPropertyType(content)}
  >
    <i className={icon}></i>
    <p className='pl-5 xl:text-sm'>{content}</p>
  </div>
);

export const AmenitiesList = ({
  title,
  amenitiesList,
  amenities,
  setAmenities,
  topAmenities,
  showMore,
  setShowMore,
}: {
  title: string;
  amenitiesList: string[];
  amenities: { [key: string]: boolean };
  setAmenities: React.Dispatch<SetStateAction<any>>;
  topAmenities: boolean;
  showMore?: boolean;
  setShowMore: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='mt-8'>
      <p className='font-bold xl:text-sm'>{title}</p>
      {title === 'Amenities' && (
        <p className='mt-3 mb-5 xl:text-sm'>Popular in Kenya</p>
      )}
      <div className='grid md:grid-cols-2'>
        {amenitiesList.map((amenity, index) => (
          <div key={index} className='flex items-center mt-4'>
            <input
              type='checkbox'
              // @ts-ignore
              checked={amenities[amenity]}
              onChange={() =>
                setAmenities({
                  ...amenities,
                  // @ts-ignore
                  [amenity]: !amenities[amenity],
                })
              }
              className='checkbox checkbox-primary checkbox-lg xl:checkbox-md'
            />
            <p className='text-lg xl:text-sm ml-3.5'>
              {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
            </p>
          </div>
        ))}
      </div>

      {topAmenities && !showMore && (
        <p
          className='underline mt-7 mb-44 2xl:mb-60 xl:text-sm cursor-pointer'
          onClick={() => setShowMore(true)}
        >
          Show more
        </p>
      )}
    </div>
  );
};

export const WishListModal = ({
  setWishListModal,
  setShowCreateModal,
  wishlist,
  setShowFilterBackdrop,
}: {
  setWishListModal: React.Dispatch<SetStateAction<boolean>>;
  setShowCreateModal: React.Dispatch<SetStateAction<boolean>>;
  wishlist: string[];
  setShowFilterBackdrop: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const handleCreateWishList = () => {
    setWishListModal(false);
    setShowCreateModal(true);
  };

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative w-full md:w-[60%] xl:w-[50%] mt-6 mx-auto'>
        {/*content*/}
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full p-3.5 border-b mb-5 border-black/[.2] rounded-t'>
            <i
              className='fa-solid fa-xmark text-lg cursor-pointer'
              onClick={() => {
                setWishListModal(false);
                setShowFilterBackdrop(false);
              }}
            ></i>
            <p className='text-center font-semibold ml-[30%] xl:text-sm'>
              Your wishlists
            </p>
          </div>
          {/*body*/}
          <div className='max-h-[85vh] overflow-y-scroll'>
            <div
              className='my-3.5 flex items-center mx-4 cursor-pointer'
              onClick={() => handleCreateWishList()}
            >
              <div className='w-16 h-16 xl:w-12 xl:h-12 flex border border-black/[.4] rounded-lg justify-center items-center'>
                <i className='fa-solid text-3xl xl:text-xl font-normal fa-plus'></i>
              </div>
              <p className='ml-3.5 font-semibold xl:text-sm'>
                Create new wishlist
              </p>
            </div>
            {wishlist.length
              ? wishlist.map((wish, index) => (
                  <div
                    key={index}
                    className='my-4 flex items-center mx-4 cursor-pointer'
                  >
                    <div className='flex w-16 h-16 rounded-lg justify-center items-center bg-[#f0efe9]' />
                    <p className='ml-3.5 font-semibold'>{wish}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreateWishListModal = ({
  showCreateModal,
  setShowCreateModal,
  handleCreateWishList,
  setShowFilterBackdrop,
}: {
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<SetStateAction<boolean>>;
  handleCreateWishList: (name: string) => void;
  setShowFilterBackdrop: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const props = useSpring({
    from: { y: 0, opacity: 0 },
    to: { y: showCreateModal ? 0 : 100, opacity: showCreateModal ? 1 : 0 },
  });
  const [name, setName] = useState('');

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: showCreateModal ? 45 : window.innerHeight,
        backgroundColor: '#FFFFFF',
        height: 'auto',
        width: '100%',
        zIndex: '10',
        borderRadius: '1rem',
        overflowY: 'hidden',
        ...props,
      }}
    >
      <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
        <div className='relative w-full md:w-[60%] xl:w-[50%] mt-6 mx-auto'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-center w-full p-3.5 border-b mb-5 border-black/[.2]  rounded-t'>
              <i
                className='fa-solid fa-xmark text-lg cursor-pointer'
                onClick={() => {
                  setShowCreateModal(false);
                  setShowFilterBackdrop(false);
                }}
              ></i>
              <p className='text-center xl:text-sm font-semibold ml-[30%]'>
                Create wishlist
              </p>
            </div>
            {/*body*/}
            <div className='max-h-[85vh] overflow-y-scroll'>
              <div className='mt-2 mb-3.5 flex items-center mx-4'>
                <div className='flex flex-col w-full'>
                  <input
                    required
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name...'
                    className='w-full shadow-transparent py-7 xl:py-3.5 rounded-lg px-2 border xl:text-sm border-black/[.2] !outline-none  bg-transparent'
                  />
                  <p className='text-xs mt-1.5 text-gray-400'>
                    50 characters maximum
                  </p>
                </div>
              </div>
              <div className='mt-10 border-t flex justify-center border-black/[.2]'>
                <button
                  disabled={name.length ? false : true}
                  className={`${
                    name.length ? 'bg-black' : 'bg-black/[.3]'
                  } my-4 font-semibold py-2.5 xl:text-sm rounded-lg text-white w-72`}
                  onClick={() => handleCreateWishList(name)}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export const NavBarMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowWelcomeBackModal } = useContext(ApartmentsContext);
  return (
    <div
      className='md:flex float-right hidden pl-3 pr-2 py-1.5 text-[#f0efe9] border border-[#f0efe9] rounded-3xl items-center cursor-pointer dropdown dropdown-bottom dropdown-end z-20'
      tabIndex={0}
      onClick={() => setShowMenu((prevState) => !prevState)}
    >
      <i className='fa-solid fa-bars pr-2 text-sm'></i>
      <i className='fa-solid fa-circle-user text-[28px]'></i>
      {showMenu ? (
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-[#141b1f] rounded-box mt-3 w-52 xl:text-[16px]'
        >
          <li onClick={() => setShowWelcomeBackModal(true)}>
            <a>Login</a>
          </li>
          <li onClick={() => setShowWelcomeBackModal(true)}>
            <a>Signup</a>
          </li>
          <div className='border border-white/[.3]'></div>
          <li className='text-white/[.8]'>
            <a>Decorate Room</a>
          </li>
          <li className='text-white/[.8]'>
            <a>Help</a>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
