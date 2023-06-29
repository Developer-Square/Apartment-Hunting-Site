import { useState } from 'react';
import { SearchBar } from '../components';

const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);

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
        {/* <input
          type='text'
          placeholder='Search location...'
          className='cursor-pointer bg-transparent px-2 text-black outline-none border-none w-60 h-full'
        /> */}
        <div className='rounded-full h-7 w-7 border border-black flex items-center justify-center cursor-pointer ml-auto mr-2.5'>
          <i className='fa-solid fa-sliders text-black p-3'></i>
        </div>
      </div>
      <SearchBar show={showSearhBar} setShow={setshowSearhBar} />
    </section>
  );
};

export default ViewApartmentsPage;
