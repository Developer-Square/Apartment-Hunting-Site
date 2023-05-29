import { useState, useEffect } from 'react';

const ContactUsSection = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 639) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, []);

  return (
    <div className='mt-11 bg-[#FFFFFF] text-black px-4 flex flex-col items-center rounded-[25px]'>
      <p className='pt-5 text-center'>
        We are here to help you discover each properties’ unique potential
      </p>
      <button className='mt-5 w-[230px] h-[45px] bg-[#40655E] text-white rounded-[20px]'>
        Contact Us
      </button>
      <div className='my-5'>
        <iframe
          width={isTablet ? '572' : '300'}
          height={isTablet ? '400' : '257'}
          style={{
            borderRadius: '20px',
          }}
          src='https://www.youtube.com/embed/EJ9FhsRerMI'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsSection;
