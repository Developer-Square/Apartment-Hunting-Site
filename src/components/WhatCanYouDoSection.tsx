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
    <div className='mt-11'>
      <h4 className='text-2xl uppercase mb-3'>What Can you Do</h4>
      <div className='sm:grid sm:grid-cols-2 gap-6'>
        {items.map((item, index) => (
          <div className='mt-6'>
            <p className='pb-2.5'>0{index + 1}.</p>
            <div className='border-b border-solid border-[#FFFFFF]'></div>
            <p className='uppercase pt-2.5'>{item.toLocaleUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatCanYouDoSection;
