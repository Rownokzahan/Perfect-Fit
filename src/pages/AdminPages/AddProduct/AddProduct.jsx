import AddProductForm from "../../../components/forms/AddProductForm";
import Title from "../../../components/ui/Title";
import useTitle from "../../../hooks/useTitle";

const AddProduct = () => {
  useTitle("Add Product");

  return (
    <div>
      <Title>Add Product</Title>

      <AddProductForm />
    </div>
  );
};

export default AddProduct;
