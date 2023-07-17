import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const [isLargerScreen, setIsLargerScreen] = useState(false);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected + 1 * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    setActivePage(event.selected + 1);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargerScreen(true);
    }
  }, []);
  return (
    <div>
      {!isLargerScreen ? (
        <div className='flex w-[65%] justify-between mx-auto items-center'>
          <div className='py-3 px-5 rounded-full shadow-md shadow-white/[.5] cursor-pointer'>
            <i className='fa-solid fa-angle-left'></i>
          </div>
          <div className='py-3 px-5 rounded-full shadow-md shadow-white/[.5] cursor-pointer'>
            <i className='fa-solid fa-angle-right'></i>
          </div>
        </div>
      ) : (
        <div className='join lg:mt-5 w-full flex justify-center items-center text-white'>
          <ReactPaginate
            breakLabel='...'
            nextLabel={
              <button>
                <i className='fa-solid fa-angle-right ml-2'></i>
              </button>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={
              <button>
                <i className='fa-solid fa-angle-left mr-2'></i>
              </button>
            }
            renderOnZeroPageCount={null}
            activeClassName={`bg-white text-black ${
              activePage > 9 ? 'px-2' : 'px-3'
            } py-1 xl:py-1.5 rounded-full`}
            className='flex justify-center items-center gap-5 xl:text-xs'
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
