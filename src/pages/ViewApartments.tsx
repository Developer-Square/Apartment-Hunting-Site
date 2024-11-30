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
const ViewApartmentsPage = () => {
  const [showSearhBar, setshowSearhBar] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [search, setSearch] = useState("");
  // Show FilterBackdrop for the apartment modals at 1024px view
  const [showFilterBackdrop, setShowFilterBackdrop] = useState(false);
  const [showFullMap, setShowFullMap] = useState(false);
  const [showFilterScrollbar, setShowFilterScrollbar] = useState(false);

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

  return (
    <section className="apartments-page w-full h-full pt-2 text-black relative">
      {/* Login and Signup Modal */}
      {showWelcomeBackModal ? (
        <>
          <WelcomeBackSignin />
          <FilterBackdrop show={true} />
        </>
      ) : (
        <></>
      )}
      {showLoginModal ? (
        <>
          <LoginOrSignupModal />
          <FilterBackdrop show={true} />
        </>
      ) : (
        <></>
      )}
      {showConfirmPhoneNumber ? (
        <>
          <SmsAuthentication />
          <FilterBackdrop show={true} />
        </>
      ) : (
        <></>
      )}
      {showMoreOptionsModal ? (
        <>
          <MoreOptions />
          <FilterBackdrop show={true} />
        </>
      ) : (
        <></>
      )}
      {showFinishSignupModal ? (
        <>
          <FinishSignup />
          <FilterBackdrop show={true} />
        </>
      ) : (
        <></>
      )}
      {/* Hide the SearchBar when the Filters modal is open and vice versa */}
      {showSearhBar ? (
        <>
          <SearchBarModal
            show={showSearhBar}
            setShow={setshowSearhBar}
            search={search}
            setSearch={setSearch}
          />
          <FilterBackdrop show={showSearhBar} />
        </>
      ) : (
        <></>
      )}
      {showFilters ? (
        <>
          <Filters show={showFilters} setShow={setshowFilters} />
          <FilterBackdrop show={showFilters} />
        </>
      ) : (
        <></>
      )}
      {/* Show FilterBackdrop for the apartment modals at 1024px view */}
      {showFilterBackdrop && window.innerWidth >= 1024 ? (
        <FilterBackdrop show={true} />
      ) : (
        <></>
      )}
      
      <div className="fixed top-0 left-0 right-0 z-20 bg-[#0b1920]">
        <Navbar
          search={search}
          handleFilters={handleFilters}
          handleSearchBar={handleSearchBar}
        />
        <div className='text-white'>
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
      <div className="w-full text-white lg:flex lg:mx-2 2xl:max-w-[1500px] 3xl:max-w-[1700px] 2xl:mx-auto pt-[185px] relative">
        {search.length || showFullMap ? (
          <Map showFullMap={showFullMap} setShowFullMap={setShowFullMap} />
        ) : null}
        {!showFullMap ? (
          <Apartments
            search={search}
            setShowFilterBackdrop={setShowFilterBackdrop}
          />
        ) : null}
      </div>
      {!hideMenu && <PopupMenu />}
      <Footer />
    </section>
  );
};

export default ViewApartmentsPage;
