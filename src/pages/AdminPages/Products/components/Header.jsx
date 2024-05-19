import { Link } from "react-router-dom";
import Title from "../../../../components/ui/Title";

const Header = () => {
  return (
    <div className="flex items-start justify-between">
      <Title position="left">Products</Title>
      <Link
        to={"/admin/add-product"}
        className="py-2 px-4 rounded bg-primary-black text-primary-white hover:bg-primary font-semibold whitespace-nowrap duration-300"
      >
        Add Product
      </Link>
    </div>
  );
};

export default Header;