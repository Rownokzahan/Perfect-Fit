import DressCard from "../../../../components/cards/DressCard";

const DressList = ({ dresses }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      {dresses.map((dress) => (
        <DressCard key={dress._id} dress={dress} />
      ))}
    </div>
  );
};

export default DressList;
