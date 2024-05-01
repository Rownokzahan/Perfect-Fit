import useTitle from "../../hooks/useTitle";
import Title from "../../components/ui/Title";
import SignupForm from "../../components/forms/SignupForm";

const Signup = () => {
  useTitle("Signup");

  return (
    <>
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
