import { AiOutlineExclamationCircle } from "react-icons/ai";

const measurementInputs = ["Chest", "Waist", "Height", "Arm Length"];

const MeasurementInputs = ({ register, errors }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h5 className="font-medium">Measurements</h5>
        <p className="text-sm">Measurements must be provided in inches</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {measurementInputs.map((input) => (
          <div className="space-y-2 relative" key={input}>
            <input
              type="number"
              id={input}
              name={input}
              min="0"
              autoComplete="off"
              placeholder={input}
              className={`peer floating-input ${
                errors[input] ? "border-red-600" : ""
              }`}
              {...register(input, { required: "Required" })}
            />
            {errors[input] && (
              <p className="text-red-600 text-xs ps-px flex items-center gap-2">
                <AiOutlineExclamationCircle />
                {errors[input].message}
              </p>
            )}
            <label htmlFor={input} className="floating-label">
              {input}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeasurementInputs;
