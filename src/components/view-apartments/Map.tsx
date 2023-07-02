const Map = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8171114.067109344!2d32.60700860264909!3d0.1649280505936471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2ske!4v1688200074841!5m2!1sen!2ske'
        width='600'
        height='460'
        allowFullScreen={true}
        loading='lazy'
        className='border-0'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};

export default Map;
