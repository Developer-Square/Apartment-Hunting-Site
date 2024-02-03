import { useNavigate } from 'react-router-dom';

const LoginAndSecurity = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white'>
      <div className='w-full px-6 py-4 shadow-lg shadow-white/[.1] sticky'>
        <i
          className='fa-solid fa-chevron-left text-lg cursor-pointer'
          onClick={() => navigate('/account/edit-account')}
        ></i>
      </div>
      <div className='mx-6 mt-8'>
        <h1 className='text-xl font-semibold'>Login & security</h1>
        <div className='pt-8 pb-4 border-b border-white/[.2] cursor-pointer'>
          <div className='my-4'>
            <label htmlFor='fullName' className='text-xs'>
              Password
            </label>
            <input
              id='fullName'
              type='text'
              value='*******'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
            />
          </div>
          <div className='my-4'>
            <label htmlFor='fullName' className='text-xs'>
              Confirm Password
            </label>
            <input
              id='fullName'
              type='text'
              value='*******'
              placeholder='Password'
              className='input input-bordered w-full max-w-xs pt-1 focus:outline-none focus:border-white/[.5] focus:ring-0'
            />
          </div>
        </div>
        <div className='flex mt-14 w-full justify-around'>
          <button className='btn btn-outline btn-success h-10 w-24 min-h-full'>
            Save
          </button>
          <button
            className='btn btn-outline btn-error h-10 w-24 min-h-full'
            onClick={() => navigate('/account/edit-account')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSecurity;
