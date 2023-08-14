import { IAmenitiesProps } from '@/pages/ViewApartmentDetail';
import { SetStateAction } from 'react';

export const AboutApartmentModal = ({
  setAboutApartmentModal,
}: {
  setAboutApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:w-[60%] xl:w-[50%] mt-6 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full shadow-lg relative flex flex-col w-full bg-white px-6 outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setAboutApartmentModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base'>
            <h1 className='text-left mt-4 mb-7 text-2xl font-bold xl:text-sm'>
              About this apartment
            </h1>
            <p>
              Centrally located at the heart of Kilimani, a few minutes walk or
              drive to major shopping center's( Yahya, Junction Mall), famous
              eateries and the main landmarks of Nairobi, is the The View at
              Heartland. This apartment combines modern finishes with tastefully
              curated design, set on a high floor with Nice-views overlooking
              the wider Kilimani and Westland's areas. Guests have access to
              reliable WIFI, parking, and a well equipped gym
            </p>
            <h2 className='font-semibold mt-6 text-lg'>The apartment</h2>
            <p>
              Located on a high floor with unobstructed views, the apartment
              offers great view of the famous Nairobi skyline and serene
              environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AmenitiesModal = ({
  amenities,
  setAmenitiesModal,
}: {
  amenities: IAmenitiesProps[];
  setAmenitiesModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:w-[60%] xl:w-[50%] mt-6 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full shadow-lg relative flex flex-col w-full bg-white px-6 outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setAmenitiesModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base'>
            <h1 className='text-left mt-4 mb-7 text-2xl font-bold xl:text-sm'>
              What this place offers
            </h1>
            {amenities.map((amenity, index) => (
              <div className='mb-10' key={index}>
                <h4 className='font-semibold mt-6 mb-4'>{amenity.title}</h4>
                {amenity.available.map((available, index) => (
                  <div
                    className='flex items-center py-5 border-b border-black/[.1]'
                    key={index}
                  >
                    <i className={`${available.icon}`}></i>
                    <p>{available.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
