import { useParams } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import { useGetDressByIdQuery } from "../../../redux/features/api/dressApi";
import Title from "../../../components/ui/Title";
import EditProductForm from "../../../components/forms/EditProductForm";
import Spinner from "../../../components/ui/Spinner";
import UnavailableProduct from "./components/UnavailableProduct";

const EditProduct = () => {
  useTitle("Edit Product");

  const { product_id: dress_id } = useParams();
  const { data, isLoading, error } = useGetDressByIdQuery(dress_id);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    return <UnavailableProduct />;
  }

  return (
    <div>
      <Title>Update Product</Title>
      <EditProductForm product={data} />
    </div>
  );
};

export default EditProduct;
