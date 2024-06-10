const HowItWorksCard = ({ step, index }) => {
  return (
    <div className="p-8 pt-4 rounded shadow bg-white group overflow-hidden">
      <div className="flex">
        <div className="w-10 h-10 rounded-full border border-primary-white flex justify-center items-center bg-primary-black outline outline-0 group-hover:outline-[300px] duration-500">
          <span className="text-primary-white text-nowrap text-xl font-bold">
            {index + 1}
          </span>
        </div>
      </div>

      <h4 className="font-semibold text-lg my-2 group-hover:text-primary-white duration-500">
        {step.title}
      </h4>

      <p className="group-hover:text-primary-white/80 duration-500">
        {step.description}
      </p>
    </div>
  );
};

export default HowItWorksCard;
