import ProductCard from "../../../../components/cards/ProductCard";

const ProductList = ({products}) => {
  return (
    <div className="p-8 grid grid-cols-4 gap-8">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;