import { IAmenitiesProps } from '@/pages/ViewApartmentDetail';
import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewApartments2 from '@/assets/view-apartments/view-apartments-2.webp';

export const AboutApartmentModal = ({
  setAboutApartmentModal,
}: {
  setAboutApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:max-w-[768px] mt-6 md:mt-0 mx-auto'>
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
            <h1 className='text-left mt-4 mb-7 xl:mb-4 text-2xl font-bold xl:text-base'>
              About this apartment
            </h1>
            <p className='xl:text-sm'>
              Centrally located at the heart of Kilimani, a few minutes walk or
              drive to major shopping center's( Yahya, Junction Mall), famous
              eateries and the main landmarks of Nairobi, is the The View at
              Heartland. This apartment combines modern finishes with tastefully
              curated design, set on a high floor with Nice-views overlooking
              the wider Kilimani and Westland's areas. Guests have access to
              reliable WIFI, parking, and a well equipped gym
            </p>
            <h2 className='font-semibold mt-6 text-lg xl:text-base'>
              The apartment
            </h2>
            <p className='xl:text-sm'>
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
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:max-w-[768px] mt-6 md:mt-0 mx-auto'>
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
            <h1 className='text-left mt-4 mb-7 text-2xl font-bold xl:text-base'>
              What this place offers
            </h1>
            {amenities.map((amenity, index) => (
              <div className='mb-10' key={index}>
                <h4 className='font-semibold mt-6 mb-4 xl:text-base'>
                  {amenity.title}
                </h4>
                {amenity.available.map((available, index) => (
                  <div
                    className='flex items-center py-5 border-b border-black/[.1]'
                    key={index}
                  >
                    <i className={`${available.icon}`}></i>
                    <p className='xl:text-sm'>{available.text}</p>
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
      <div className='relative h-full w-full md:h-[90%] md:w-[90%] lg:w-[80%] xl:w-[60%] 2xl:max-w-[768px] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12 px-6 '>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setReportApartmentModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base'>
            <h1 className='text-left xl:text-lg px-6 mt-2 mb-5 text-2xl font-bold '>
              Report Policy
            </h1>
            <p className='xl:text-sm px-6'>
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

            <p className='mb-1 xl:text-sm px-6'>
              Tell us what happened(optional):
            </p>
            <textarea
              placeholder='What is the issue?'
              className='textarea textarea-bordered mx-6 textarea-md w-full max-w-xs bg-transparent focus:ring-0'
            ></textarea>
            <p
              className='underline text-sm cursor-pointer text-red-500 mt-7 text-center'
              onClick={() => navigate('/help')}
            >
              Safety tips
            </p>
            <button className='bg-red-600 mt-3 xl:mb-5 mx-4 sm:mx-8 xl:mx-6 w-[90%] h-12 text-white rounded-md xl:text-sm'>
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
  const [cleanedInfo, setCleanedInfo] = useState({title: '', subtitle: ''});

  const paymentOptions = [
    {
      name: 'Credit or Debit card',
      icon: (
        <i className='fa-regular text-xl text-black/[.5] fa-credit-card mr-3'></i>
      ),
    },
    {
      name: 'Paypal',
      icon: (
        <i className='fa-brands fa-paypal text-xl text-black/[.5] mr-3'></i>
      ),
    },
    {
      name: 'Google pay',
      icon: (
        <i className='fa-brands fa-google-pay text-xl text-black/[.5] mr-3'></i>
      ),
    },
  ];

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
            {/* Trip Details */}
            <div className='my-6 '>
              <h2 className='text-xl mb-6 font-semibold'>Your Visit</h2>
              <div className='flex w-full justify-between mb-6'>
                <div className='flex flex-col'>
                  <p className='font-semibold text-sm mb-1'>Visit date</p>
                  <p>Aug 14</p>
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
            {/* Price Details */}
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
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            {/* Payment options */}
            <div className='my-6'>
              <p className='text-xl mb-4'>Pay with:</p>
              {paymentOptions.map((option, index) => (
                <div
                  key={index}
                  className='flex items-center mb-4 cursor-pointer'
                >
                  {option.icon}
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            {/* Requirements */}
            <div className='my-6'>
              <p className='text-xl mb-4'>Required for your visit</p>
              <div className='flex items-center'>
                <div className='flex flex-col mr-4'>
                  <p className='font-semibold'>Phone number</p>
                  <p>Add and confirm your phone number to get visit updates</p>
                </div>
                <button className='border border-black py-2 rounded-lg px-3.5 font-semibold'>
                  Add
                </button>
              </div>
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            {/* Cancellation policy */}
            <div className='my-6'>
              <h3 className='text-xl font-semibold mb-4'>
                Cancellation Policy
              </h3>
              <p>
                This booking is non-refundable.
                <span className='underline ml-1 cursor-pointer underline-offset-2 font-semibold'>
                  Learn more
                </span>
              </p>
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
            {/* Cancellation policy */}
            <div className='my-6'>
              <h3 className='text-xl font-semibold mb-4'>Ground rules</h3>
              <p>
                We ask every guest to remember a few simple things about what
                makes a great guest.
              </p>
              <ul className='mt-3 list-disc px-6'>
                <li>Follow the house rules</li>
                <li>Treat your Host’s home like your own</li>
              </ul>
            </div>
            <div className='border-b border-[1px] border-[black]/[.9]'></div>
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

export const ShareApartmentModal = ({
  setShareApartmentModal,
}: {
  setShareApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    {
      icon: <i className='fa-regular mr-4 fa-copy text-xl xl:text-base'></i>,
      name: 'Copy link',
    },
    {
      icon: (
        <i className='fa-regular mr-4 fa-envelope text-xl xl:text-base'></i>
      ),
      name: 'Email',
    },
    {
      icon: (
        <i className='fa-brands mr-4 fa-instagram text-[#FF3040] text-xl xl:text-base'></i>
      ),
      name: 'Instagram',
    },
    {
      icon: (
        <i className='fa-brands mr-4 fa-facebook text-[#3f47e9] text-xl xl:text-base'></i>
      ),
      name: 'Facebook',
    },
    {
      icon: (
        <i className='fa-brands mr-4 fa-facebook-messenger text-[#3f47e9] text-xl xl:text-base'></i>
      ),
      name: 'Messenger',
    },
    {
      icon: (
        <i className='fa-brands mr-4 fa-whatsapp text-[#3ae646] text-xl xl:text-base'></i>
      ),
      name: 'Whatsapp',
    },
    {
      icon: (
        <i className='fa-brands mr-4 fa-x-twitter text-xl xl:text-base'></i>
      ),
      name: 'Twitter',
    },
    {
      icon: <i className='fa-solid mr-4 fa-code text-xl xl:text-base'></i>,
      name: 'Embed',
    },
  ];

  useEffect(() => {
    if (window.innerWidth > 450) {
      setIsMobile(true);
    }
  }, []);

  const shortenLinkName = (name: string) => {
    return name.length > 6 ? name.slice(0, 6) + '...' : name;
  };

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-[80%] w-full md:h-[85%] md:w-[80%] lg:w-[568px] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 rounded-t-xl h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12 px-6'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setShareApartmentModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base'>
            <h1 className='text-left mt-4 mb-7 px-6 xl:mb-4 text-2xl font-bold xl:text-base'>
              Share this apartment
            </h1>
            <div className='mt-4 mb-6 flex px-6'>
              <img
                src={ViewApartments2}
                alt='apartment'
                className='w-20 h-20 xl:w-16 xl:h-16 mr-4 rounded-lg'
              />
              <div className='mt-2 sm:mt-0 sm:ml-4 xl:ml-0'>
                <p className='text-base xl:text-sm'>Haven woods apartments</p>
                <p className='text-sm xl:text-xs text-[#717171]'>
                  Nairobi apartment with 3 bedrooms
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-5 px-6'>
              {links.map((link, index) => (
                <div
                  key={index}
                  className='border cursor-pointer flex items-center border-black/[.2] py-5 px-4 xl:py-3 xl:px-3 xl:mb-0 mb-2 rounded-xl'
                >
                  {link.icon}
                  <p className='xl:text-sm'>
                    {!isMobile ? shortenLinkName(link.name) : link.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ConfirmAndPayModal = ({
  setConfirmAndPayModal,
}: {
  setConfirmAndPayModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [cleanedInfo, setCleanedInfo] = useState({title: '', subtitle: ''});

  useEffect(() => {
    const info = localStorage.getItem('apartmentInfo');
    const cleanedInfo = info ? JSON.parse(info) : null;
    setCleanedInfo(cleanedInfo);
  }, []);

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-full w-full mx-auto'>
        {/*content*/}
        <div className='border-0 h-full shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-16 px-6 my-3 2xl:max-w-[1280px] 2xl:mx-auto'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setConfirmAndPayModal(false);
              }}
            ></i>
            <h4 className='font-semibold w-full text-center'>
              Confirm and Pay
            </h4>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll px-6 text-base md:grid grid-cols-2 gap-10 lg:gap-16 2xl:max-w-[1280px] 2xl:mx-auto 2xl:px-0'>
            <div>
              {/* Trip Details */}
              <div className='my-6'>
                <h2 className='text-xl xl:text-lg mb-6 font-semibold'>
                  Your Visit
                </h2>
                <div className='flex w-full justify-between mb-6'>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-sm xl:text-xs mb-1'>
                      Visit date
                    </p>
                    <p className='xl:text-sm'>Aug 14</p>
                  </div>
                  <p className='font-semibold text-sm xl:text-xs underline'>
                    Edit
                  </p>
                </div>
                <div className='flex w-full justify-between mb-6'>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-sm xl:text-xs mb-1'>
                      Guests
                    </p>
                    <p className='xl:text-sm'>1 guest</p>
                  </div>
                  <p className='font-semibold text-sm xl:text-xs underline'>
                    Edit
                  </p>
                </div>
              </div>
              {/* Payment options */}
              <div className='border-b border-[1px] border-[black]/[.9]'></div>
              <div className='my-6'>
                <h4 className='font-semibold text-xl xl:text-lg'>Pay with</h4>
                <div className='flex mb-4'>
                  <i className='fa-brands text-xl mr-3 fa-cc-visa'></i>
                  <i className='fa-brands text-xl mr-3 fa-cc-mastercard'></i>
                  <i className='fa-brands text-xl mr-3 fa-cc-paypal'></i>
                  <i className='fa-brands text-xl mr-3 fa-google-pay'></i>
                </div>
                <select className='select mb-4 select-bordered border border-black/[.5] focus:border-black focus:outline-none focus:ring-0 bg-transparent w-full'>
                  <option selected className='font-normal xl:text-sm'>
                    Credit or Debit card
                  </option>
                  <option className='font-normal xl:text-sm'>Paypal</option>
                  <option className='font-normal xl:text-sm'>Google Pay</option>
                </select>
                <input
                  type='text'
                  placeholder='4352 3534 3532 2431'
                  className='border border-black/[.5] h-14 rounded-t-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                />
                <div className='flex'>
                  <input
                    type='text'
                    placeholder='MM/YY'
                    className='border border-black/[.5] h-14 rounded-bl-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                  />
                  <input
                    type='text'
                    placeholder='CVV'
                    className='border border-black/[.5] h-14 rounded-br-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                  />
                </div>
                <h4 className='my-3 font-semibold'>Billing address</h4>
                <input
                  type='text'
                  placeholder='Street address'
                  className='border border-black/[.5] h-14 rounded-t-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                />
                <input
                  type='text'
                  placeholder='Apt or suite number'
                  className='border border-black/[.5] h-14 focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                />
                <input
                  type='text'
                  placeholder='City'
                  className='border border-black/[.5] h-14 focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                />
                <div className='flex'>
                  <input
                    type='text'
                    placeholder='State'
                    className='border border-black/[.5] h-14 rounded-bl-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                  />
                  <input
                    type='text'
                    placeholder='ZIP code'
                    className='border border-black/[.5] h-14 rounded-br-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Country/Region'
                  className='border border-black/[.5] h-14 my-4 rounded-lg focus:border-black focus:outline-none focus:ring-0 w-full xl:text-sm'
                />
              </div>
              <div className='border-b border-[1px] border-[black]/[.9]'></div>
              {/* Requirements */}
              <div className='my-6'>
                <p className='text-xl xl:text-lg font-semibold mb-4'>
                  Required for your visit
                </p>
                <div className='flex items-center'>
                  <div className='flex flex-col mr-4'>
                    <p className='font-semibold xl:text-sm'>Phone number</p>
                    <p className='xl:text-sm'>
                      Add and confirm your phone number to get visit updates
                    </p>
                  </div>
                  <button className='border border-black py-2 rounded-lg px-3.5 font-semibold xl:text-sm'>
                    Add
                  </button>
                </div>
              </div>
              <div className='border-b border-[1px] border-[black]/[.9]'></div>
              {/* Cancellation policy */}
              <div className='my-6'>
                <h3 className='text-xl xl:text-lg font-semibold mb-4'>
                  Cancellation Policy
                </h3>
                <p className='xl:text-sm'>
                  This booking is non-refundable.
                  <span className='underline ml-1 cursor-pointer underline-offset-2 font-semibold'>
                    Learn more
                  </span>
                </p>
              </div>
              <div className='border-b border-[1px] border-[black]/[.9]'></div>
              {/* Ground rules */}
              <div className='my-6'>
                <h3 className='text-xl xl:text-lg font-semibold mb-4'>
                  Ground rules
                </h3>
                <p className='xl:text-sm'>
                  We ask every guest to remember a few simple things about what
                  makes a great guest.
                </p>
                <ul className='mt-3 xl:text-sm list-disc px-6'>
                  <li>Follow the house rules</li>
                  <li>Treat your Host’s home like your own</li>
                </ul>
              </div>
              <div className='border-b border-[1px] border-[black]/[.9]'></div>
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
            <div className='lg:w-[90%] xl:w-[85%] lg:mx-auto'>
              <div className='border border-black p-7 rounded-xl sticky top-0'>
                <div className='mt-4 mb-6 sm:flex'>
                  <img
                    src={ViewApartments2}
                    alt='apartment'
                    className='w-32 h-24 rounded-lg'
                  />
                  <div className='mt-2 sm:mt-0 sm:ml-4'>
                    <p className='text-sm'>{cleanedInfo.title}</p>
                    <p className='text-xs text-[#717171]'>
                      {cleanedInfo.subtitle}
                    </p>
                    <div className='flex items-center mt-0.5'>
                      <i className='fa-solid text-sm fa-award mr-1'></i>
                      <p className='text-xs text-[#717171] font-semibold'>
                        Super agent
                      </p>
                    </div>
                  </div>
                </div>
                <div className='border-b border-[1px] border-[black]/[.9]'></div>
                {/* Price Details */}
                <div className='my-6'>
                  <h2 className='text-xl xl:text-lg mb-6 font-semibold'>
                    Price details
                  </h2>
                  <div className='flex w-full justify-between mb-3 xl:text-sm'>
                    <p>Transport fee(Ksh 500 x 1)</p>
                    <p>Ksh 500</p>
                  </div>
                  <div className='flex w-full justify-between mb-3 xl:text-sm'>
                    <p>Food</p>
                    <p>Ksh 800</p>
                  </div>
                  <div className='flex w-full justify-between mt-5 xl:text-sm'>
                    <p className='underline font-semibold'>Total(Ksh)</p>
                    <p className='underline font-semibold'>Ksh 1300</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
