import { Link } from "react-router-dom";

const Logo = () => {
  return (
    
      <Link
        to={"/"}
        className="text-2xl font-semibold whitespace-nowrap space-x-2"
      >
        <span>Perfect</span>
        <span>Fit</span>
      </Link>
    
  );
};

export default Logo;
