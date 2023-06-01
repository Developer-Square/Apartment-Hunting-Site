const InputRange = ({
  text,
  placeholder,
}: {
  text: string;
  placeholder: string;
}) => (
  <div>
    <span className='text-sm mt-2 ml-2'>{text}</span>
    <div className='flex items-center ml-2'>
      <span className='text-[#18AB18] text-base font-semibold'>Ksh</span>
      <input
        type='number'
        placeholder={placeholder}
        className='w-full h-[44px] outline-none ml-2 bg-transparent'
      />
    </div>
  </div>
);

const Search = () => {
  return (
    <div className='absolute rounded-l-[10px] left-[4.4%] rounded-b-[10px] top-[6.62%] w-[377px] xl:w-[470px] h-[697px] xl:h-[871px] bg-white text-black'>
      <div className='relative flex flex-col items-center pl-10 pt-[40%] pr-9'>
        <h3 className='text-4xl font-semibold w-[260px] xl:w-[360px] mr-auto'>
          House rentals with pools in Kenya
        </h3>
        <p className='font-medium w-[290px] xl:w-[397px] xl:pl-3 mt-3'>
          Book unique houses,vacation rentals and more on tecHive
        </p>
        <div className='border-black mt-6 border-2 rounded-[10px] w-full h-[75px]'>
          <span className='text-sm mt-2 ml-2'>Location</span>
          <input
            type='text'
            placeholder='Anywhere'
            className='w-full h-[44px] outline-none border-none ml-2 bg-transparent'
          />
        </div>
        <p className='w-full mt-2 mb-1'>Price range</p>
        <div className='border-black border-2 rounded-[10px] w-full h-[75px] flex'>
          <InputRange text='lowest price' placeholder='0' />
          <div className='h-[80%] w-1 my-2 mx-3 bg-black'></div>
          <InputRange text='highest price' placeholder='100000' />
        </div>
        <button className='w-full mt-6 text-white h-12 cursor-pointer rounded-[8px] bg-[#1C323F] font-semibold'>
          Search
          <i className='fa-solid fa-house-chimney ml-1.5'></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
