const menuLinks = ['List with us', 'About', 'Contact'];

const DesktopMenu = () => {
  return (
    <div className='absolute top-[10%] right-[5%] flex justify-around'>
      {menuLinks.map((link, index) => (
        <div
          key={index}
          className='bg-black/[.3] mr-4 rounded-3xl cursor-pointer pt-2 px-4 uppercase text-sm xl:text-[13px]'
        >
          {link}
        </div>
      ))}
      <div className='bg-white flex items-center mr-4 rounded-3xl cursor-pointer py-2 px-4 uppercase text-sm xl:text-[13px]'>
        <p className='text-black mr-2'>Login</p>
        <i className='text-black text-[17px] fa-solid fa-arrow-right'></i>
      </div>
    </div>
  );
};

export default DesktopMenu;
