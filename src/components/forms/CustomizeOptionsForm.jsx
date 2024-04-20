import { useState } from "react";
import { PiCheckCircleFill } from "react-icons/pi";
import customizeOptions from "../../data/customizeOptions";
import { useNavigate } from "react-router-dom";

const CustomizeOptionsForm = ({ dress_id = null }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);

    navigate("/cart");
  };

  const updateSelectedOption = (key, value) => {
    setSelectedOptions({ ...selectedOptions, [key]: value });
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <input type="hidden" name="dress_id" value={dress_id} />
      {customizeOptions?.map((item) => (
        <div key={item.name}>
          <h5 className="font-medium mb-4">{item.name}</h5>
          <div className="flex flex-wrap gap-2 sm:gap-6 text-xs text-center">
            <label
              htmlFor={`default-${item.name}`}
              className="block h-16 sm:h-20 relative cursor-pointer mb-6"
            >
              <input
                type="radio"
                value={`default`}
                name={item.name}
                id={`default-${item.name}`}
                defaultChecked
                className="hidden peer"
                onChange={() =>
                  updateSelectedOption(item.name, `default-${item.name}`)
                }
              />
              <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />
              <div className="h-full w-16 sm:w-20 p-2 border rounded-lg peer-checked:border-primary-black flex justify-center items-center">
                <p>Default</p>
              </div>
              <p className="mt-1">As Shown</p>
            </label>

            {item?.types.map((type) => (
              <label
                htmlFor={type.name}
                className="block h-16 sm:h-20 mb-6 relative cursor-pointer"
                key={type.name}
              >
                <input
                  type="radio"
                  value={type.name}
                  name={item.name}
                  id={type.name}
                  className="hidden peer"
                  onChange={() => updateSelectedOption(item.name, type.name)}
                />
                <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />

                <img
                  src={type.image}
                  alt=""
                  className="h-full w-16 sm:w-20 p-2 border rounded-lg peer-checked:border-primary-black duration-75"
                />
                <p className="mt-1">{type.name}</p>
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-4">
        <div className="space-y-1">
          <h5 className="font-medium">Measurements</h5>
          <p className="text-sm">Measurements must be provided in inches</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="space-y-2 relative">
            <input
              type="number"
              id="Chest"
              name="Chest"
              autoComplete="off"
              required
              placeholder="Chest"
              className="peer floating-input"
            />
            <label htmlFor="Chest" className="floating-label">
              Chest
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="Waist"
              name="Waist"
              autoComplete="off"
              required
              placeholder="Waist"
              className="peer floating-input"
            />
            <label htmlFor="Waist" className="floating-label">
              Waist
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="Sleeve"
              name="Sleeve"
              autoComplete="off"
              required
              placeholder="Sleeve"
              className="peer floating-input"
            />
            <label htmlFor="Sleeve" className="floating-label">
              Sleeve
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="Long"
              name="Long"
              autoComplete="off"
              required
              placeholder="Long"
              className="peer floating-input"
            />
            <label htmlFor="Long" className="floating-label">
              Long
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-medium">Any Special Request/Info</h5>
        <div className="space-y-2 relative">
          <textarea
            id="Request"
            name="Request"
            autoComplete="off"
            placeholder="Request"
            defaultValue={""}
            rows="2"
            className="peer floating-input"
          ></textarea>
          <label htmlFor="Request" className="floating-label">
            Request
          </label>
        </div>
      </div>

      <button type="submit" className="button-black-solid w-full">
        Add to Cart
      </button>
    </form>
  );
};

export default CustomizeOptionsForm;
