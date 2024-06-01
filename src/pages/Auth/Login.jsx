import useTitle from "../../hooks/useTitle";
import Title from "../../components/ui/Title";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  useTitle("Login");

  const navigate = useNavigate();
  const location = useLocation();
  const requestedPath = location?.state?.requestedPath || "/";

  return (
    <>
      <Title>Login</Title>
      <LoginForm requestedPath={requestedPath} />

      <p className="mt-10 text-sm text-center">
        Don&apos;t have an account?{" "}
        <button
          className="text-primary"
          onClick={() => {
            navigate("/auth/signup", { state: { requestedPath } });
          }}
        >
          Create New
        </button>
      </p>
    </>
  );
};

export default Login;
