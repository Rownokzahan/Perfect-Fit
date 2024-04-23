import ActiveLink from "./ActiveLink";
import Logo from "../../ui/Logo";
import sidebarLinks from "../../../data/sidebarLinks";

const Sidebar = () => {
  return (
    <div className="border-e bg-white">
      <div className="p-4 px-6 border-b flex justify-center items-center">
        <Logo />
      </div>

      <div className="p-6 flex flex-col gap-4 text-sm font-medium w-60">
        {sidebarLinks?.map((item, index) => (
          <ActiveLink key={index} item={item}></ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
