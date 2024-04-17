const HowItWorksCard = ({ step, index }) => {
  return (
    <div
      key={index}
      className="bg-white p-8 shadow text-center flex flex-col justify-between relative"
    >
      <div className="w-fit mx-auto p-2 border shadow border-primary rounded-full">
        <img src={step.image} className="w-8 mx-auto" alt="" />
      </div>
      <h4 className="text-lg font-semibold mt-3 mb-2">{step.title}</h4>
      <p className="mb-2">{step.description}</p>

      <p className="w-max px-4 py-2 border-b shadow rounded-full bg-white text-secondary-black text-lg absolute -bottom-4 left-1/2 -translate-x-1/2">
        {index + 1}
      </p>
    </div>
  );
};

export default HowItWorksCard;
