import { useEffect, useState } from 'react';

const Map = () => {
  const [showMap, setSetShowMap] = useState(false);
  const [mapDimension, setMapDimensions] = useState({
    width: '100%',
    height: '475px',
  });

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setSetShowMap(true);
    }

    if (window.innerWidth >= 1024) {
      setSetShowMap(false);
      setMapDimensions({
        width: '460',
        height: '100%',
      });
      return;
    }
    setMapDimensions({
      width: '100%',
      height: '460',
    });
  }, []);

  return (
    <div className='lg:w-[460px] lg:relative'>
      {!showMap && (
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171114.067109344!2d32.60700860264909!3d0.1649280505936471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1688200074841!5m2!1sen!2ske'
          width={mapDimension.width}
          height={mapDimension.height}
          allowFullScreen={false}
          loading='lazy'
          className='border-0 lg:fixed'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      )}
    </div>
  );
};

export default Map;
