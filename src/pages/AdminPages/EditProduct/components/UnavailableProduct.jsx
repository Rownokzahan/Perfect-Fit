import { TbBoxOff } from "react-icons/tb";

const UnavailableProduct = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="text-center">
        <TbBoxOff className="text-6xl mx-auto" />
        <h5 className="mt-4 font-medium text-xl">
          This product is unavailable.
        </h5>
      </div>
    </div>
  );
};

export default UnavailableProduct;