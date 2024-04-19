import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import dress1 from "../../../assets/images/dresses/dress1.jpeg";
import CustomizeOptionsForm from "../../../components/forms/CustomizeOptionsForm";
import { FaRegHeart } from "react-icons/fa";

const dress = {
  _id: "01",
  image: dress1,
  name: "Sunflower Summer Dress",
  price: 54,
};

const Customize = () => {
  const { dress_id } = useParams();
  const { image, name, price } = dress ?? {};

  return (
    <Container marginTop={0}>
      <div className="mt-12 grid md:grid-cols-2 gap-16">
        <div className="">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium">{name}</h3>
            <div className="relative">
              <FaRegHeart className="text-2xl leading-none mt-2" />
              <p className="text-xs absolute left-1">28</p>
            </div>
          </div>
          <h5 className="text-2xl font-semibold mt-2 mb-4">${price}</h5>
          <img src={image} alt="" className="w-full" />
        </div>

        <div className="space-y-8 border p-8">
          <h3 className="text-xl text-center font-medium text-secondary-black">
            Customize Dress Styles
          </h3>
          <CustomizeOptionsForm dress_id={dress_id} />
        </div>
      </div>
    </Container>
  );
};

export default Customize;
