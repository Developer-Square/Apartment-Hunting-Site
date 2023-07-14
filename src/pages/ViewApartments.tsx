import { useEffect, useState } from 'react';
import {
  Apartments,
  FilterBackdrop,
  Filters,
  SearchBar,
  Map,
  Footer,
  PopupMenu,
  FilterScrollbar,
} from '../components';
import { NavBarMenu } from '@/components/view-apartments/Helpers';
import { useScrollDirection } from 'src/hooks/useScrollDirection';
import { useBackToTop } from 'src/hooks/useBackToTop';
const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [hideMenu, setHideMenu] = useState(false);
  const [setshowRestOfPage, setSetshowRestOfPage] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setHideMenu(true);
    }

    if (showSearhBar || showFilters) {
      if (window.innerWidth < 768) {
        setSetshowRestOfPage(false);
        return;
      }
    }
    setSetshowRestOfPage(true);
  }, [showSearhBar, showFilters]);

  const scrollDirection = useScrollDirection();
  const { topFunction } = useBackToTop();

  const handleFilters = () => {
    setshowFilters(true);
    topFunction();
  };

  const handleSearchBar = () => {
    setshowSearhBar(true);
    topFunction();
  };

  return (
    <section className='apartments-page w-full h-full pt-5 text-black'>
      <div
        className={`w-full md:w-[92%] mb-4 sm:mb-6 md:mx-auto md:flex items-center justify-center ${
          scrollDirection === 'down'
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
      {/* Hide the SearchBar and Filters components when the other is open */}
      {showSearhBar && (
        <>
          <FilterBackdrop show={showSearhBar} />
          <SearchBar
            show={showSearhBar}
            setShow={setshowSearhBar}
            search={search}
            setSearch={setSearch}
          />
        </>
      )}
      {showFilters && (
        <>
          <FilterBackdrop show={showFilters} />
          <Filters show={showFilters} setShow={setshowFilters} />
        </>
      )}
      {/* Hide other components when the SearchBar or Filters is open while on tablet and mobile screens, to reduce the height of the page */}
      {setshowRestOfPage ? (
        <div className='text-white'>
          {/* When a user is on smaller screen(640px to 767px), hide the FilterScrollBar when there's some search text */}
          {/* But when a user is on a larger screen(768px and above), show the
          FilterScrollBar whether there's some search text or not.   */}{' '}
          {window.innerWidth >= 768 || !search.length ? (
            <FilterScrollbar
              search={search}
              showFilters={showFilters}
              handleFilters={handleFilters}
            />
          ) : null}
          <div className='w-full lg:flex gap-1 mx-2'>
            {search.length ? <Map /> : null}
            <Apartments search={search} />
          </div>
          {!hideMenu && <PopupMenu />}
          <Footer />
        </div>
      ) : null}
    </section>
  );
};

export default ViewApartmentsPage;
