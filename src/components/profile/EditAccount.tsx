import { useNavigate } from 'react-router-dom';

const EditAccount = () => {
  const navigate = useNavigate();
  return (
    <div className='text-white'>
      <div className='w-full px-6 py-4 shadow-lg shadow-white/[.1] sticky'>
        <i
          className='fa-solid fa-chevron-left text-lg cursor-pointer'
          onClick={() => navigate('/account')}
        ></i>
      </div>
      <div className='mx-6 mt-8'>
        <h1 className='text-xl font-semibold'>Account</h1>
        <div className='pt-10 pb-4 border-b border-white/[.2]'>
          <div
            className='flex justify-between items-start mb-2 cursor-pointer'
            onClick={() => navigate('/payments')}
          >
            <div className='flex flex-col'>
              <p className='text-lg'>Payments</p>
              <span className='text-xs'>Credit cards, mpesa, etc.</span>
            </div>
            <i className='mt-2 fa-solid fa-chevron-right'></i>
          </div>
        </div>
        <div className='pt-10 pb-4 border-b border-white/[.2]'>
          <div
            className='flex justify-between items-start mb-2 cursor-pointer'
            onClick={() => navigate('/login-and-security')}
          >
            <div className='flex flex-col'>
              <p className='text-lg'>Login & security</p>
              <span className='text-xs'>Passwords and protection</span>
            </div>
            <i className='mt-2 fa-solid fa-chevron-right'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
