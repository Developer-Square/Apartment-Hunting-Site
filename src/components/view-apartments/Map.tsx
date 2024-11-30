import { GoogleMap, LoadScript } from "@react-google-maps/api";

// Access the environment variable
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map = ({
  showFullMap,
  setShowFullMap,
}: {
  showFullMap: boolean;
  setShowFullMap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const center = {
    lat: -1.2921,
    lng: 36.8219,
  };

  return (
    <div
      className={`${
        showFullMap
          ? "lg:w-full lg:h-screen"
          : "w-full h-[475px] lg:w-[40%] lg:h-[757px] fixed top-[89px]"
      }`}
    >
      <div
        className={`hidden lg:flex absolute justify-center items-center top-4 right-4 ${
          showFullMap ? "w-36 h-10 xl:w-32 xl:h-8" : "w-8 h-8"
        } bg-white transition-all ease-in-out duration-500 text-black font-semibold z-[1] shadow-2xl rounded-lg xl:text-sm cursor-pointer`}
        onClick={() => setShowFullMap((prevState) => !prevState)}
      >
        <i
          className={`fa-solid ${
            showFullMap ? "fa-angle-left" : "fa-angle-right"
          } text-xl xl:text-lg py-1 px-3 text-black`}
        ></i>
        {showFullMap ? "Show List" : ""}
      </div>

      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerClassName="border-0 lg:sticky w-full h-full top-0"
          center={center}
          zoom={8}
          options={{
            fullscreenControl: false,
          }}
        />
      </LoadScript>
    </div>
  );
};

export default Map;
