import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import useManageAuth from "../../hooks/useManageAuth";

const SignupForm = ({ requestedPath }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUserWithEmail, loading, error } = useManageAuth();
  const navigate = useNavigate();

  // Form submission handler
  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    // Callback function for success
    const onSuccess = () => {
      navigate(requestedPath); // Redirect to the requested page
    };

    // Function to create a user
    createUserWithEmail(name, email, password, onSuccess);
  };

  return (
    <>
      {/* Display error messages */}
      {error && (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {error}
        </p>
      )}

      {/* Signup form */}
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        {/* Name input field */}
        <div className="space-y-2 relative">
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Your Name"
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
            Your Name
          </label>
        </div>

        {/* Email input field */}
        <div className="space-y-2 relative">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email Address"
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

        {/* Password input field */}
        <div className="space-y-2 relative">
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            className={`peer floating-input ${
              errors.password ? "border-red-600 focus:border-red-600" : ""
            }`}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 character",
              },
            })}
          />

          {errors.password && (
            <p className="text-red-600 text-xs ps-px flex items-center gap-2">
              <AiOutlineExclamationCircle />
              {errors.password.message}
            </p>
          )}

          <label htmlFor="password" className="floating-label">
            Password
          </label>
        </div>

        {/* Submit button */}
        {loading ? (
          <button
            type="button"
            className="button-black-solid w-full flex items-center justify-center gap-2"
            disabled
          >
            <ImSpinner9 className="animate-spin" />
          </button>
        ) : (
          <button type="submit" className="button-black-solid w-full">
            Sign Up
          </button>
        )}
      </form>
    </>
  );
};

export default SignupForm;
