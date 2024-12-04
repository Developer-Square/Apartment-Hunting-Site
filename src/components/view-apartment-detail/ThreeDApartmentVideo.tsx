import ApartmentVideo from '@/assets/view-apartment-detail-page/video_3.mp4';
import ApartmentVideo2 from '@/assets/view-apartment-detail-page/video_1.mp4';
import { useEffect, useState } from 'react';

const ThreeDApartmentVideo = () => {
  const [videoSrc, setVideoSrc] = useState(ApartmentVideo);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setVideoSrc(ApartmentVideo2);
      return;
    }
    setVideoSrc(ApartmentVideo);
  }, []);

  return (
    <div className='relative h-[630px] w-full mx-6' id='video-tour'>
      <video
        width='100%'
        height='100%'
        className='w-full h-full absolute top-0 left-[50%] transform translate-x-[-50%]'
        controls={true}
      >
        <source src={videoSrc} type='video/mp4' />
      </video>
    </div>
  );
};

export default ThreeDApartmentVideo;
