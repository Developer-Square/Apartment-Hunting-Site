import Apartment1 from '@/assets/view-apartment-detail-page/view-apartment-1.webp';
import Apartment2 from '@/assets/view-apartment-detail-page/view-apartment-2.webp';
import Apartment3 from '@/assets/view-apartment-detail-page/view-apartment-3.webp';

const AlternativePictures = () => {
  return (
    <div className='text-base'>
      <p className='mb-4'>
        Alternatively you can also view professional apartment pictures
      </p>
      <div className='grid grid-cols-2 gap-2 cursor-pointer'>
        <img src={Apartment1} className='w-full h-full' alt='apartment' />
        <div className='flex flex-col'>
          <img src={Apartment2} className='mb-3' alt='apartment' />
          <img src={Apartment3} alt='apartment' />
        </div>
      </div>
    </div>
  );
};

export default AlternativePictures;
