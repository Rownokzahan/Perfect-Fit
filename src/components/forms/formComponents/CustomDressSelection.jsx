import DressAssembler from "../../shared/DressAssembler";
import StyleSelection from "./StyleSelection";

const CustomDressSelection = ({ register, errors, watch }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-center">
      <div className="col-span-2">
        <StyleSelection register={register} errors={errors} />
      </div>

      <div className="flex flex-col">
        <DressAssembler
          bodice={watch("Bodice", null)}
          sleeve={watch("Sleeve", null)}
          skirt={watch("Skirt Style", null)}
        />

        <h3 className="h-full -mb-20 text-2xl text-center font-medium">$50</h3>
      </div>
    </div>
  );
};

export default CustomDressSelection;