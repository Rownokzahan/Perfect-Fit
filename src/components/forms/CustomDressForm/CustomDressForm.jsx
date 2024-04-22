import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FabricSelection from "./formComponents/FabricSelection";
import MeasurementInputs from "./formComponents/MeasurementInputs";
import SpecialRequest from "./formComponents/SpecialRequest";
import CustomOptionsSelection from "./formComponents/CustomOptionsSelection";

const CustomDressForm = () => {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/cart");
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
      <CustomOptionsSelection
        register={register}
        errors={errors}
        watch={watch}
      />
      <FabricSelection register={register} errors={errors} />
      <MeasurementInputs register={register} errors={errors} />
      <SpecialRequest register={register} />

      <button type="submit" className="button-black-solid w-full">
        Add to Cart
      </button>
    </form>
  );
};

export default CustomDressForm;
