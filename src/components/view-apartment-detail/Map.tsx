import { useState, useEffect } from 'react';

const Map = () => {
  const [mapHeight, setmapHeight] = useState('250');

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setmapHeight('480');
      return;
    }
    setmapHeight('250');
  }, []);

  return (
    <div>
      <p className='text-left mb-3'>Nairobi, Kenya</p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.43284925167!2d36.7203741732993!3d-1.3021282380375216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20County!5e0!3m2!1sen!2ske!4v1692081502773!5m2!1sen!2ske'
        width='100%'
        height={mapHeight}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
