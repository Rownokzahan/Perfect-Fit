import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import errorImage from "../../assets/images/errorImage.jpeg";

const Error404 = () => {
  useTitle("Error");

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <div className="flex items-center justify-center text-9xl font-medium gap-4">
            <span>4</span>
            <img
              src={errorImage}
              className="w-24 p-2 rounded-full border-2 border-primary-black"
              alt=""
            />
            <span>4</span>
          </div>
          <p className="text-lg font-medium mt-8 mb-4 font-crimson text-accent_1">
            Oops! We couldn&apos;t find the page you were looking for. <br />
            Please check the URL and try again.
          </p>

          <Link to={"/"}>
            <button className="button-black-solid">Back to home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;
