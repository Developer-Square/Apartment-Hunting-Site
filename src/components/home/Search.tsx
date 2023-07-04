import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <span className='text-sm mt-2 ml-2'>{text}</span>
    <div className='flex items-center ml-2'>
      <span className='text-[#18AB18] text-base font-semibold'>Ksh</span>
      <input
        type='number'
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder={placeholder}
        className='w-full h-[44px] p-0 border-none outline-none ml-2 bg-transparent'
      />
    </div>
  </div>
);

const Search = () => {
  const [location, setlocation] = useState('');
  const [error, seterror] = useState('');
  const [lowerRange, setlowerRange] = useState(1000);
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
    <div className='absolute rounded-l-[10px] left-[4.4%] rounded-b-[10px] top-[6.62%] w-[377px] xl:w-[470px] h-[697px] xl:h-[871px] 2xl:w-[529px] 2xl:h-[981px] bg-white text-black'>
      <div className='relative flex flex-col items-center pl-10 pt-[40%] 2xl:pt-[35%] pr-9'>
        <h3 className='text-4xl font-semibold w-[260px] xl:w-[360px] mr-auto'>
          House rentals with pools in Kenya
        </h3>
        <p className='font-medium w-[290px] xl:w-[397px] xl:pl-3 mt-3 2xl:pl-0 2xl:mr-auto'>
          Book unique houses,vacation rentals and more on tecHive
        </p>
        <form>
          <div
            className={`${
              error.length ? 'border-red-600' : 'border-black'
            } mt-6 border-2 rounded-[10px] w-full h-[75px]`}
          >
            <span
              className={`text-sm ${
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
              className='w-full h-[44px] shadow-transparent p-0 border-transparent !outline-none border-none ml-2 bg-transparent'
            />
          </div>
          <span className='text-xs my-2 text-red-600'>{error}</span>

          <p className='w-full mt-2 mb-1'>Price range</p>
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
            className='w-full mt-6 text-white h-12 cursor-pointer rounded-[8px] bg-[#1C323F] font-semibold'
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
