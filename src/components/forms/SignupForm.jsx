import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/features/api/authApi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { useCreateUserMutation } from "../../redux/features/api/userAPI";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { error: signupError, loading } = useSelector(
    (state) => state.authSlice
  );
  const [saveUserToDB, { error }] = useCreateUserMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const requestedPage = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    const user = signup(name, email, password, dispatch);
    if (signupError) {
      return;
    }

    saveUserToDB(user);
    if (error) {
      console.log(error);
      console.log(error);
    }

    navigate(requestedPage);
  };

  return (
    <>
      {signupError ? (
        <p className="text-red-600 font-medium text-center text-sm relative -top-10">
          {signupError}
        </p>
      ) : (
        <></>
      )}

      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
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
