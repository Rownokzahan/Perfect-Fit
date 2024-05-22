import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import CustomizeOptionsForm from "../../../components/forms/CustomizeOptionsForm";
import { FaRegHeart } from "react-icons/fa";
import { useGetDressByIdQuery } from "../../../redux/features/api/dressApi";
import Spinner from "../../../components/ui/Spinner";

const Customize = () => {
  const { dress_id } = useParams();

  const { data: dress, isLoading, error } = useGetDressByIdQuery(dress_id);
  const { image, name, price } = dress ?? {};

  if (isLoading) {
    return <Spinner/>
  }

  if (!dress || error) {
    return <div>No Dress Found</div>
  }

  return (
    <Container marginTop={0}>
      <div className="mt-12 grid xl:grid-cols-2 gap-16">
        <div className="md:h-3/4 xl:w-full mx-auto">
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

        <div className="space-y-8 border p-2 sm:p-8">
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
