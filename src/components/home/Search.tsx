import { useState } from 'react';

const InputRange = ({
  text,
  placeholder,
  value,
  setValue,
}: {
  text: string;
  placeholder: string;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => (
  <div>
    <span className='text-sm xl:text-xs mt-2 ml-2'>{text}</span>
    <div className='flex items-center ml-2'>
      <span className='text-[#18AB18] text-base xl:text-sm font-semibold'>
        Ksh
      </span>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder={placeholder}
        className='w-full xl:text-sm h-[40px] p-0 border-none focus:ring-0 outline-none ml-2 bg-transparent'
      />
    </div>
  </div>
);

const Search = () => {
  const [location, setlocation] = useState('');
  const [error, seterror] = useState('');
  const [lowerRange, setlowerRange] = useState(10000);
  const [upperRange, setupperRange] = useState(100000);

  const handleNavigate = () => {
    window.open('/apartments', '_blank');
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (location === '') {
      seterror('Please enter a location');
      return;
    }

    handleNavigate();
  };

  return (
    <div className='absolute rounded-l-[10px] top-8 2xl:top-12 left-12 2xl:left-16 rounded-b-[10px] w-[377px] xl:w-[470px] 2xl:w-[529px] h-auto bg-white text-black'>
      <div className='relative flex flex-col items-center px-10 pt-20 pb-10'>
        <h3 className='text-4xl font-semibold w-[260px] xl:w-[360px] mr-auto'>
          House rentals with pools in Kenya
        </h3>
        <p className='font-medium xl:text-sm w-[290px] xl:w-[397px] xl:pl-3 mt-3 2xl:pl-0 2xl:mr-auto'>
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
            className='w-full xl:text-sm mt-6 text-white h-12 cursor-pointer rounded-[8px] bg-[#1C323F] font-semibold'
            onClick={(e) => handleSubmit(e)}
          >
            Search
            <i className='fa-solid fa-house-chimney ml-1.5'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
