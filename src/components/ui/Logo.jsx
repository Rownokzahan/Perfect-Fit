import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link
        to={"/"}
        className="text-2xl font-semibold tracking-widest whitespace-nowrap space-x-2"
      >
        <span>Perfect</span>
        <span>Fit</span>
      </Link>
    </div>
  );
};

export default Logo;
