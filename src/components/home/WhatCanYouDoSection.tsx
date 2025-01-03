const WhatCanYouDoSection = () => {
  const items = [
    'Search Homes',
    'Tour Virtually',
    'Book a Tour',
    'Apply Digitally',
    'E-sign Contract',
    'Move in Safely',
  ];
  return (
    <div className='mt-12 xl:mt-16'>
      <h4 className='text-2xl uppercase mb-3'>What Can you Do</h4>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <div className='mt-6' key={index}>
            <p className='pb-2.5 sm:text-[19px] lg:text-[21px] xl:text-[22px]'>
              0{index + 1}.
            </p>
            <div className='border-b border-solid border-[#FFFFFF]'></div>
            <p className='uppercase pt-2.5 sm:text-[19px] lg:text-[21px] xl:text-[22px]'>
              {item.toLocaleUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCanYouDoSection;
