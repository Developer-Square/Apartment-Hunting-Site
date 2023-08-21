const Profile = ({ profile }: { profile: string }) => {
  const confirmedInfo = ['Identity', 'Phone number', 'Email Address'];
  return (
    <div>
      <h1 className='text-xl mb-4 font-bold'>Meet your Agent</h1>
      <div className='relative border-white/[.4] border rounded-3xl shadow-2xl py-8 px-5 flex justify-between gap-5'>
        <div className='flex flex-2 sm:flex-auto sm:w-[65%] md:w-[55%] flex-col items-center'>
          <div className='relative h-24 w-24 rounded-full'>
            <div className='absolute top-0 left-0 bg-black/[.2] w-full h-full rounded-full'></div>
            <img
              src={profile}
              alt='property manager'
              className='w-full h-full rounded-full'
            />
            <div className='absolute bottom-0 right-0'>
              <i className='fa-solid fa-circle-check text-xl'></i>
            </div>
          </div>
          <p className='font-bold mt-4 text-[26px]'>Ryan Njoroge</p>
          <p className='font-semibold mt-1 text-sm'>
            <i className='fa-solid fa-trophy xl:text-sm'></i> Super Agent
          </p>
        </div>
        <div className='flex flex-1 flex-col justify-center'>
          <div className='flex flex-col'>
            <p className='font-bold text-xl'>3</p>
            <p className='text-xs pb-3 xl:text-[14px]'>Years as a Manager</p>
            <div className='border-b border-black/[.3]'></div>
          </div>
        </div>
      </div>

      {/* Rest of Body */}
      <div className='mx-6 my-10 pb-8 text-white border-b border-white/[.3]'>
        <div className='flex items-center'>
          <i className='fa-solid fa-briefcase text-lg xl:text-base'></i>
          <p className='ml-4 font-semibold xl:text-sm'>My Work: Hospitality</p>
        </div>
        <div className='flex mt-3 items-center'>
          <i className='fa-solid fa-location-dot text-lg xl:text-base'></i>
          <p className='ml-4 font-semibold xl:text-sm'>
            Lives in Nairobi, Kenya
          </p>
        </div>
      </div>
      <div className='mx-6 text-[22px] xl:text-[20px] font-semibold'>
        <p>Ryan Njoroge's Confirmed information</p>
        {confirmedInfo.map((info, index) => (
          <div
            className='flex font-normal text-base items-center mt-4'
            key={index}
          >
            <i className='fa-solid fa-check mr-3'></i>
            <p className='xl:text-sm'>{info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
