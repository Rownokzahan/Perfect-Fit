import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import Container from "../ui/Container";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Container>
          <div className="lg:grid lg:grid-cols-2 items-center pb-24">
            <img
              src="https://i.pinimg.com/474x/58/a2/60/58a260b014718fe5199e61157a21086b.jpg"
              alt=""
              className="hidden lg:block w-full h-full object-cover lg:rounded-s"
            />

            <div className="h-full lg:p-16 lg:border lg:rounded-e">
              <Outlet />

              <div className="mt-16">
                <div className="relative mb-8">
                  <hr />
                  <span className="bg-primary-white px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    or continue with
                  </span>
                </div>

                <div className="flex mx-auto w-max gap-8">
                  <button className="button-round-black">
                    <FaGoogle />
                  </button>
                  <button className="button-round-black">
                    <FaFacebookF />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AuthLayout;
