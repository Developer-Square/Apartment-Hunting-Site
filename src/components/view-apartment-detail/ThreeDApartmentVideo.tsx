import ApartmentVideo from '@/assets/view-apartment-detail-page/video_3.mp4';

const ThreeDApartmentVideo = () => {
  return (
    <div className='relative h-[630px]'>
      <video
        width='100%'
        height='100%'
        className='w-full h-full absolute top-0 left-[50%] transform translate-x-[-50%]'
        controls={true}
      >
        <source src={ApartmentVideo} type='video/mp4' />
      </video>
    </div>
  );
};

export default ThreeDApartmentVideo;
