import fabrics from "../../../data/fabrics";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { PiCheckCircleFill } from "react-icons/pi";

const FabricSelection = ({register, errors}) => {
    return (
      <div className="space-y-4">
        <h5 className="font-medium">Fabric</h5>
        <div className="flex flex-wrap gap-2 sm:gap-6 text-xs text-center">
          {fabrics?.map((fabric, index) => (
            <label
              htmlFor={fabric.name}
              className="block h-16 sm:h-20 mb-6 relative cursor-pointer"
              key={fabric.name}
            >
              <input
                type="radio"
                value={fabric.name}
                name={"Fabric"}
                id={fabric.name}
                className="hidden peer"
                {...(index === 0
                  ? {
                      ...register("Fabric", {
                        required: `Please Select a Fabric`,
                      }),
                    }
                  : { ...register("Fabric") })}
              />
              {index === 0 && errors?.Fabric && (
                <p className="text-xs text-nowrap text-red-600 flex items-center gap-2 absolute -top-9 -right-[310px]">
                  <AiOutlineExclamationCircle />
                  {errors?.Fabric?.message}
                </p>
              )}
              <PiCheckCircleFill className="text-lg text-primary-black absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 peer-checked:opacity-95 transition-opacity duration-75" />

              <img
                src={fabric.image}
                alt=""
                className="h-full w-16 sm:w-20 border rounded-lg peer-checked:border-primary-black duration-75"
              />
            </label>
          ))}
        </div>
      </div>
    );
};

export default FabricSelection;