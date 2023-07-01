import { useState } from 'react';
import { FilterBackdrop, Filters, SearchBar } from '../components';

const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);

  return (
    <section className='apartments-page w-full h-full mb-5 text-black'>
      <div className=' bg-white relative w-80 h-12 mx-auto rounded-3xl mb-5 flex items-center'>
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
      {!showFilters && (
        <SearchBar show={showSearhBar} setShow={setshowSearhBar} />
      )}
      {!showSearhBar && (
        <>
          <FilterBackdrop show={showFilters} />
          <Filters show={showFilters} setShow={setshowFilters} />
        </>
      )}
    </section>
  );
};

export default ViewApartmentsPage;
