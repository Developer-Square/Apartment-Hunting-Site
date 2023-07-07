import { useState } from 'react';
import {
  Apartments,
  FilterBackdrop,
  Filters,
  SearchBar,
  Map,
  Footer,
} from '../components';

const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  console.log(showSearhBar, showFilters);
  return (
    <section className='apartments-page w-full h-full mb-5 text-black'>
      <div className=' bg-white relative xm:w-[360px] xm:h-14 w-80 h-12 mx-auto rounded-3xl xm:rounded-[32px] my-4 flex items-center'>
        <i className='fa-solid fa-magnifying-glass text-black pl-4'></i>
        <div
          className='flex flex-col pl-4 cursor-pointer'
          onClick={() => setshowSearhBar(true)}
        >
          <p className='text-sm font-bold'>Search location...</p>
          <p className='text-xs text-gray-500'>Click here</p>
        </div>
        <div
          className='rounded-full h-7 w-7 border border-black flex items-center justify-center cursor-pointer ml-auto mr-2.5'
          onClick={() => setshowFilters(true)}
        >
          <i className='fa-solid fa-sliders text-black p-3'></i>
        </div>
      </div>
      {/* Hide the SearchBar and Filters components when the other is open */}
      {showSearhBar && (
        <SearchBar show={showSearhBar} setShow={setshowSearhBar} />
      )}
      {showFilters && (
        <>
          <FilterBackdrop show={showFilters} />
          <Filters show={showFilters} setShow={setshowFilters} />
        </>
      )}
      {/* Hide other components when the SearchBar or Filters is open, to reduce the height of the page */}
      {!showFilters && !showSearhBar ? (
        <div className='text-white'>
          <Map />
          <Apartments />
          <Footer />
        </div>
      ) : null}
    </section>
  );
};

export default ViewApartmentsPage;
