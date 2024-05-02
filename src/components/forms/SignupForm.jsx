import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../../redux/features/api/authApi";
import { useCreateUserMutation } from "../../redux/features/api/userApi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch();
  const { error: signupError, loading } = useSelector(
    (state) => state.authSlice
  );
  const [saveUserToDatabase] = useCreateUserMutation();
  const [databaseError, setDatabaseError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const requestedPage = location?.state?.from?.pathname || "/";


  // Form submission handler
  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    // Sign up user
    const user = await signUp(name, email, password, dispatch);
    if (signupError) {
      return;
    }

    // Save user to database
    await saveUserToDatabase(user)
      .unwrap()
      .then((payload) => {
        console.log("fulfilled", payload);
        navigate(requestedPage); // Redirect to the requested page
      })
      .catch((error) => {
        console.error("rejected", error);
        const errorMessage =
          "Something went wrong with the login. Please try again.";
        setDatabaseError(errorMessage);
      });
  };

  return (
    <>
      {/* Display signup or database error messages */}
      {signupError ? (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {signupError}
        </p>
      ) : databaseError ? (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {databaseError}
        </p>
      ) : (
        <></>
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
