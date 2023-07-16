import { NavBarMenu } from './Helpers';

const Navbar = ({
  search,
  showStickyHeader,
  handleSearchBar,
  handleFilters,
}: {
  search: string;
  showStickyHeader: boolean;
  handleSearchBar: () => void;
  handleFilters: () => void;
}) => {
  return (
    <div
      id='sticky-header'
      className={`w-full md:w-[92%] mb-4 sm:mb-6 md:mx-auto md:flex items-center justify-center ${
        showStickyHeader
          ? 'fixed top-0 z-10 bg-[#141b1f] xm:py-3 py-4 md:w-full'
          : ''
      }`}
    >
      <div className=' bg-white relative xm:w-[360px] xm:h-14 sm:w-[92%] w-80 h-[48px] md:w-[50%] lg:w-[40%] md:mx-auto md:h-[48px] mx-auto rounded-3xl xm:rounded-[32px] flex items-center'>
        <i className='fa-solid fa-magnifying-glass text-black sm:text-lg pl-4'></i>
        <div
          className='flex flex-col w-full pl-4 cursor-pointer'
          onClick={() => handleSearchBar()}
        >
          <p className='text-sm sm:text-base md:text-sm font-bold'>
            {search.length ? search : 'Search location...'}
          </p>
          <p className='text-xs sm:text-sm md:text-xs text-gray-500'>
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
