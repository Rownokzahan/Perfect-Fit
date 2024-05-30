import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarLargeScreen from "./navbarComponents/NavbarLargeScreen";
import NavbarSmallScreen from "./navbarComponents/NavbarSmallScreen";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
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

  return (
    <>
      {/* Navbar for large screen and sticks when it is scrolled up */}
      <div className="hidden lg:block">
        <NavbarLargeScreen scrolled={scrolled} isHomePage={isHomePage} />
      </div>

      {/* Navbar for smaller screen */}
      <div className="lg:hidden">
        <NavbarSmallScreen scrolled={scrolled} isHomePage={isHomePage} />
      </div>
    </>
  );
};

export default Navbar;
