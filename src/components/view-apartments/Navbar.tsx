import { NavBarMenu } from './Helpers';

const Navbar = ({
  search,
  handleSearchBar,
  handleFilters,
}: {
  search: string;
  handleSearchBar: () => void;
  handleFilters: () => void;
}) => {
  
  return (
    <div
      className={`w-full md:w-[92%] 2xl:max-w-[1500px] 3xl:max-w-[1700px] mb-4 sm:mb-6 xl:mb-1 md:mx-auto md:flex items-center justify-center pt-1`}
    >
      <div className=' bg-white relative mt-2 xm:w-[360px] xm:h-14 sm:w-[92%] w-80 h-[48px] md:w-[50%] lg:w-[40%] xl:h-[58px] md:mx-auto md:h-[48px] mx-auto rounded-3xl xm:rounded-[32px] flex items-center'>
        <i className='fa-solid fa-magnifying-glass text-black sm:text-lg xl:text-base pl-4'></i>
        <div
          className='flex flex-col w-full pl-4 cursor-pointer'
          onClick={() => handleSearchBar()}
        >
          <p className='text-sm sm:text-base md:text-sm xl:text-xs font-bold'>
            {search.length ? search : 'Search location...'}
          </p>
          <p className='text-xs sm:text-sm md:text-xs xl:text-[15px] text-gray-500'>
            Click here
          </p>
        </div>
        <div
          className='rounded-full md:hidden h-7 w-7 border border-black flex items-center justify-center cursor-pointer ml-auto mr-2.5'
          onClick={() => handleFilters()}
        >
          <i className='fa-solid fa-sliders text-black sm:text-lg p-3'></i>
        </div>
      </div>
      <NavBarMenu />
    </div>
  );
};

export default Navbar;
