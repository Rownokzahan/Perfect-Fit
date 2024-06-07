import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Container from "../ui/Container";
import useManageAuth from "../../hooks/useManageAuth";
import { FcGoogle } from "react-icons/fc";

const AuthLayout = () => {
  const { loginWithGmail } = useManageAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const requestedPath = location?.state?.requestedPath || "/";

  // Callback function to handle successful login with Google or Facebook.
  const onSuccess = () => {
    navigate(requestedPath);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Container marginTop={12}>
          <div className="lg:grid lg:grid-cols-2 items-center pb-24">
            <img
              src="https://i.pinimg.com/564x/22/23/ca/2223ca9086cd27f4f7f086454587e5df.jpg"
              alt=""
              className="w-full max-h-[730px] object-cover object-top"
            />

            <div className="h-full lg:p-16 lg:border lg:rounded-e">
              <Outlet />

              <div className="relative my-12">
                <hr />
                <span className="bg-primary-white text-lg px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  Or
                </span>
              </div>

              <button
                className="flex items-center justify-center gap-2 w-full text-center border p-3 rounded shadow"
                onClick={() => loginWithGmail(onSuccess)}
              >
                <FcGoogle className="text-2xl" />
                <span className="font-medium">Continue with google</span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AuthLayout;
