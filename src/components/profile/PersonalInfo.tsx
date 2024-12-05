import ErrorBoundary from '@/pages/ErrorBoundary';
import { useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary>
    <div className='text-white'>
      <div className='w-full px-6 py-4 shadow-lg shadow-white/[.1] sticky'>
        <i
          className='fa-solid fa-chevron-left text-lg cursor-pointer'
          onClick={() => navigate('/account')}
        ></i>
      </div>
      <div className='mx-6 mt-8'>
        <h1 className='text-xl font-semibold'>Personal Info</h1>
        <div className='my-5'>
          <label htmlFor='fullName' className='text-xs'>
            Legal Name
          </label>
          <input
            id='fullName'
            type='text'
            value='King Zoo'
            placeholder='Add your legal name'
            className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='emailAddress' className='text-xs'>
            Email address
          </label>
          <input
            id='emailAddress'
            type='text'
            placeholder='Add email address'
            value='king********@gmail.com'
            className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='phoneNumber' className='text-xs'>
            Phone number
          </label>
          <input
            id='phoneNumber'
            type='text'
            value=''
            placeholder='Add phone number'
            className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='address' className='text-xs'>
            Address
          </label>
          <input
            id='address'
            type='text'
            value=''
            placeholder='Add your address'
            className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
          />
        </div>
        <div className='my-5'>
          <label htmlFor='fullName' className='text-xs'>
            Government ID
          </label>
          <input type='file' className='file-input w-full text-xs max-w-xs' />
        </div>
        <div className='flex mt-14 w-full justify-around'>
          <button className='btn btn-outline btn-success h-10 w-24 min-h-full'>
            Save
          </button>
          <button
            className='btn btn-outline btn-error h-10 w-24 min-h-full'
            onClick={() => navigate('/account')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
};

export default PersonalInfo;
