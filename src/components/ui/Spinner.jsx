import { ImSpinner8 } from "react-icons/im";

const Spinner = ({ fullscreen = true }) => {
  return (
    <div
      className={`${
        fullscreen ? "h-[80vh]" : "my-4"
      } flex justify-center items-center`}
    >
      <ImSpinner8 className="text-5xl text-secondary-black animate-spin" />
    </div>
  );
};

export default Spinner;
