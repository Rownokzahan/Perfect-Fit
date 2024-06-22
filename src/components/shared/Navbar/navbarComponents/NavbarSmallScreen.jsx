import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../ui/Logo";
import MainNavItems from "./MainNavItems";
import { useState } from "react";
import BadgeLinks from "./BadgeLinks";
import UserProfileLinks from "./UserProfileLinks";

const NavbarSmallScreen = ({ scrolled, isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-16 lg:hidden">
      {/* Closed Navbar */}
      <div
        className={`flex justify-between items-center w-full p-4 border-b ${
          scrolled
            ? "fixed bg-primary-white text-primary-black"
            : isHomePage
            ? "absolute text-primary-white border-b-0"
            : "absolute bg-primary-white text-primary-black"
        } top-0 right-0 z-40 transition duration-300`}
      >
        <Logo />

        {/* Navbar opening button */}
        <button onClick={toggleNavbar}>
          <RxHamburgerMenu className="text-xl" />
        </button>
      </div>

      {/* Opened Navbar */}
      <div
        className={`w-full shadow overflow-hidden fixed top-0 z-50 ${
          isOpen ? "h-[550px]" : "h-0"
        } transition-height duration-300 bg-primary-white text-primary-black`}
      >
        <div className="flex justify-between items-center w-full p-4 border-b shadow">
          <Logo />

          {/* Navbar closing button */}
          <button onClick={toggleNavbar} className="text-xl">
            <RxCross2 />
          </button>
        </div>

        <div className="pb-4">
          <div className="grid divide-y [&>*]:p-4">
            <MainNavItems toggleNavbar={toggleNavbar} />
          </div>
          <div className="grid [&>*]:p-4 text-2xl divide-y border-y">
            <BadgeLinks toggleNavbar={toggleNavbar} />
          </div>
          <UserProfileLinks toggleNavbar={toggleNavbar} />
        </div>
      </div>
    </nav>
  );
};

export default NavbarSmallScreen;
