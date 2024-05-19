import { TbShoppingBagSearch } from "react-icons/tb";

const NoProduct = () => {
  return (
    <div className="mt-24 text-center">
      <TbShoppingBagSearch className="text-8xl mx-auto mb-8" />
      <h3 className="text-xl font-semibold mb-2">Empty Shopping Bag</h3>
      <p className="mb-12">
        Looks like you haven&apos;t added anything to your shopping bag
      </p>
      <a href="/dresses" className="button-black-solid">
        Continue Shopping
      </a>
    </div>
  );
};

export default NoProduct;
