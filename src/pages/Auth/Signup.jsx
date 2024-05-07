import useTitle from "../../hooks/useTitle";
import Title from "../../components/ui/Title";
import SignupForm from "../../components/forms/SignupForm";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  useTitle("Signup");

  const navigate = useNavigate();
  const location = useLocation();
  const requestedPath = location?.state?.requestedPath || "/";

  return (
    <>
      <Title>Signup</Title>
      <SignupForm requestedPath={requestedPath} />

      <p className="mt-10 text-sm text-center">
        Already have an account?{" "}
        <button
          className="text-primary"
          onClick={() => {
            navigate("/login", { state: { requestedPath } });
          }}
        >
          Login
        </button>
      </p>
    </>
  );
};

export default Signup;
