import { SetStateAction, useState } from 'react';
import { InputRange } from './Search';
import { useNavigate } from 'react-router-dom';

export const SearchApartmentModal = ({
  setSearchApartmentModal,
}: {
  setSearchApartmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [location, setlocation] = useState('');
  const [error, seterror] = useState('');
  const [lowerRange, setlowerRange] = useState(10000);
  const [upperRange, setupperRange] = useState(100000);

  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (location === '') {
      seterror('Please enter a location');
      return;
    }

    navigate('/apartments');
  };

  return (
    <div className='justify-center items-end md:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-black'>
      <div className='relative h-[90%] w-full md:h-[85%] md:w-[80%] lg:w-[568px] mt-6 md:mt-0 mx-auto'>
        {/*content*/}
        <div className='border-0 rounded-t-xl h-full md:rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
          {/*header*/}
          <div className='flex items-center w-full h-12 px-6'>
            <i
              className='fa-solid fa-chevron-left text-lg cursor-pointer'
              onClick={() => {
                setSearchApartmentModal(false);
              }}
            ></i>
          </div>
          {/*body*/}
          <div className='max-h-[100vh] overflow-y-scroll text-base px-6'>
            <h1 className='text-left mt-4 mb-7 xl:mb-4 text-3xl font-bold xl:text-base'>
              House rentals with pools in Kenya
            </h1>
            <p className='font-medium xl:text-sm'>
              Book unique houses,vacation rentals and more on tecHive
            </p>
            <form>
              <div
                className={`${
                  error.length ? 'border-red-600' : 'border-black'
                } mt-6 border-2 rounded-[10px] w-full h-[75px]`}
              >
                <span
                  className={`text-sm xl:text-xs ${
                    error.length ? 'text-red-600' : ''
                  } mt-2 ml-2`}
                >
                  Location
                </span>
                <input
                  required
                  type='text'
                  value={location}
                  onChange={(e) => {
                    seterror(''), setlocation(e.target.value);
                  }}
                  placeholder='Anywhere'
                  className='w-full h-[40px] xl:text-sm shadow-transparent p-0 border-transparent focus:ring-0 !outline-none border-none ml-2 bg-transparent'
                />
              </div>
              <span className='text-xs my-2 text-red-600'>{error}</span>

              <p className='w-full xl:text-sm mt-2 mb-1'>Price range</p>
              <div className='border-black border-2 rounded-[10px] w-full h-[75px] flex'>
                <InputRange
                  text='lowest price'
                  value={lowerRange}
                  setValue={setlowerRange}
                  placeholder='0'
                />
                <div className='h-[80%] w-1 my-2 mx-3 bg-black'></div>
                <InputRange
                  text='highest price'
                  value={upperRange}
                  setValue={setupperRange}
                  placeholder='100000'
                />
              </div>
              <button
                type='submit'
                className='w-full xl:text-sm mt-10 text-white h-12 cursor-pointer rounded-[8px] bg-[#1C323F] font-semibold'
                onClick={(e) => handleSubmit(e)}
              >
                Search
                <i className='fa-solid fa-house-chimney ml-1.5'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
