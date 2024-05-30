import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../ui/Logo";
import MainNavItems from "./MainNavItems";
import UserNavItems from "./UserNavItems";
import { useState } from "react";

const NavbarSmallScreen = ({ scrolled, isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-16 lg:hidden">
      <div
        className={`flex justify-between items-center w-full px-4 py-4 border-b ${
          scrolled
            ? "fixed bg-primary-white text-primary-black"
            : isHomePage
            ? "absolute text-primary-white border-b-0"
            : "absolute bg-primary-white text-primary-black"
        } top-0 z-40 transition duration-300`}
      >
        <Logo />

        {/* Navbar opening button */}
        <button onClick={() => setIsOpen(true)}>
          <RxHamburgerMenu className="text-xl" />
        </button>

        <div
          className={`${isOpen ? "left-0" : "-left-full"}
        absolute z-50 w-full top-0 bottom-0 duration-300`}
        >
          <div className="relative bg-primary-white text-primary-black text-center p-10 pt-14">
            <Logo />
            <div className="grid gap-6 my-10">
              <MainNavItems />
            </div>
            <div className="flex gap-10 justify-center text-xl">
              <UserNavItems />
            </div>

            {/* Navbar closing button */}
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl absolute top-4 right-4"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarSmallScreen;
