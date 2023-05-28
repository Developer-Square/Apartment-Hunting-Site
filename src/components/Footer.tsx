const Footer = () => {
  return (
    <div className='mt-16 border-t-2 border-[#5D5D5D]'>
      <div className='mt-3.5 flex flex-col items-center'>
        <p className='text-white/[.7] text-sm'>
          © 2023 TecHive LLP. All rights reserved.
        </p>
        <p className='text-white/[.7] text-sm cursor-pointer'>
          Terms of Service
        </p>
        <p className='text-white/[.7] text-sm cursor-pointer'>Privacy Policy</p>
        <div className='flex items-center my-3.5 cursor-pointer'>
          <p>Back to top</p>
          <i className='fa-solid fa-arrow-up ml-2'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
