import { LuPackageSearch } from "react-icons/lu";

const NoOrders = () => {
  return (
    <div className="mt-24 text-center">
      <LuPackageSearch className="text-8xl mx-auto mb-8" />
      <h3 className="text-xl font-semibold mb-2">No Order Found</h3>
      <p className="mb-12">Looks like you haven&apos;t ordered anything yet</p>
      <a href="/dresses" className="button-black-solid">
        Continue Shopping
      </a>
    </div>
  );
};

export default NoOrders;