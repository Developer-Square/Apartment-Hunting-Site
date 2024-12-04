import { useNavigate } from "react-router-dom";

const DesktopAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-10 pb-4">
      <h1 className="text-xl font-semibold mb-7">Account settings</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="mt-4 p-3 border border-white/[.2] rounded-lg shadow-2xl cursor-pointer" onClick={() => navigate('/account/personal-info')}>
          <i className="fa fa-file-text" aria-hidden="true"></i>
          <p className='text-lg font-semibold mt-6'>Personal info</p>
          <p className='text-sm mt-2'>Provider personal details and how we can reach you.</p>
        </div>
        <div className="mt-4 p-3 border border-white/[.2] rounded-lg shadow-2xl cursor-pointer" onClick={() => navigate('/account/edit-account')}>
          <i className="fa fa-gear" aria-hidden="true"></i>
          <p className='text-lg font-semibold mt-6'>Account</p>
          <p className='text-sm mt-2'>Manage your account settings.</p>
        </div>
        <div className="mt-4 p-3 border border-white/[.2] rounded-lg shadow-2xl cursor-pointer" onClick={() => navigate('/account/gift-cards')}>
          <i className="fa fa-gift" aria-hidden="true"></i>
          <p className='text-lg font-semibold mt-6'>Gift Cards</p>
          <p className='text-sm mt-2'>Manage your gift cards.</p>
        </div>
        <div className="mt-4 p-3 border border-white/[.2] rounded-lg shadow-2xl cursor-pointer" onClick={() => navigate('/account/how-website-works')}>
          <i className="fa-regular fa-building" aria-hidden="true"></i>
          <p className='text-lg font-semibold mt-6'>How our website works</p>
          <p className='text-sm mt-2'>Learn how our website works.</p>
        </div>
        <div className="mt-4 p-3 border border-white/[.2] rounded-lg shadow-2xl cursor-pointer" onClick={() => navigate('/account/get-help')}>
          <i className="fa-regular fa-circle-question" aria-hidden="true"></i>
          <p className='text-lg font-semibold mt-6'>Get help</p>
          <p className='text-sm mt-2'>Get help with your account.</p>
        </div>
      </div>
    </div>
  );
};

export default DesktopAccount;
