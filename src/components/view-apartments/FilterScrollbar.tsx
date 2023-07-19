import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const filters = [
  {
    icon: 'fa-solid fa-person-swimming text-[28px]',
    text: 'Pools',
  },
  {
    icon: 'fa-solid fa-couch text-[28px]',
    text: 'Furnished',
  },
  {
    icon: 'fa-solid fa-dumbbell text-[28px]',
    text: 'Gym',
  },
  {
    icon: 'fa-regular fa-building text-[28px]',
    text: 'Apartments',
  },
  {
    icon: 'fa-solid fa-hotel text-[28px]',
    text: 'Hotels',
  },
  {
    icon: 'fa-solid fa-warehouse text-[28px]',
    text: 'Townhouses',
  },
  {
    icon: 'fa-solid fa-square-parking text-[28px]',
    text: 'Parking',
  },
  {
    icon: 'fa-solid fa-wifi text-[28px]',
    text: 'Wifi',
  },
  {
    icon: 'fa-solid fa-socks text-[28px]',
    text: 'Laundry Wash',
  },
  {
    icon: 'fa-solid fa-bed text-[28px]',
    text: 'Ensuite',
  },
  {
    icon: 'fa-solid fa-bolt text-[28px]',
    text: 'Ev Charging',
  },
  {
    icon: 'fa-solid fa-bath text-[28px]',
    text: 'Hot Tub',
  },
];

const CustomFilter = ({
  homeFilter,
  setHomeFilter,
  setSelectedFilter,
}: {
  homeFilter: boolean;
  setHomeFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<Record<string, string>>
  >;
}) => {
  return (
    <div className='flex md:mb-3.5 lg:mb-0'>
      <div
        className={`${
          homeFilter ? 'text-[#f0efe9]' : 'text-[#f0efe9]/[.6]'
        } flex w-[100px] lg:w-[88px] flex-col items-center cursor-pointer`}
        onClick={() => {
          setSelectedFilter({
            icon: '',
            text: '',
          });
          setHomeFilter(true);
        }}
      >
        <i className='fa-solid fa-house text-[26px] mb-1'></i>
        <p
          className={`text-xs xl:text-[13px] pb-1 ${
            homeFilter ? 'border-b border-[#f0efe9]' : ''
          } tracking-wider font-semibold mt-0.5`}
        >
          Your Search
        </p>
      </div>
      <div className='border-r border-2 border-[#f0efe9]/[.8] h-14 xl:h-10 ml-4 lg:ml-7'></div>
    </div>
  );
};

const FilterScrollbar = ({
  search,
  showFilters,
  handleFilters,
  showStickyHeader,
}: {
  search: string;
  showFilters: boolean;
  handleFilters: () => void;
  showStickyHeader: boolean;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Record<string, string>>(
    filters[0]
  );
  const [homeFilter, setHomeFilter] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4.6);
  const [isLargerScreen, setIsLargerScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargerScreen(true);
      return;
    }
    setIsLargerScreen(false);
  }, []);

  useEffect(() => {
    if (search.length) {
      setSelectedFilter({
        icon: '',
        text: '',
      });
      setHomeFilter(true);
    }

    if (window.innerWidth >= 768) {
      setIsLargerScreen(true);
      return;
    }
    setIsLargerScreen(false);
  }, [search.length]);

  useEffect(() => {
    if (window.innerWidth >= 640 && window.innerWidth < 1023) {
      setSlidesPerView(6);
      return;
    }

    if (window.innerWidth >= 1024 && window.innerWidth < 1279) {
      setSlidesPerView(8);
      return;
    }

    if (window.innerWidth >= 1280 && window.innerWidth < 1535) {
      setSlidesPerView(9);
      return;
    }

    if (window.innerWidth >= 1536) {
      setSlidesPerView(10);
      return;
    }

    setSlidesPerView(4.6);
  }, [search.length]);

  return (
    <>
      {/* Hide the FilterScrollbar component when showing the filters modal */}
      {!showFilters ? (
        <div
          className={`w-full shadow-md shadow-[#f0efe9]/[.2] ${
            showStickyHeader
              ? 'fixed 2xl:flex 2xl:justify-center top-[90px] h-auto 2xl:h-[107px] z-10 bg-[#141b1f] transition-all ease-in-out duration-1000 2xl:duration-[1.5s]'
              : ''
          }`}
        >
          {/* The above div is meant to make it easier to give the sticky header a max-width of 1400px */}
          {/* ... */}
          <div
            className={`w-full 2xl:max-w-[1400px] 3xl:max-w-[1700px]  2xl:mx-auto mt-3 xl:mt-0 mb-2 md:mb-3 xl:mb-8 2xl:mb-4 transition-all ease-in-out duration-1000 2xl:duration-[1.5s] ${
              search.length ? 'md:px-3 lg:px-5' : ''
            } ${
              showStickyHeader
                ? 'fixed top-[60px] xl:top-[80px] xm:pt-4.5 pt-5 md:pt-2.5 xl:pt-1 z-10 bg-[#141b1f]'
                : ''
            } sm:pb-3 xl:pb-0 flex justify-around items-center`}
          >
            {search.length ? (
              <CustomFilter
                homeFilter={homeFilter}
                setHomeFilter={setHomeFilter}
                setSelectedFilter={setSelectedFilter}
              />
            ) : null}
            <Swiper
              spaceBetween={14}
              slidesPerView={slidesPerView}
              modules={[Navigation]}
              navigation={isLargerScreen}
              className='md:w-[83%] xl:pt-3.5 2xl:pt-5'
            >
              {filters.map((filter, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${
                      selectedFilter.text === filter.text
                        ? 'text-[#f0efe9]'
                        : 'text-[#f0efe9]/[.6]'
                    } flex flex-col items-center cursor-pointer`}
                    onClick={() => {
                      setHomeFilter(false);
                      setSelectedFilter(filter);
                    }}
                  >
                    <i className={filter.icon}></i>
                    <p
                      className={`text-xs xl:text-[14px] pb-1 ${
                        selectedFilter.text === filter.text
                          ? 'border-b border-[#f0efe9]'
                          : ''
                      } tracking-wider font-semibold mt-0.5`}
                    >
                      {filter.text}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={`hidden md:flex ${
                !search.length ? 'mr-8 2xl:ml-auto 2xl:mr-0' : ''
              } cursor-pointer border border-[#f0efe9]/[.5] rounded-xl ml-3 items-center md:mb-3.5 lg:mb-0 gap-2 px-2.5 py-2`}
              onClick={() => handleFilters()}
            >
              <i className='fa-solid fa-sliders xl:text-xs'></i>
              <p className='text-sm xl:text-[14px]'>Filters</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FilterScrollbar;
