import { useState, useEffect } from "react";
import ActiveLink from "./ActiveLink";
import { useLocation } from "react-router-dom";
import Logo from "../../ui/Logo";
import {
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledUp = currentScrollPos < prevScrollPos;

      setScrolled(currentScrollPos > 100 && isScrolledUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    setIsHomePage(location.pathname === "/");
  }, [location]);

  const mainNavItems = (
    <>
      <ActiveLink to={"/"}>Home</ActiveLink>
      <ActiveLink to={"/dresses"}>Dresses</ActiveLink>
      <ActiveLink to={"/create-new"}>Create New</ActiveLink>
      <ActiveLink to={"/about-us"}>About Us</ActiveLink>
    </>
  );

  const userNavItems = (
    <>
      <ActiveLink to={"/wish-list"}>
        <div>
          <HiOutlineUserCircle />
        </div>
      </ActiveLink>
      <ActiveLink to={"/wish-list"}>
        <div className="relative">
          <HiOutlineHeart />
          <span className="absolute -top-2 -right-2 text-xs bg-primary px-1 rounded-full font-medium">
            0
          </span>
        </div>
      </ActiveLink>
      <ActiveLink to={"/cart"}>
        <div className="relative">
          <HiOutlineShoppingBag />
          <span className="absolute -top-2 -right-2 text-xs bg-primary px-1 rounded-full font-medium">
            0
          </span>
        </div>
      </ActiveLink>
    </>
  );

  return (
    <>
      {/* Navbar for large screen and sticks when it is scrolled up */}
      <nav
        className={`hidden lg:flex justify-between px-10 py-4 w-full ${
          scrolled
            ? "fixed top-0 bg-primary-white text-primary-black border-b"
            : isHomePage
            ? "text-primary-white relative"
            : "bg-primary-white text-primary-black border-b relative"
        } z-50 transition duration-300`}
      >
        <Logo />
        <div className="hidden lg:flex items-center gap-12 tracking-widest">
          {mainNavItems}
        </div>
        <div className="lg:text-2xl flex items-center gap-12">
          {userNavItems}
        </div>
      </nav>

      {/* Navbar for smaller screen */}
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

          {/* Navabar opening button */}
          <button onClick={() => setIsOpen(true)}>
            <RxHamburgerMenu className="text-xl" />
          </button>

          <div
            className={`${isOpen ? "left-0" : "-left-full"} 
        absolute z-50 w-full top-0 bottom-0 duration-300`}
          >
            <div className="relative bg-primary-white text-primary-black text-center p-10 pt-14">
              <Logo />
              <div className="grid gap-6 my-10">{mainNavItems}</div>
              <div className="flex gap-10 justify-center text-xl">
                {userNavItems}
              </div>

              {/* Navabar closing button */}
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
    </>
  );
};

export default Navbar;
