import Logo from "../../../ui/Logo";
import MainNavItems from "./MainNavItems";
import UserNavItems from "./UserNavItems";

const NavbarLargeScreen = ({ scrolled, isHomePage }) => {
  return (
    <div
      className={`flex justify-between px-[5%] pt-4 pb-2 w-full ${
        scrolled
          ? "fixed top-0 bg-primary-white text-primary-black border-b"
          : isHomePage
          ? "text-primary-white relative"
          : "bg-primary-white text-primary-black border-b relative"
      } z-50 transition duration-300`}
    >
      <Logo />
      <div className="flex items-center gap-12 tracking-widest">
        {<MainNavItems />}
      </div>
      <div className="text-2xl flex items-center gap-12">
        {<UserNavItems />}
      </div>
    </div>
  );
};

export default NavbarLargeScreen;
