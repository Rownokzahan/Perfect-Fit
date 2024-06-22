import ActiveLink from "./ActiveLink";

const MainNavItems = ({ toggleNavbar }) => {
  return (
    <>
      <ActiveLink to={"/"} toggleNavbar={toggleNavbar}>
        Home
      </ActiveLink>
      <ActiveLink to={"/dresses"} toggleNavbar={toggleNavbar}>
        Dresses
      </ActiveLink>
      <ActiveLink to={"/custom-dress"} toggleNavbar={toggleNavbar}>
        Custom Dress
      </ActiveLink>
    </>
  );
};

export default MainNavItems;
