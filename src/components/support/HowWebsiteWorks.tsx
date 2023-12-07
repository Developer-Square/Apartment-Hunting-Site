import React from 'react';
import Logo from '@/assets/home/Logo - light surface.png';
import Video1 from '@/assets/home/website-works-1.mp4';
import Video2 from '@/assets/home/website_works_2.mp4';
import Video3 from '@/assets/home/website-works-3.mp4';
import { useNavigate } from 'react-router-dom';

type Props = object;

const constantData = [
  {
    video: Video1,
    title: '1. Browse',
    content:
      'Scan your own furniture or choose from our catalogue so that you can style your room and feel confident that your furniture will fit in the space just as you have styled it.',
  },
  {
    video: Video2,
    title: '2. Book',
    content:
      'You are designing using furniture from our catalog and have decided it is the perfect piece for you, what is the next step? We have a variety of artwork and furniture for you to choose from! Simply select the item you are interested in and place it within your space. If you love it, you can buy it and we will ship it to your new home. ',
  },
  {
    video: Video3,
    title: '3. Go',
    content:
      ' Now with AR, you are able to test items before you buy, virtually! Scan your space easily with your device, then add in your favorite pieces before you purchase. Our scans are hyperrealistic. Allowing you to visualize your space and furniture in a new way that allows you to imagine what your space will look like in reality. ',
  },
];

const faq = [
  {
    title:
      'What if I need to cancel due to a problem with the listing or host?',
    content:
      "In most cases, you can resolve any issues directly by messaging your host. If they can't help, simply contact Airbnb within 24 hours of discovering the issue.",
  },
  {
    title: 'Need more information?',
    content:
      'Visit our Help Center to get additional answers to your questions.',
  },
  {
    title: 'Do I need to meet my host?',
    content:
      'Options like self check-in or booking an entire home allow you to interact with your host mainly through in-app messaging—you can message them anytime if something comes up.',
  },
];

const FAQ = ({ title, content }: { title: string; content: string }) => (
  <div
    tabIndex={0}
    className='mt-10 collapse collapse-arrow border border-base-300 bg-base-200'
  >
    <div className='collapse-title text-lg font-medium'>{title}</div>
    <div className='collapse-content'>
      <p className='text-sm'>{content}</p>
    </div>
  </div>
);

const HowWebsiteWorks = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='m-6 text-white'>
      <div
        className='flex mb-5 items-center cursor-pointer'
        onClick={() => navigate('/account')}
      >
        <i className='fa-solid fa-chevron-left text-lg'></i>
        <p className='text-lg ml-2'>Go Back</p>
      </div>
      <img src={Logo} alt='logo' className='w-10 h-10 rounded-full' />
      <h1 className='text-3xl font-semibold mt-8'>
        Here's how our apartment hunting site works
      </h1>
      {constantData.map((data, index) => (
        <div className='mt-20' key={index}>
          <video width='360px' height='360px' className='rounded-lg' controls>
            <source src={data.video} type='video/mp4' />
          </video>
          <h4 className='font-semibold text-lg mt-5'>{data.title}</h4>
          <p className='text-sm'>{data.content}</p>
        </div>
      ))}
      <h1 className='text-2xl font-semibold mt-10'>Still have questions?</h1>
      {faq.map((qtn, index) => (
        <div key={index}>
          <FAQ title={qtn.title} content={qtn.content} />
        </div>
      ))}
    </div>
  );
};

export default HowWebsiteWorks;
