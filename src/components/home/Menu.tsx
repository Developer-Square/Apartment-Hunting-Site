import { useSpring, animated } from '@react-spring/web';
import { SetStateAction } from 'react';

export const MenuBars = ({
  setMenu,
}: {
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      className='absolute top-5 right-5 cursor-pointer'
      onClick={() => setMenu(true)}
    >
      <div className='bg-[#FFFFFF] h-0.5 w-6 mb-1'></div>
      <div className='bg-[#FFFFFF] h-0.5 w-6 mb-1'></div>
      <div className='bg-[#FFFFFF] h-0.5 w-6'></div>
    </div>
  );
};

const menuItems = [
  'Search Homes',
  'Tour Virtually',
  'Book a Tour',
  'Apply Digitally',
  'E-sign Contract',
  'Move In Safely',
];

const MenuItems = ({ index, item }: { index: number; item: string }) => (
  <div className='flex flex-col mx-5 mb-10 text-black'>
    <div className='flex mb-[18px] cursor-pointer'>
      <p className='mr-5'>0{index + 1}.</p>
      <p className='uppercase'>{item}</p>
    </div>
    <div className='h-px w-full bg-[#000000]'></div>
  </div>
);

const Menu = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const props = useSpring({
    from: { x: 0, opacity: 0 },
    to: { x: show ? 0 : 100, opacity: show ? 1 : 0 },
  });
  return (
    <animated.div
      style={{
        left: show ? 0 : window.innerWidth,
        position: 'absolute',
        top: 0,
        backgroundColor: '#FFFFFF',
        height: '100vh',
        width: '100%',
        zIndex: '10',
        ...props,
      }}
    >
      <div
        className='mt-5 mr-5 float-right cursor-pointer text-black'
        onClick={() => setShow(false)}
      >
        <i className='fa-solid fa-xmark text-xl'></i>
      </div>
      <div className='h-full w-full flex flex-col justify-center'>
        {menuItems.map((item, index) => (
          <MenuItems key={index} index={index} item={item} />
        ))}
      </div>
    </animated.div>
  );
};

export default Menu;
