import { useState, useEffect } from 'react';

const ContactUsSection = () => {
  const [iframeWidth, setIframeWidth] = useState('300');
  const [iframeHeight, setIframeHeight] = useState('257');

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 639 && width < 767) {
      setIframeHeight('400');
      setIframeWidth('572');
    } else if (width >= 768) {
      setIframeHeight('480');
      setIframeWidth('680');
    } else {
      setIframeHeight('257');
      setIframeWidth('300');
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
          width={iframeWidth}
          height={iframeHeight}
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
