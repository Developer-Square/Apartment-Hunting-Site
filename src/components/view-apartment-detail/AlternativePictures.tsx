import Apartment1 from '@/assets/view-apartment-detail-page/view-apartment-1.webp';
import Apartment2 from '@/assets/view-apartment-detail-page/view-apartment-2.webp';
import Apartment3 from '@/assets/view-apartment-detail-page/view-apartment-3.webp';

const AlternativePictures = () => {
  return (
    <div className='text-base' id='photos'>
      <p className='mb-4'>
        Alternatively you can also view professional apartment pictures
      </p>
      <div className='grid grid-cols-2 gap-2 cursor-pointer'>
        <img src={Apartment1} className='w-full h-full' alt='apartment' />
        <div className='flex flex-col'>
          <div className='md:grid grid-cols-2 gap-2'>
            <img src={Apartment2} className='mb-3' alt='apartment' />
            <img src={Apartment2} className='hidden md:block' alt='apartment' />
          </div>
          <div className='md:grid grid-cols-2 gap-2'>
            <img src={Apartment3} alt='apartment' className='' />
            <img src={Apartment3} className='hidden md:block' alt='apartment' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativePictures;
