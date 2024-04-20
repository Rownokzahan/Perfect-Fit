import DressCard from "../../../components/cards/DressCard";
import Container from "../../../components/ui/Container";
import Title from "../../../components/ui/Title";
import dresses from "../../../data/dresses";


const Wishlist = () => {
  return (
    <Container marginTop={12}>
      <Title position={"left"}>Your Wishlist</Title>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
        {dresses?.slice(0, 8).map((dress) => (
          <DressCard key={dress._id} dress={dress} status="New" />
        ))}
      </div>
    </Container>
  );
};

export default Wishlist;