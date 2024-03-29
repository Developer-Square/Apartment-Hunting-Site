import { useEffect, useMemo, useState } from 'react';

const Map = ({
  showFullMap,
  setShowFullMap,
}: {
  showFullMap: boolean;
  setShowFullMap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showMap, setSetShowMap] = useState(false);
  const [mapDimension, setMapDimensions] = useState({
    width: '100%',
    height: '416px',
  });

  useMemo(() => {
    if (showFullMap) {
      setMapDimensions({
        width: '100%',
        height: '100vh',
      });
      return;
    }
  }, [showFullMap]);

  useEffect(() => {
    if (window.innerWidth >= 1024 && window.innerWidth < 1535) {
      setSetShowMap(false);
      setMapDimensions({
        width: '460',
        height: '100vh',
      });
      return;
    }

    if (window.innerWidth >= 1536) {
      setSetShowMap(false);
      setMapDimensions({
        width: '568',
        height: '100vh',
      });
      return;
    }

    setSetShowMap(false);
    setMapDimensions({
      width: '100%',
      height: '416px',
    });
  }, [showFullMap]);

  return (
    <div
      className={`${
        showFullMap
          ? 'lg:w-full change lg:h-screen'
          : 'lg:w-[460px] xl:w-[473px] 2xl:w-[568px] 3xl:w-[768px]'
      } relative`}
      style={{
        height: `${mapDimension.height}`,
      }}
    >
      {!showMap && (
        <>
          <div
            className={`hidden lg:flex sticky justify-center items-center  ${
              showFullMap
                ? 'w-36 xl:w-32 xl:h-8 h-10 top-[25%] left-[83%] 2xl:top-[23%] 2xl:left-[85%] 3xl:left-[76%]'
                : 'top-[22%] left-[40%] xl:top-[24%] xl:left-[33%] 2xl:top-[22%] 2xl:left-[33%] 3xl:left-[43%] w-8 h-8'
            } bg-white transition-all ease-in-out duration-500 text-black font-semibold z-[1] shadow-2xl rounded-lg xl:text-sm cursor-pointer`}
            onClick={() => setShowFullMap((prevState) => !prevState)}
          >
            <i className='fa-solid fa-angle-right text-xl xl:text-lg py-1 px-3  text-black'></i>
            {showFullMap ? 'Show List' : ''}
          </div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171114.067109344!2d32.60700860264909!3d0.1649280505936471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1688200074841!5m2!1sen!2ske'
            width={mapDimension.width}
            height={mapDimension.height}
            allowFullScreen={false}
            loading='lazy'
            className='border-0 lg:sticky w-full h-full top-0'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </>
      )}
    </div>
  );
};

export default Map;
