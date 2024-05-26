import { useSelector } from "react-redux";
import { useAddToCartMutation } from "../../redux/features/api/cartApi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AddToCartModal from "../modals/AddToCartModal";
import { ImSpinner9 } from "react-icons/im";
import StyleSelection from "./formComponents/StyleSelection";
import MeasurementInputs from "./formComponents/MeasurementInputs";
import SpecialRequest from "./formComponents/SpecialRequest";

const CustomizeForm = ({ image, name, price }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (data) => {
    console.log(data);
    const item = {
      name,
      price,
      image,
      ...data,
    };

    addToCart({ userId: user?._id, item })
      .unwrap()
      .then(() => {
        reset();
        setIsModalOpen(true);
      })
      .catch((error) => console.error("rejected", error));
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <StyleSelection register={register} errors={errors} includeDefaultOption={true} />
        <MeasurementInputs register={register} errors={errors} />
        <SpecialRequest register={register} />

        {/* Add to cart button */}
        {isLoading ? (
          <button
            type="button"
            className="button-black-solid w-full flex items-center justify-center gap-2"
            disabled
          >
            <ImSpinner9 className="animate-spin" />
          </button>
        ) : (
          <button type="submit" className="button-black-solid w-full">
            Add to Cart
          </button>
        )}
      </form>
      <AddToCartModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  );
};

export default CustomizeForm;
