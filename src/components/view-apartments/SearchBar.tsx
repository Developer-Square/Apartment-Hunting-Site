import { SetStateAction, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const SearchBar = ({
  show,
  setShow,
  search,
  setSearch,
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
}) => {
  const props = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: show ? 0 : 100, opacity: show ? 1 : 0 },
  });
  const [largerScreen, setLargerScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setLargerScreen(true);
    }
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShow(false);
    }
  };

  return (
    <animated.div
      style={{
        position: 'absolute',
        top: show ? 0 : window.innerHeight,
        backgroundColor: '#FFFFFF',
        height: largerScreen ? '40%' : '100%',
        width: '100%',
        zIndex: '10',
        ...props,
      }}
    >
      <div className='mt-5 ml-5 flex max-w-[330px] xm:max-w-[360px]'>
        <div
          className='border border-black rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'
          onClick={() => setShow(false)}
        >
          <i className='fa-solid fa-arrow-left text-black p-2'></i>
        </div>
        <p className='font-bold text-lg text-center w-full'>Search Form</p>
      </div>
      <div className=' bg-[#EBEBEB] relative w-[92%] h-[60px] mt-7 mx-auto rounded-xl mb-5 flex items-center'>
        <i className='fa-solid fa-magnifying-glass text-black pl-4'></i>
        <input
          type='text'
          placeholder='Search locations...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(e) => handleSearch(e)}
          className='bg-transparent px-2 text-black outline-none border-none w-full h-full'
        />
      </div>
      <div className='mt-5 ml-5 sm:mx-auto w-full sm:w-[92%]'>
        <p className='text-sm font-bold'>Recent Searches</p>
        <div className='mt-3 flex cursor-pointer'>
          <div className='h-12 w-12 bg-[#EBEBEB] flex items-center justify-center rounded-xl'>
            <i className='fa-regular fa-clock text-[28px] text-black'></i>
          </div>
          <div className='flex flex-col ml-2'>
            <p>Nairobi</p>
            <p className='text-sm text-gray-500'>Kenya</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default SearchBar;
