import { useContext, useEffect, useMemo, useState } from "react";
import {
  Apartments,
  FilterBackdrop,
  Filters,
  SearchBarModal,
  Map,
  Footer,
  PopupMenu,
  FilterScrollbar,
} from "../components";
import { useBackToTop } from "src/hooks/useBackToTop";
import Navbar from "@/components/view-apartments/Navbar";
import { ModalContext } from "@/context/modalContext";
import LoginOrSignupModal from "@/components/auth/LoginOrSignupModal";
import { ApartmentsContext } from "@/context/apartmentsContext";
import SmsAuthentication from "@/components/auth/SmsAuthentication";
import FinishSignup from "@/components/auth/FinishSignup";
import MoreOptions from "@/components/auth/MoreOptions";
import WelcomeBackSignin from "@/components/auth/WelcomeBackSignin";
import ErrorBoundary from "./ErrorBoundary";
import axios from "axios";

declare global {
  interface Window {
    google: any;
  }
}

const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const [predictions, setPredictions] = useState([])
  // Show FilterBackdrop for the apartment modals at 1024px view
  const [showFilterBackdrop, setShowFilterBackdrop] = useState(false);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);
  const [showFilterScrollbar, setShowFilterScrollbar] = useState(false);
  const [properties, setProperties] = useState([])

  const { hideMenu, setHideMenu } = useContext(ModalContext);
  const {
    showLoginModal,
    showConfirmPhoneNumber,
    showFinishSignupModal,
    showMoreOptionsModal,
    showWelcomeBackModal,
  } = useContext(ApartmentsContext);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setHideMenu(true);
      return;
    }
    setHideMenu(false);
  }, [setHideMenu]);

  useEffect(() => {
    // Stop outside scrolling when any of the following modals are open.
    if (
      showSearhBar ||
      showFilters ||
      showLoginModal ||
      showConfirmPhoneNumber ||
      showFinishSignupModal ||
      showMoreOptionsModal ||
      showWelcomeBackModal
    ) {
      document.body.classList.add("body-style");
      setHideMenu(true);
      return;
    }

    // Hide the popup menu on larger screens.
    if (window.innerWidth < 768) {
      setHideMenu(false);
    }
    document.body.classList.remove("body-style");
  }, [
    showSearhBar,
    showFilters,
    setHideMenu,
    showLoginModal,
    showConfirmPhoneNumber,
    showFinishSignupModal,
    showMoreOptionsModal,
    showWelcomeBackModal,
  ]);

  useEffect(() => {
    const location = localStorage.getItem('location')

    const checkGoogleMapsLoaded = () => {
      if (window.google && window.google.maps && location?.length) {
        setSearch(location)
        selectLocation(location)
        setIsGoogleLoaded(true);
      } else {
        setTimeout(checkGoogleMapsLoaded, 100);
      }
    };

    checkGoogleMapsLoaded();
  }, []);

  // Hide the filter scrollbar when any of the modals are open.
  useMemo(() => {
    if (showSearhBar || showFilters || showFilterBackdrop) {
      setShowFilterScrollbar(true);
    } else {
      setShowFilterScrollbar(false);
    }
  }, [showSearhBar, showFilters, showFilterBackdrop]);

  const { topFunction } = useBackToTop();

  const handleFilters = () => {
    setshowFilters(true);
    topFunction();
  };

  const handleSearchBar = () => {
    setshowSearhBar(true);
    topFunction();
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
            const endpoint = import.meta.env.PROD ? `https://property-management-site-backend.onrender.com` : `http://localhost:5000`
            const url = `${endpoint}/api/v1/nearbyproperties?longitude=${lng}&latitude=${lat}&maxDistance=${distance}`
            const response = await axios.get(url, {
              headers: {
                "Content-Type": "application/json",
              }
            })
            setProperties(response.data.results)
          }
        } else {
          setProperties([])
          console.error("Geocoding failed:", status);
        }
      });
    } catch (error) {
      console.error("Error getting coordinates:", error);
    }

    setshowSearhBar(false);
  };

  return (
    <section className="apartments-page w-full h-full pt-2 text-black relative">
      {/* Login and Signup Modal */}
      <ErrorBoundary>
        {showWelcomeBackModal ? (
          <>
            <WelcomeBackSignin />
            <FilterBackdrop show={true} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showLoginModal ? (
          <>
            <LoginOrSignupModal />
            <FilterBackdrop show={true} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showConfirmPhoneNumber ? (
          <>
            <SmsAuthentication />
            <FilterBackdrop show={true} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showMoreOptionsModal ? (
          <>
            <MoreOptions />
            <FilterBackdrop show={true} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showFinishSignupModal ? (
          <>
            <FinishSignup />
            <FilterBackdrop show={true} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showSearhBar ? (
          <>
            <SearchBarModal
              show={showSearhBar}
              setShow={setshowSearhBar}
              search={search}
              setSearch={setSearch}
              predictions={predictions}
              setPredictions={setPredictions}
              setProperties={setProperties}
              selectLocation={selectLocation}
            />
            <FilterBackdrop show={showSearhBar} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showFilters ? (
          <>
            <Filters show={showFilters} setShow={setshowFilters} />
            <FilterBackdrop show={showFilters} />
          </>
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        {showFilterBackdrop && window.innerWidth >= 1024 ? (
          <FilterBackdrop show={true} />
        ) : (
          <></>
        )}
      </ErrorBoundary>
      <ErrorBoundary>
        <div className="fixed top-0 left-0 right-0 z-20 bg-[#0b1920]">
          <Navbar
            search={search}
            handleFilters={handleFilters}
            handleSearchBar={handleSearchBar}
          />
          <div className="text-white">
            {window.innerWidth >= 768 || !search.length ? (
              <FilterScrollbar
                search={search}
                showFilters={
                  window.innerWidth >= 1024 ? showFilterScrollbar : showFilters
                }
                handleFilters={handleFilters}
              />
            ) : null}
          </div>
        </div>
      </ErrorBoundary>
      <div className="w-full text-white lg:flex lg:mx-2 2xl:max-w-[1500px] 3xl:max-w-[1700px] 2xl:mx-auto pt-[185px] relative">
        {(search.length || showFullMap) && isGoogleLoaded ? (
          <ErrorBoundary>
            <Map showFullMap={showFullMap} setShowFullMap={setShowFullMap} />
          </ErrorBoundary>
        ) : null}
        {!showFullMap ? (
          <ErrorBoundary>
            <Apartments
              search={search}
              setShowFilterBackdrop={setShowFilterBackdrop}
              properties={properties}
            />
          </ErrorBoundary>
        ) : null}
      </div>
      <ErrorBoundary>
        {!hideMenu && <PopupMenu />}
        <Footer />
      </ErrorBoundary>
    </section>
  );
};

export default ViewApartmentsPage;
