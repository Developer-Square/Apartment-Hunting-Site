import MobileMenu from "@/components/home/MobileMenu";
import { DesktopMenu } from "../components";
import { useEffect, useState } from "react";
import ProfileImg from "@/assets/home/Logo - dark surface.png";

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
    <section className="relative w-full h-screen mx-auto bg-color text-white">
      <MobileMenu
        show={show}
        setShow={setShow}
        showStickyHeader={showStickyHeader}
        ProfileImg={ProfileImg}
      />
      <div className="hidden lg:block">
        <DesktopMenu />
      </div>
      <div className="flex flex-col items-center pt-10 relative top-[64px] mx-4">
        <div className="flex flex-col">
        <h1 className="text-3xl font-bold leading-10">List Your Apartment on JijiLiving</h1>
        <h3 className="text-base font-medium text-sky-400 mt-3 underline cursor-pointer">Learn more</h3>
        </div>
        <div className="p-5 shadow-2xl rounded-lg border border-white/[.2] mt-8 w-full">
          <h2 className="text-xl font-bold">List With Us</h2>
          <p className="text-sm font-semibold mt-6 mb-3">First Name</p>
          <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white/[.2]" />
          <p className="text-sm font-semibold mt-6 mb-3">Last Name</p>
          <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white/[.2]" />
          <p className="text-sm font-semibold mt-6 mb-3">Email</p>
          <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white/[.2]" />
          <p className="text-sm font-semibold mt-6 mb-3">Phone Number</p>
          <input type="number" className="w-full p-2 rounded-md bg-transparent border border-white/[.2]" />
          <p className="text-sm font-semibold mt-6 mb-3">Apartment Name</p>
          <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white/[.2]" />
          <button type="submit" className="w-full p-2 rounded-md bg-sky-400 text-white mt-8">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ListWithUs;
