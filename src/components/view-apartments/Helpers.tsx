/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSpring, animated } from '@react-spring/web';
import React, { SetStateAction } from 'react';

export const FilterBackdrop = ({ show }: { show: boolean }) => {
  const props = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: show ? 0 : 100, opacity: show ? 1 : 0 },
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: show ? 0 : window.innerHeight,
        backgroundColor: '#FFFFFF',
        height: '100vh',
        width: '100%',
        zIndex: '10',
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
    <p>{title}</p>
    <div className='flex justify-start gap-4 mt-2'>
      {rooms.map((room, index) => (
        <span
          key={index}
          className={`w-[65px] flex items-center justify-center h-[33px] ${
            currentRoom === room ? 'bg-black text-white' : 'bg-white text-black'
          } text-sm rounded-3xl cursor-pointer border border-black/[0.6]`}
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
      content === propertyType ? 'bg-black text-white' : 'border-black/[0.4]'
    } flex flex-col gap-2 justify-center border w-32 h-28 rounded-xl cursor-pointer hover hover:border-black/[0.1] hover:text-black/[0.5]`}
    onClick={() => setPropertyType(content)}
  >
    <i className={icon}></i>
    <p className='pl-5'>{content}</p>
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
      <p className='font-bold'>{title}</p>
      {title === 'Amenities' && <p className='mt-3 mb-5'>Popular in Kenya</p>}
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
            className='checkbox checkbox-primary checkbox-lg'
          />
          <p className='text-lg ml-3.5'>
            {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
          </p>
        </div>
      ))}

      {topAmenities && !showMore && (
        <p
          className='underline mt-7 mb-10 cursor-pointer'
          onClick={() => setShowMore(true)}
        >
          Show more
        </p>
      )}
    </div>
  );
};
