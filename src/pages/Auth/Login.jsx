import useTitle from "../../hooks/useTitle";
import Title from "../../components/ui/Title";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  useTitle("Login");

  return (
    <>
      <Title>Login</Title>
      <LoginForm />

      <p className="mt-10 text-sm text-center">
        Don&apos;t have an account?{" "}
        <a className="text-primary" href="/signup">
          Create New
        </a>
      </p>
    </>
  );
};

export default Login;
