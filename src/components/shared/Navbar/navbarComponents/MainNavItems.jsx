import ActiveLink from "./ActiveLink";

const MainNavItems = () => {
  return (
    <>
      <ActiveLink to={"/"}>Home</ActiveLink>
      <ActiveLink to={"/dresses"}>Dresses</ActiveLink>
      <ActiveLink to={"/custom-dress"}>Custom Dress</ActiveLink>
    </>
  );
};

export default MainNavItems;
