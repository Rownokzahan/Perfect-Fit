import { useParams } from "react-router-dom";
import Container from "../../../components/ui/Container";
import { useGetDressByIdQuery } from "../../../redux/features/api/dressApi";
import Spinner from "../../../components/ui/Spinner";
import CustomizeForm from "../../../components/forms/CustomizeForm";
import NoDress from "../../ErrorPages/NoDress";

const Customize = () => {
  const { dress_id } = useParams();

  const { data: dress, isLoading, error } = useGetDressByIdQuery(dress_id);
  const { image, name, price } = dress ?? {};

  if (isLoading) {
    return <Spinner />;
  }

  if (!dress || error) {
    return <NoDress />;
  }

  return (
    <Container marginTop={12}>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="sm:w-[40%] space-y-4 lg:self-start lg:sticky lg:top-12 lg:left-0">
          <div className="flex justify-between">
            <h5 className="text-xl font-medium truncate">{name}</h5>
            <h5 className="font-semibold">${price}</h5>
          </div>
          <img src={image} className="h-[80vh] w-full object-cover rounded" />
        </div>
        <div className="space-y-4">
          <p className="pb-2 border-b text-xl font-medium">
            Change Dress Style
          </p>
          <CustomizeForm image={image} name={name} price={price} />
        </div>
      </div>
    </Container>
  );
};

export default Customize;
