import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReserveVisitForm = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => {
    setDate(date);
  };
  return (
    <div
      className={`hidden md:block sticky-form w-[80%] lg:max-w-xs h-auto sticky top-20`}
    >
      <h3 className='text-xl xl:text-base font-bold'>Ksh 500 /day</h3>
      <div className='flex'>
        <div className='w-full border border-white/[.2] my-6 h-14 rounded-tl-lg'>
          <p className='pt-2 px-4 text-xs uppercase'>Check-in</p>
          <DatePicker selected={date} onChange={onChange} />
        </div>
        <div className='w-full border border-white/[.2] my-6 h-14 border-l-0 rounded-tr-lg'>
          <p className='pt-2 px-4 text-xs uppercase'>Check-out</p>
          <DatePicker selected={date} onChange={onChange} />
        </div>
      </div>
      <select
        className='select select-bordered w-full max-w-xs focus:ring-0 focus:outline-none focus:border-none text-sm xl:text-xs font-normal'
        defaultValue=''
      >
        <option>1 guest</option>
        <option>2 guests</option>
        <option>3 guests</option>
        <option>4+ guests</option>
      </select>
      <button className='w-full h-12 my-6 rounded-lg bg-white text-black font-semibold'>
        Book
      </button>
      <div className='flex justify-between xl:text-sm'>
        <p className='underline underline-offset-4'>Travel fee</p>
        <p>Ksh 250</p>
      </div>
      <div className='flex py-4 justify-between xl:text-sm'>
        <p className='underline underline-offset-4'>Cleaning fee</p>
        <p>Ksh 550</p>
      </div>
      <div className='pb-4 border-b border-[#f0efe9]/[.4]'></div>
      <div className='font-semibold flex mt-4 justify-between xl:text-sm'>
        <p>Total</p>
        <p>Ksh 1500</p>
      </div>
    </div>
  );
};

export default ReserveVisitForm;
