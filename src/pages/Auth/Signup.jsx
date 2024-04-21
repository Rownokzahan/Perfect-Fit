import { Helmet } from "react-helmet-async";
import Title from "../../components/ui/Title";
import SignupForm from "../../components/forms/SignupForm";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Perfect Fit | Signup</title>
      </Helmet>

      <Title>Signup</Title>
      <SignupForm />

      <p className="mt-10 text-sm text-center">
        Already have an account?{" "}
        <a className="text-primary" href="/login">
          Login
        </a>
      </p>
    </>
  );
};

export default Signup;
