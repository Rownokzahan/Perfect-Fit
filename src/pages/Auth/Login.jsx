import { Helmet } from "react-helmet-async";
import Title from "../../components/ui/Title";
import LoginForm from "../../components/forms/LoginForm";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Perfect Fit | Login</title>
      </Helmet>

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
