import useTitle from "../../../hooks/useTitle";
import Container from "../../../components/ui/Container";
import useMyOrders from "../../../hooks/useMyOrders";
import Spinner from "../../../components/ui/Spinner";
import NoOrders from "../../ErrorPages/NoOrders";
import Title from "../../../components/ui/Title";
import Order from "./components/Order";

const MyOrders = () => {
  useTitle("My Orders");
  const { isLoading, orders } = useMyOrders();

  // Display a spinner while the cart items are loading
  if (isLoading) {
    return <Spinner />;
  }

  // Display an empty cart if there are no items in the cart
  if (orders?.length === 0) {
    return <NoOrders />;
  }

  return (
    <Container marginTop={12}>
      <Title>My Orders</Title>

      <div className="grid gap-8">
        {orders?.map((order) => (
          <Order key={order?._id} order={order} />
        ))}
      </div>
    </Container>
  );
};

export default MyOrders;
