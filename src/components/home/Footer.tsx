const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className='mt-10 border-t-2 2xl:max-w-[1500px] 3xl:max-w-[1700px] 2xl:mx-auto border-[#5D5D5D]'>
      <div className='lg:flex flex-col'>
        <div className='mt-3.5 flex flex-col lg:flex-row lg:justify-around items-center'>
          <p className='text-white/[.7] text-sm xl:text-xs'>
            © 2023 TecHive LLP. All rights reserved.
          </p>
          <p className='text-white/[.7] text-sm xl:text-xs cursor-pointer sm:mt-2 lg:mt-0'>
            Terms of Service
          </p>
          <p className='text-white/[.7] text-sm xl:text-xs cursor-pointer sm:mt-2 lg:mt-0'>
            Privacy Policy
          </p>
          <div className='sm:mt-2 lg:mt-0'>
            <i className='fa-brands fa-facebook mr-5 cursor-pointer'></i>
            <i className='fa-brands fa-instagram mr-5 cursor-pointer'></i>
            <i className='fa-brands fa-twitter cursor-pointer'></i>
          </div>
        </div>
        <div
          className='flex justify-center items-center my-3.5 cursor-pointer'
          onClick={() => topFunction()}
        >
          <p className='xl:text-xs'>Back to top</p>
          <i className='fa-solid fa-arrow-up ml-2'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
