import { AiOutlineExclamationCircle } from "react-icons/ai";
import customizeOptions from "../../../../data/customizeOptions";
import { PiCheckCircleFill } from "react-icons/pi";
import DressAssembler from "../../../shared/DressAssembler";

const CustomOptionsSelection = ({ register, errors, watch }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-center">
      <div className="col-span-2">
        {customizeOptions?.map((item) => (
          <div key={item.name}>
            <h5 className="font-medium mb-4">{item.name}</h5>

            <div className="flex flex-wrap gap-2 sm:gap-6 text-xs text-center">
              {item?.types?.map((type, index) => (
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
                    {...(index === 0
                      ? {
                          ...register(item.name, {
                            required: `Please Select a ${item.name}`,
                          }),
                        }
                      : { ...register(item.name) })}
                  />

                  {index === 0 && errors[item.name] && (
                    <p className="text-xs text-nowrap text-red-600 flex items-center gap-2 absolute -top-9 -right-[310px]">
                      <AiOutlineExclamationCircle />
                      {errors[item.name]?.message}
                    </p>
                  )}
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
      </div>

      <div>
        <DressAssembler
          bodice={watch("Bodice",null)}
          sleeve={watch("Sleeve",null)}
          skirt={watch("Skirt Style",null)}
        />
      </div>
    </div>
  );
};

export default CustomOptionsSelection;
