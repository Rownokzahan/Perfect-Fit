import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useManageAuth from "../../hooks/useManageAuth";

const LoginForm = ({ requestedPath }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { emailLogin, loading, error } = useManageAuth();

  // Form submission handler
  const onSubmit = async (data) => {
    const email = data?.email;
    const password = data?.password;

    // Callback function for success
    const onSuccess = () => {
      navigate(requestedPath); // Redirect to the requested page
    };

    // Function to login
    emailLogin(email, password, onSuccess);
  };

  return (
    <>
      {/* Display login error message */}
      {error && (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {error}
        </p>
      )}

      {/* Login form */}
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
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
            Login
          </button>
        )}
      </form>
    </>
  );
};

export default LoginForm;
