import { useScrollDirection } from 'src/hooks/useScrollDirection';

const PopupMenu = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed ${
        scrollDirection === 'down' ? '-bottom-[60px] border-none' : 'bottom-0'
      } h-[60px] w-full bg-[#141b1f] border-t border-[#f0efe9] z-20 transition-all duration-500 flex justify-around items-center text-[#f0efe9]/[.6]`}
    >
      <div className='flex flex-col items-center mt-2 cursor-pointer'>
        <i className='fa-solid fa-magnifying-glass text-[28px]'></i>
        <p className='text-[10px] mt-0.5'>Explore</p>
      </div>
      <div className='flex flex-col items-center mt-2 cursor-pointer'>
        <i className='fa-regular fa-heart text-[28px]'></i>
        <p className='text-[10px] mt-0.5'>Wishlists</p>
      </div>
      <div className='flex flex-col items-center mt-2 cursor-pointer'>
        <i className='fa-regular fa-user text-[28px]'></i>
        <p className='text-[10px] mt-0.5'>Profile</p>
      </div>
    </div>
  );
};

export default PopupMenu;
