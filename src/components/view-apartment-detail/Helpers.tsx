import { IAmenitiesProps } from '@/pages/ViewApartmentDetail';
import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewApartments2 from '@/assets/view-apartments/view-apartments-2.webp';
import { ApartmentInfoProps } from '../view-apartments/Apartments';

export const AboutApartmentModal = ({
  setAboutApartmentModal,
}: {
  setAboutApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white px-6 outline-none focus:outline-none'>
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
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12 mt-2 px-6'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setAmenitiesModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] px-6  overflow-y-scroll text-base'>
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

export const ReportApartmentModal = ({
  setReportApartmentModal,
}: {
  setReportApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white px-6 outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setReportApartmentModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base'>
            <h1 className='text-left mt-2 mb-5 text-2xl font-bold xl:text-sm'>
              Report Policy
            </h1>
            <p>
              If you come across any listing on our platform that appears
              inaccurate, misleading, or suspicious, we encourage you to report
              it.
              <br />
              <div className='my-3'></div>
              Your feedback helps maintain the integrity of our apartment
              listings and ensures a trustworthy community.
              <br />
              <div className='my-3'></div>
              Fill the following form to notify our team for a prompt review.
              Together, we can create a reliable apartment hunting experience
              for everyone.
            </p>
            <div className='my-4'></div>

            <p className='mb-1'>Tell us what happened(optional):</p>
            <textarea
              placeholder='What is the issue?'
              className='textarea textarea-bordered textarea-md w-full max-w-xs bg-transparent focus:ring-0'
            ></textarea>
            <p
              className='underline text-sm cursor-pointer text-red-500 mt-7 text-center'
              onClick={() => navigate('/help')}
            >
              Safety tips
            </p>
            <button className='bg-red-600 w-full mt-3 h-12 text-white rounded-md'>
              Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ReserveVisitModal = ({
  setReserveVisitModal,
}: {
  setReserveVisitModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [cleanedInfo, setCleanedInfo] = useState({} as ApartmentInfoProps);

  useEffect(() => {
    const info = localStorage.getItem('apartmentInfo');
    const cleanedInfo = info ? JSON.parse(info) : null;
    setCleanedInfo(cleanedInfo);
  }, []);

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:w-[60%] xl:w-[50%] mt-6 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-16 px-6'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setReserveVisitModal(false);
              }}
            ></i>
            <h4 className='font-semibold w-full text-center'>
              Request a visit
            </h4>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll px-6 text-base'>
            <div className='mt-4 mb-6 sm:flex'>
              <img
                src={ViewApartments2}
                alt='apartment'
                className='w-32 h-24 rounded-lg'
              />
              <div className='mt-2 sm:mt-0 sm:ml-4'>
                <p className='text-sm'>{cleanedInfo.title}</p>
                <p className='text-xs text-[#717171]'>{cleanedInfo.subtitle}</p>
                <div className='flex items-center mt-0.5'>
                  <i className='fa-solid text-sm fa-award mr-1'></i>
                  <p className='text-xs text-[#717171] font-semibold'>
                    Super agent
                  </p>
                </div>
              </div>
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            <div className='my-6 '>
              <h2 className='text-xl mb-6 font-semibold'>Your Visit</h2>
              <div className='flex w-full justify-between mb-6'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm mb-1'>Dates</p>
                  <p>Aug 14-15</p>
                </div>
                <p className='font-semibold text-sm underline'>Edit</p>
              </div>
              <div className='flex w-full justify-between mb-6'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm mb-1'>Guests</p>
                  <p>1 guest</p>
                </div>
                <p className='font-semibold text-sm underline'>Edit</p>
              </div>
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            <div className='my-6'>
              <h2 className='text-xl mb-6 font-semibold'>Price details</h2>
              <div className='flex w-full justify-between mb-3'>
                <p>Transport fee(Ksh 500 x 1)</p>
                <p>Ksh 500</p>
              </div>
              <div className='flex w-full justify-between mb-3'>
                <p>Food</p>
                <p>Ksh 800</p>
              </div>
              <div className='flex w-full justify-between mb-5'>
                <p>Cleaning fee</p>
                <p>Ksh 300</p>
              </div>
              <div className='flex w-full justify-between mt-5'>
                <p className='underline font-semibold'>Total(Ksh)</p>
                <p className='underline font-semibold'>Ksh 1500</p>
              </div>
              <div className='mt-3 flex justify-end'>
                <p className='underline font-semibold'>More Info</p>
              </div>
            </div>
            <div className='flex flex-col w-full items-center mt-10 mb-6'>
              <div className='text-xs w-[95%]'>
                By selecting the button below, I agree to the Visiting House
                Rules, Ground rules for guests, and that tecHiveApartments can
                charge my payment method if I’m responsible for damage.
              </div>
              <button className='bg-black mt-6 rounded-lg h-14 w-[95%] text-white'>
                Confirm and pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
