import MobileMenu from "@/components/home/MobileMenu";
import { DesktopMenu } from "../components";
import { useEffect, useState } from "react";
import ProfileImg from "@/assets/home/Logo - dark surface.png";
import ThreeDApartmentVideo from "@/components/view-apartment-detail/ThreeDApartmentVideo";

const ListWithUs = () => {
  const [show, setShow] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 21) {
        setShowStickyHeader(true);
        return;
      }
      setShowStickyHeader(false);
    });
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto text-white xl:max-w-[1200px] xl:mx-auto">
      <MobileMenu
        show={show}
        setShow={setShow}
        showStickyHeader={showStickyHeader}
        ProfileImg={ProfileImg}
      />
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
      <div className="flex flex-col items-center pt-10 relative top-[64px] lg:top-[130px] mx-4">
        <h1 className="text-3xl font-bold leading-10 mb-8">
          List Your Apartment on BomaTours
        </h1>
        <ThreeDApartmentVideo />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full mb-5">
          <div className="w-full">
            <h2 className="text-2xl w-full font-bold leading-10 mt-8 mb-3">
              Why 3D Virtual Tour
            </h2>
            <p className="text-base font-medium">
              Welcome to BomaTours! We offer 3D virtual tours that let you
              explore apartments as if you're really there, giving you a true
              sense of space and layout. Unlike photos, which only show one
              angle at a time, our virtual tours let you walk through every
              corner and see how everything connects. It’s the future of
              apartment hunting—faster, easier, and perfect for finding the
              right place without leaving home!
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl w-full font-bold leading-10 mt-8 mb-3">
              Why List With Us?
            </h2>
            <p className="text-base font-medium">
              We are a team of experienced real estate professionals who
              understand the importance of showcasing your property in the best
              possible way. Our 3D virtual tours are designed to give potential
              tenants a true sense of the space and layout of your apartment,
              allowing them to make informed decisions about their next home. We
              also offer a range of other services to help you market your
              property effectively, including professional photography and video
              tours.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl w-full font-bold leading-10 mt-8 mb-3">
              How it Works
            </h2>
            <p className="text-base font-medium">
              Our process is simple and straightforward. Once you've signed up,
              you will be redirected to our dashboard where you can list your
              apartment, upload photos and even update your listing details when
              needed. Once your listing is live, you can come back to the
              homepage and click on your listing to view it.
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-2xl w-full font-bold leading-10 mt-8 mb-3">
              Ready to get started?
            </h2>
            <p className="text-base font-medium">
              Click the button below to get started, sign up for free and list
              your apartment.
            </p>
        <div className="flex justify-start items-center w-full">
          <a 
            href="https://property-management-site.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 w-full text-center rounded-md my-8 inline-block"
          >
            List Your Apartment
          </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListWithUs;
