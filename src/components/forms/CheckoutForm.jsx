import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useClearCartMutation } from "../../redux/features/api/cartApi";
import useUser from "../../hooks/useUser";
import { ImSpinner9 } from "react-icons/im";
import { useCreateOrderMutation } from "../../redux/features/api/orderApi";
import useCart from "../../hooks/useCart";

const CheckoutForm = ({ setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();
  const [clearCart, { isLoading: isClearingCart }] = useClearCartMutation();
  const { user } = useUser();
  const { cartItems, totalPrice } = useCart();

  const onSubmit = (data) => {
    const order = {
      recipient_info: { ...data },
      totalPrice,
      items: cartItems.map(({ created_at, ...rest }) => ({
        ...rest,
      })),
    };

    createOrder({ userId: user?._id, order })
      .unwrap()
      .then(() => {
        clearCart(user?._id)
          .unwrap()
          .then(() => {
            reset();
            setIsModalOpen(true);
          })
          .catch((error) => console.error("Clear cart rejected", error));
      })
      .catch((error) => console.error("Create order rejected", error));
  };

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 relative">
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Full Name"
            defaultValue={user?.name}
            className={`peer floating-input ${
              errors.name ? "border-red-600 focus:border-red-600" : ""
            }`}
            {...register("name", { required: "Name is required" })}
          />

          {errors.name && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.name.message}
            </p>
          )}

          <label htmlFor="name" className="floating-label">
            Full Name
          </label>
        </div>

        <div className="space-y-2 relative">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email Address"
            defaultValue={user?.email}
            className={`peer floating-input ${
              errors.email ? "border-red-600 focus:border-red-600" : ""
            }`}
            {...register("email", { required: "Email is required" })}
          />

          {errors.email && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.email.message}
            </p>
          )}

          <label htmlFor="email" className="floating-label">
            Email Address
          </label>
        </div>

        <div className="space-y-2 relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="off"
            placeholder="Phone Number"
            className={`peer floating-input ${
              errors.phone ? "border-red-600 focus:border-red-600" : ""
            }`}
            {...register("phone", { required: "Phone number is required" })}
          />

          {errors.phone && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.phone.message}
            </p>
          )}

          <label htmlFor="phone" className="floating-label">
            Phone Number
          </label>
        </div>

        <div className="space-y-2 relative">
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Delivery Address"
            className={`peer floating-input ${
              errors.address ? "border-red-600 focus:border-red-600" : ""
            }`}
            {...register("address", {
              required: "Delivery address is required",
            })}
          />

          {errors.address && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.address.message}
            </p>
          )}

          <label htmlFor="address" className="floating-label">
            Delivery Address
          </label>
        </div>

        <p className="border rounded px-5 py-3 flex items-center justify-between">
          Cash On Delivery
          <FaCheckCircle className="text-primary-black" />
        </p>

        {/* Place order button */}
        {isCreatingOrder || isClearingCart ? (
          <button
            type="button"
            className="button-black-solid w-full flex items-center justify-center gap-2"
            disabled
          >
            <ImSpinner9 className="animate-spin" />
          </button>
        ) : (
          <button type="submit" className="button-black-solid w-full">
            Place Order
          </button>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
