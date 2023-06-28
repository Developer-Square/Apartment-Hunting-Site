import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';
import additionalAbilitiesData from '@/assets/home/additionalAbilites.json';

interface AdditionalAbilitiesData {
  title: string;
  cutContent: string;
  fullContent: string;
}

const AdditionalAbilitiesSection = () => {
  const [showContent, setShowContent] = useState<AdditionalAbilitiesData>({
    title: '',
    cutContent: '',
    fullContent: '',
  });
  const { data } = additionalAbilitiesData;
  const style = useSpring({
    height: showContent.title.length ? 'auto' : 0,
    opacity: showContent.title.length ? 1 : 0,
    config: { duration: 800 },
  });

  const handleShowContent = (item: AdditionalAbilitiesData) => {
    if (showContent.title === item.title) {
      return setShowContent({
        title: '',
        cutContent: '',
        fullContent: '',
      });
    }
    setShowContent(item);
  };
  return (
    <div className='mt-12 xl:mt-16'>
      <h4 className='text-2xl uppercase mb-3'>Additional Abilities</h4>
      {data.map((item, index) => (
        <div
          key={index}
          className='mt-5 py-3 px-5 w-full bg-[#2a2a2a] rounded-[18px] cursor-pointer'
          onClick={() => handleShowContent(item)}
        >
          <p className='text-white/[.7]'>0{index + 1}.</p>
          <div className='flex justify-between'>
            <p className='uppercase'>{item.title}</p>
            {showContent.title === item.title ? (
              <i className='fa-solid fa-minus'></i>
            ) : (
              <i className='fa-solid fa-plus'></i>
            )}
          </div>
          <div className='flex justify-between mt-3.5'>
            {showContent.title !== item.title && <p>{item.cutContent}</p>}
          </div>
          <animated.div style={style}>
            {showContent.title === item.title && item.fullContent}
          </animated.div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalAbilitiesSection;
