import { SetStateAction, useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import axios from "axios";

declare global {
  interface Window {
    google: any;
  }
}

const SearchBarModal = ({
  show,
  setShow,
  search,
  setSearch,
  predictions,
  setPredictions,
  setProperties
}: {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  predictions: any;
  setPredictions: React.Dispatch<SetStateAction<any>>;
  setProperties: React.Dispatch<SetStateAction<any>>;
}) => {
  const props = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: show ? 0 : 100, opacity: show ? 1 : 0 },
  });
  const [largerScreen, setLargerScreen] = useState("100%");

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1279) {
      setLargerScreen("25%");
      return;
    }

    if (window.innerWidth >= 1280) {
      setLargerScreen("30%");
      return;
    }

    setLargerScreen("100%");
  }, []);

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setShow(false);
    }
  };

  const selectLocation = (location: string) => {
    setSearch(location);
    localStorage.setItem("location", location);

    try {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, async (results: any, status: any) => {
        if (status === "OK" && results[0]) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          const distance = 20;

          if (lat && lng) {
            const url = `http://localhost:5000/api/v1/nearbyproperties?longitude=${lng}&latitude=${lat}&maxDistance=${distance}`
            const response = await axios.get(url, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYwNDkzYzQxYzQ0ZTQ5NWZmMzFkODkiLCJpYXQiOjE3MzQ3ODAwMjIsImV4cCI6MTczNDc4MTgyMiwidHlwZSI6ImFjY2VzcyJ9.WipGe51NtsyLtavwr6nKxn7uK1HdCQX6WdfgUNFpX3s`
              }
            })
            setProperties(response.data.results)
          }
        } else {
          console.error("Geocoding failed:", status);
        }
      });
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }

    setShow(false);
  };

  const handleLocationSearch = async (value: string) => {
    setSearch(value);

    if (value === "") {
      setPredictions([]);
      return;
    }

    const autoCompleteService =
      new window.google.maps.places.AutocompleteService();
    try {
      const response = await autoCompleteService.getPlacePredictions({
        input: value,
        componentRestrictions: { country: "KE" },
      });
      setPredictions(response?.predictions || []);
    } catch (error) {
      console.error("Error fetching predictions:", error);
    }
  };

  return (
    <animated.div
      style={{
        position: "absolute",
        top: show ? 0 : window.innerHeight,
        backgroundColor: "#FFFFFF",
        height: largerScreen,
        width: "100%",
        zIndex: "50",
        ...props,
      }}
    >
      <div className="mt-5 ml-5 flex max-w-[330px] xm:max-w-[360px] 2xl:max-w-[100%] 2xl:w-[50%] 2xl:mx-auto">
        <div
          className="border border-black rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
          onClick={() => setShow(false)}
        >
          <i className="fa-solid fa-arrow-left text-black p-2"></i>
        </div>
        <p className="font-bold text-lg xl:text-base text-center w-full">
          Search Form
        </p>
      </div>
      <div className="bg-[#EBEBEB] relative w-[92%] 2xl:w-[50%] min-h-[60px] mt-7 mx-auto rounded-xl mb-5 flex items-center">
        <i className="fa-solid fa-magnifying-glass text-black pl-4"></i>
        <input
          type="text"
          placeholder="Search locations..."
          value={search}
          onChange={(e) => handleLocationSearch(e.target.value)}
          onKeyUp={(e) => handleSearch(e)}
          className="bg-transparent px-2 text-black outline-none border-none focus:ring-0 w-full xl:text-sm"
        />
      </div>
      <div className="mt-5 ml-5 sm:mx-auto w-full sm:w-[92%] 2xl:w-[50%] xl:mr-auto">
        <p className="text-sm font-bold xl:text-xs">Recent Searches</p>
        {predictions.length ? (
          predictions.slice(0, 4).map((prediction: any) => (
            <div className="mt-3 flex cursor-pointer hover:bg-[#EBEBEB] rounded-xl" key={prediction.place_id} onClick={() => selectLocation(prediction.description)}>
              <div className="h-12 w-12 xl:h-10 xl:w-10 bg-[#EBEBEB] flex items-center justify-center rounded-xl">
                <i className="fa-regular fa-clock text-[28px] xl:text-[25px] text-black"></i>
              </div>
              <div className="flex flex-col ml-2">
                <p className="xl:text-sm">
                  {prediction.description.split(",")[0]}
                </p>
                <p className="text-sm xl:text-xs text-gray-500">
                  {prediction.description.split(",")[1].trim()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm font-bold mt-4">No Searches...</div>
        )}
      </div>
    </animated.div>
  );
};

export default SearchBarModal;
