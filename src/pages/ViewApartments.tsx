import { useContext, useEffect, useMemo, useState } from 'react';
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
import { ModalContext } from '@/context/modalContext';
const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [showStickySearchBar, setShowStickySearchBar] = useState(false);
  const [showStickyFilterBar, setShowStickyFilterBar] = useState(false);
  // Show FilterBackdrop for the apartment modals at 1024px view
  const [showFilterBackdrop, setShowFilterBackdrop] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);
  const [showFilterScrollbar, setShowFilterScrollbar] = useState(false);
  const [showFilterBtn, setShowFilterBtn] = useState(false);

  const { hideMenu, setHideMenu } = useContext(ModalContext);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setHideMenu(true);
      return;
    }
    setHideMenu(false);
  }, [setHideMenu]);

  useEffect(() => {
    // Stop outside scrolling when any of the following modals are open.
    if (showSearhBar || showFilters) {
      document.body.classList.add('body-style');
      setHideMenu(true);
      return;
    }

    // Hide the popup menu on larger screens.
    if (window.innerWidth <= 768) {
      setHideMenu(false);
    }
    document.body.classList.remove('body-style');
  }, [showSearhBar, showFilters, setHideMenu]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 21) {
        // When on larger screens show the filter button.
        // Else show the FilterScrollbar.
        if (window.innerWidth >= 1024) {
          setShowFilterBtn(true);
        } else {
          setShowStickyFilterBar(true);
        }
        setShowStickySearchBar(true);
        return;
      }
      setShowStickySearchBar(false);
      setShowStickyFilterBar(false);
      setShowFilterBtn(false);
    });
  }, []);

  // Hide the filter scrollbar when any of the modals are open.
  useMemo(() => {
    if (showSearhBar || showFilters || showFilterBackdrop) {
      setShowFilterScrollbar(true);
    } else {
      setShowFilterScrollbar(false);
    }
  }, [showSearhBar, showFilters, showFilterBackdrop]);

  const { topFunction } = useBackToTop();

  const handleFilters = () => {
    setshowFilters(true);
    topFunction();
  };

  const handleSearchBar = () => {
    setshowSearhBar(true);
    topFunction();
  };

  const handleShowFilters = () => {
    setShowFilterBtn(false);
    setShowStickyFilterBar(true);
  };

  return (
    <section className='apartments-page w-full h-full pt-5 text-black'>
      {/* The following is meant to make it easier to give the sticky header a max-width of 1500px */}
      <div
        className={`w-full ${
          showStickySearchBar
            ? 'fixed top-0 2xl:flex 2xl:justify-center z-10 h-[105px] bg-[#141b1f]'
            : ''
        }`}
      >
        <Navbar
          search={search}
          showStickyHeader={showStickySearchBar}
          handleFilters={handleFilters}
          handleSearchBar={handleSearchBar}
        />
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
      <div className={`text-white ${showFilters ? 'overflow-y-hidden' : ''}`}>
        {/* Show FilterBackdrop for the apartment modals at 1024px view */}
        {showFilterBackdrop && window.innerWidth >= 1024 ? (
          <FilterBackdrop show={true} />
        ) : null}
        {/* When a user is scrolling hide the FilterScrollbar and show a button instead, this is done to save space on the screen */}
        {showFilterBtn ? (
          <button
            className='fixed top-[100px] xl:top-[110px] left-[50%] translate-x-[-50%] py-3.5 px-5 2xl:py-2.5 2xl:px-4 2xl:text-xs rounded-full text-sm h-auto z-10 bg-[#141b1f] transition-all ease-in-out duration-[1.5s]'
            onClick={() => handleShowFilters()}
          >
            Show Filters
          </button>
        ) : null}
        {/* When a user is on smaller screen(640px to 767px), hide the FilterScrollBar when there's some search text */}
        {/* But when a user is on a larger screen(768px and above), show the FilterScrollBar whether there's some search text or not.   */}{' '}
        {window.innerWidth >= 768 || !search.length ? (
          <FilterScrollbar
            search={search}
            showFilters={
              window.innerWidth >= 1024 ? showFilterScrollbar : showFilters
            }
            handleFilters={handleFilters}
            showStickyHeader={showStickyFilterBar}
          />
        ) : null}
        <div className='w-full lg:flex lg:mx-2 2xl:max-w-[1500px] 3xl:max-w-[1700px] 2xl:mx-auto'>
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
    </section>
  );
};

export default ViewApartmentsPage;
