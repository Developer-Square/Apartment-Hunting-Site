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

const FilterScrollbar = ({
  setshowFilters,
}: {
  setshowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<Record<string, string>>(
    filters[0]
  );
  const [slidesPerView, setSlidesPerView] = useState(4.6);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setSlidesPerView(6);
      return;
    }
    setSlidesPerView(4.6);
  }, []);

  return (
    <div className='w-full mt-3 mb-10 sm:pb-3 flex justify-around items-center shadow-md shadow-[#f0efe9]/[.2]'>
      <Swiper
        spaceBetween={14}
        slidesPerView={slidesPerView}
        modules={[Navigation]}
        navigation
        className='md:w-[85%]'
      >
        {filters.map((filter, index) => (
          <SwiperSlide key={index}>
            <div
              className={`${
                selectedFilter.text === filter.text
                  ? 'text-[#f0efe9]'
                  : 'text-[#f0efe9]/[.6]'
              } flex flex-col items-center cursor-pointer`}
              onClick={() => setSelectedFilter(filter)}
            >
              <i className={filter.icon}></i>
              <p
                className={`text-xs pb-1 ${
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
        className='hidden md:flex cursor-pointer mr-5 border border-[#f0efe9]/[.5] rounded-xl ml-2 items-center gap-2 px-2.5 py-2'
        onClick={() => setshowFilters(true)}
      >
        <i className='fa-solid fa-sliders'></i>
        <p className='text-sm'>Filters</p>
      </div>
    </div>
  );
};

export default FilterScrollbar;
