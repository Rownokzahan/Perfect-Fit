import { PiCheckCircleFill } from "react-icons/pi";

const CustomizeStyleOption = ({
  register,
  title,
  option,
  isDefault = false, // Flag to indicate if it's the default option
}) => {
  const { name, image } = option || {};

  return (
    <div className="space-y-1">
      <label
        htmlFor={name}
        className="block h-16 w-16 sm:w-20 sm:h-20 p-2 border rounded-lg relative cursor-pointer has-[:checked]:border-primary-black duration-75"
      >
        {/* Display default text or image */}
        {isDefault ? (
          <div className="h-full w-full flex justify-center items-center">
            <p>Default</p>
          </div>
        ) : (
          <img src={image} alt={name} className="h-full w-full" />
        )}

        {/* Radio input for selecting the option */}
        <input
          type="radio"
          name={title}
          id={isDefault ? `default-${title}` : name}
          value={isDefault ? `Default` : name}
          defaultChecked={isDefault}
          className="hidden peer"
          {...register(title, { required: `Please Select a ${title}` })}
        />

        {/* Check mark icon */}
        <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />
      </label>

      {/* Display option name or 'As Shown' */}
      <p>{isDefault ? "As Shown" : name}</p>
    </div>
  );
};

export default CustomizeStyleOption;
