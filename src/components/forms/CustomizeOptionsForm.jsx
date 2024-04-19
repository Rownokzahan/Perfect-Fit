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
        <div key={item.key}>
          <h5 className="font-medium mb-4">{item.name}</h5>
          <div className="flex flex-wrap gap-6 text-xs text-center">
            <label
              htmlFor={`default-${item.key}`}
              className="block h-20 relative cursor-pointer mb-6"
            >
              <input
                type="radio"
                value={`default-${item.key}`}
                name={item.key}
                id={`default-${item.key}`}
                defaultChecked
                className="hidden peer"
                onChange={() =>
                  updateSelectedOption(item.key, `default-${item.key}`)
                }
              />
              <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />
              <div className="h-full w-20 p-2 border rounded-lg peer-checked:border-primary-black flex justify-center items-center">
                <p>Default</p>
              </div>
              <p className="mt-1">As Shown</p>
            </label>

            {item?.types.map((type) => (
              <label
                htmlFor={type.value}
                className="block h-20 mb-6 relative cursor-pointer"
                key={type.value}
              >
                <input
                  type="radio"
                  value={type.value}
                  name={item.key}
                  id={type.value}
                  className="hidden peer"
                  onChange={() => updateSelectedOption(item.key, type.value)}
                />
                <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />

                <img
                  src={type.image}
                  alt=""
                  className="h-full w-20 p-2 border rounded-lg peer-checked:border-primary-black duration-75"
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
        <div className="grid grid-cols-4 gap-4 text-sm">
          <div className="space-y-2 relative">
            <input
              type="number"
              id="chest"
              name="chest"
              autoComplete="off"
              required
              placeholder="Chest"
              className="peer floating-input"
            />
            <label htmlFor="chest" className="floating-label">
              Chest
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="waist"
              name="waist"
              autoComplete="off"
              required
              placeholder="Waist"
              className="peer floating-input"
            />
            <label htmlFor="waist" className="floating-label">
              Waist
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="sleeve"
              name="sleeve"
              autoComplete="off"
              required
              placeholder="Sleeve"
              className="peer floating-input"
            />
            <label htmlFor="sleeve" className="floating-label">
              Sleeve
            </label>
          </div>

          <div className="space-y-2 relative">
            <input
              type="number"
              id="long"
              name="long"
              autoComplete="off"
              required
              placeholder="Long"
              className="peer floating-input"
            />
            <label htmlFor="long" className="floating-label">
              Long
            </label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="font-medium">Any Special Request/Info</h5>
        <div className="space-y-2 relative">
          <textarea
            id="request"
            name="request"
            autoComplete="off"
            placeholder="Request"
            defaultValue={""}
            rows="2"
            className="peer floating-input"
          ></textarea>
          <label htmlFor="request" className="floating-label">
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
