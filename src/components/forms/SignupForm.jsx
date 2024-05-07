import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signupWithEmail } from "../../redux/features/auth/authSlice";
import { useCreateUserMutation } from "../../redux/features/api/userApi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";

const SignupForm = ({requestedPath}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const { error: signupError, loading } = useSelector((state) => state.auth);
  const [saveUserToDatabase] = useCreateUserMutation();
  const [databaseError, setDatabaseError] = useState(null);
  const dispatch = useDispatch();

  // Form submission handler
  const onSubmit = async (data) => {
    setDatabaseError(null);

    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    // Signup user
    dispatch(signupWithEmail({ name, email, password }))
      .unwrap()
      .then((user) => {
        // Save user to database
        saveUserToDatabase(user)
          .unwrap()
          .then(() => {
            navigate(requestedPath); // Redirect to the requested page
          })
          .catch((error) => {
            console.error("rejected", error);
            const errorMessage = "Something went wrong. Please try again.";
            setDatabaseError(errorMessage);
          });

        reset();
      })
      .catch(() => {
        return;
      });
  };

  return (
    <>
      {/* Display signup or database error messages */}
      {signupError || databaseError ? (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {signupError ? signupError : databaseError}
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
