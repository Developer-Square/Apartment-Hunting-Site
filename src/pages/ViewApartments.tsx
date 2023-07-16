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
import { useBackToTop } from 'src/hooks/useBackToTop';
import Navbar from '@/components/view-apartments/Navbar';
const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [hideMenu, setHideMenu] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [setshowRestOfPage, setSetshowRestOfPage] = useState(true);
  // Show FilterBackdrop for the apartment modals at 1024px view
  const [showFilterBackdrop, setShowFilterBackdrop] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);

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

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 21) {
        setShowStickyHeader(true);
        return;
      }
      setShowStickyHeader(false);
    });
  }, [showStickyHeader]);

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
      <Navbar
        search={search}
        showStickyHeader={showStickyHeader}
        handleFilters={handleFilters}
        handleSearchBar={handleSearchBar}
      />
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
          {/* Show FilterBackdrop for the apartment modals at 1024px view */}
          {showFilterBackdrop && window.innerWidth >= 1024 ? (
            <FilterBackdrop show={true} />
          ) : null}
          {/* When a user is on smaller screen(640px to 767px), hide the FilterScrollBar when there's some search text */}
          {/* But when a user is on a larger screen(768px and above), show the
          FilterScrollBar whether there's some search text or not.   */}{' '}
          {window.innerWidth >= 768 || !search.length ? (
            <FilterScrollbar
              search={search}
              showFilters={showFilters || showFilterBackdrop}
              handleFilters={handleFilters}
              showStickyHeader={showStickyHeader}
            />
          ) : null}
          <div className='w-full lg:flex lg:mx-2'>
            {search.length ? (
              <Map showFullMap={showFullMap} setShowFullMap={setShowFullMap} />
            ) : null}
            {!showFullMap ? (
              <Apartments
                search={search}
                setShowFilterBackdrop={setShowFilterBackdrop}
              />
            ) : null}
          </div>
          {!hideMenu && <PopupMenu />}
          <Footer />
        </div>
      ) : null}
    </section>
  );
};

export default ViewApartmentsPage;
