import React from 'react';

const UserProfileModal = ({
  setShowModal,
  propertyManager,
  name,
  occupation,
  location,
  setShowFilterBackdrop,
}: {
  setShowModal: (showModal: boolean) => void;
  propertyManager: string;
  name: string;
  occupation: string;
  location: string;
  setShowFilterBackdrop: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const confirmedInfo = ['Identity', 'Phone number', 'Email Address'];

  return (
    <>
      <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
        <div className='relative w-full md:w-[390px] 2xl:w-[30%] 3xl:w-[20%] mx-auto'>
          {/*content*/}
          <div className='border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-[#f0efe9] outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 xl:p-3  rounded-t'>
              <i
                className='fa-solid fa-xmark text-lg cursor-pointer'
                onClick={() => {
                  setShowModal(false);
                  setShowFilterBackdrop(false);
                }}
              ></i>
            </div>
            {/*body*/}
            <div className='max-h-[85vh] overflow-y-scroll'>
              <div className='relative bg-white mx-6 rounded-3xl shadow-2xl py-8 px-5 flex justify-between gap-5'>
                <div className='flex flex-2 sm:flex-auto sm:w-[65%] md:w-[55%] flex-col items-center'>
                  <div className='relative h-24 w-24 rounded-full'>
                    <div className='absolute top-0 left-0 bg-black/[.2] w-full h-full rounded-full'></div>
                    <img
                      src={propertyManager}
                      alt='property manager'
                      className='w-full h-full rounded-full'
                    />
                    <div className='absolute bottom-0 right-0'>
                      <i className='fa-solid fa-circle-check text-xl'></i>
                    </div>
                  </div>
                  <p className='font-bold mt-4 text-[26px]'>{name}</p>
                  <p className='font-semibold mt-1 text-sm'>
                    <i className='fa-solid fa-trophy xl:text-sm'></i> Super
                    Agent
                  </p>
                </div>
                <div className='flex flex-1 flex-col justify-center'>
                  <div className='flex flex-col'>
                    <p className='font-bold text-xl'>3</p>
                    <p className='text-xs pb-3 xl:text-[14px]'>
                      Years as a Manager
                    </p>
                    <div className='border-b border-black/[.3]'></div>
                  </div>
                </div>
              </div>

              {/* Rest of Body */}
              <div className='mx-6 my-10 pb-8 text-[#222222] border-b border-black/[.3]'>
                <div className='flex items-center'>
                  <i className='fa-solid fa-briefcase text-lg xl:text-base'></i>
                  <p className='ml-4 font-semibold xl:text-sm'>
                    My Work: {occupation}
                  </p>
                </div>
                <div className='flex mt-3 items-center'>
                  <i className='fa-solid fa-location-dot text-lg xl:text-base'></i>
                  <p className='ml-4 font-semibold xl:text-sm'>
                    Lives in {location}
                  </p>
                </div>
              </div>
              <div className='mx-6 mb-5 pb-8 text-[22px] xl:text-[20px] font-semibold border-b border-black/[.3]'>
                <p>Ryan Njoroge's Confirmed information</p>
                {confirmedInfo.map((info, index) => (
                  <div
                    className='flex font-normal text-base items-center mt-4'
                    key={index}
                  >
                    <i className='fa-solid fa-check mr-3'></i>
                    <p className='xl:text-sm'>{info}</p>
                  </div>
                ))}
              </div>
              <div className='mx-6 mb-6 flex items-center font-semibold text-black cursor-pointer'>
                <i className='fa-solid fa-flag xl:text-sm'></i>
                <p className='underline ml-3 xl:text-sm'>Report this profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileModal;
