import useTitle from "../../../hooks/useTitle";
import useWishlist from "../../../hooks/useWishlist";
import Spinner from "../../../components/ui/Spinner";
import EmptyWishlist from "../../ErrorPages/EmptyWishlist";
import Container from "../../../components/ui/Container";
import DressCard from "../../../components/cards/DressCard";

const Wishlist = () => {
  useTitle("Wishlist");
  const { wishlist, isLoading } = useWishlist();

  if (isLoading) {
    return <Spinner />;
  }

  if (wishlist?.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <Container marginTop={12}>
      <h3 className="font-medium mb-8">
        Your Wishlist
        <span className="font-normal text-sm text-secondary-black ps-2">
          {wishlist?.length} items
        </span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {wishlist?.map((dress) => (
          <DressCard key={dress?._id} dress={dress} />
        ))}
      </div>
    </Container>
  );
};

export default Wishlist;
