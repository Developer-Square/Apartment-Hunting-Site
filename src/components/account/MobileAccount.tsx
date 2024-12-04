import { useNavigate } from "react-router-dom";

const MobileAccount = () => {
  const navigate = useNavigate();
  return (
    <div>
             <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Account settings</h1>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/personal-info')}
        >
          <div className='flex'>
            <i className='fa-regular fa-user text-xl'></i>
            <p className='text-lg ml-3'>Personal info</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/edit-account')}
        >
          <div className='flex'>
            <i className='fa-solid fa-gear text-xl'></i>
            <p className='text-lg ml-3'>Account</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Referrals & credits</h1>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/gift-cards')}
        >
          <div className='flex'>
            <i className='fa-solid fa-gift text-xl'></i>
            <p className='text-lg ml-3'>Gift cards</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
      <div className='pt-10 pb-4 border-b border-white/[.2]'>
        <h1 className='text-xl font-semibold mb-7'>Support</h1>
        <div
          className='flex justify-between items-center my-5 cursor-pointer'
          onClick={() => navigate('/account/how-website-works')}
        >
          <div className='flex'>
            <i className='fa-regular fa-building text-xl'></i>
            <p className='text-lg ml-3'>How our website works</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
        <div className='flex justify-between items-center my-5 cursor-pointer'>
          <div className='flex'>
            <i className='fa-regular fa-circle-question text-xl'></i>
            <p className='text-lg ml-3'>Get help</p>
          </div>
          <i className='fa-solid fa-chevron-right'></i>
        </div>
      </div>
    </div>
  )
}

export default MobileAccount