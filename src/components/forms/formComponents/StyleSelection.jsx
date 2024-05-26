import { AiOutlineExclamationCircle } from "react-icons/ai";
import customizeOptions from "../../../data/customizeOptions";
import CustomizeStyleOption from "./CustomizeStyleOption";

const StyleSelection = ({ register, errors, includeDefaultOption = false }) => {
  return (
    <>
      {/* Mapping through customizeOptions array */}
      {customizeOptions?.map((item) => (
        <div key={item._id}>
          <div className="flex justify-between items-center">
            <h5 className="font-medium mb-4">{item.title}</h5>

            {/* Display Error message if there is any */}
            {errors[item.title] && (
              <p className="text-xs text-nowrap text-red-600 flex items-center gap-1">
                <AiOutlineExclamationCircle />
                {errors[item.title]?.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-6 text-xs text-center">
            
            {includeDefaultOption && (
              <CustomizeStyleOption
                register={register}
                title={item.title}
                isDefault={true}
              />
            )}

            {/* Mapping through options of current item */}
            {item?.options?.map((option) => (
              <CustomizeStyleOption
                key={option.name}
                register={register}
                title={item.title}
                option={option}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default StyleSelection;
