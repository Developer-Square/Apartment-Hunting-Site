import { useNavigate } from 'react-router-dom';
import MpesaLogo from '@/assets/home/mpesa.png';
import ErrorBoundary from '@/pages/ErrorBoundary';

const Payments = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary>
    <div className='text-white'>
      <div className='w-full px-6 py-4 shadow-lg shadow-white/[.1] sticky'>
        <i
          className='fa-solid fa-chevron-left text-lg cursor-pointer'
          onClick={() => navigate('/account/edit-account')}
        ></i>
      </div>
      <div className='mx-6 mt-8'>
        <h1 className='text-xl font-semibold'>Payments</h1>
        <div className='pt-10 pb-4 border-b border-white/[.2] cursor-pointer'>
          <div className='flex items-center'>
            <i className='fa-brands fa-cc-visa text-xl'></i>
            <p className='text-lg ml-2'>Credit card</p>
          </div>
        </div>
        <div className='pt-10 pb-4 border-b border-white/[.2] cursor-pointer'>
          <div className='flex items-center'>
            <img src={MpesaLogo} className='h-10 w-14' alt='logo' />
            <p className='text-lg ml-2'>Mobile money</p>
          </div>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default Payments;
