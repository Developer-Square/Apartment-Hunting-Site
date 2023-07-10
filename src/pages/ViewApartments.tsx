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

  return (
    <section className='apartments-page w-full h-full pt-5 text-black'>
      <div className='w-full md:w-[92%] mb-4 sm:mb-6 md:mx-auto md:flex items-center justify-between'>
        <div className=' bg-white relative xm:w-[360px] xm:h-14 sm:w-[92%] w-80 h-12 md:w-[80%] md:mx-0 md:h-11 mx-auto rounded-3xl xm:rounded-[32px] flex items-center'>
          <i className='fa-solid fa-magnifying-glass text-black sm:text-lg pl-4'></i>
          <div
            className='flex flex-col pl-4 cursor-pointer'
            onClick={() => setshowSearhBar(true)}
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
            onClick={() => setshowFilters(true)}
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
          {!search.length ? <FilterScrollbar /> : null}
          {search.length ? <Map /> : null}
          <Apartments search={search} />
          {!hideMenu && <PopupMenu />}
          <Footer />
        </div>
      ) : null}
    </section>
  );
};

export default ViewApartmentsPage;
