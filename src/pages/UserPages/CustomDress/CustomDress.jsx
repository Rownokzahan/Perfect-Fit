import Container from "../../../components/ui/Container";
import CustomDressForm from "../../../components/forms/CustomDressForm/CustomDressForm";

const CustomDress = () => {
  return (
    <Container marginTop={12}>
      <h4 className="font-semibold text-3xl text-center">
        Design Your Own Dress
      </h4>
      <p className="mb-8 mt-2 text-center">
        Select (click on small images) from the options below to design your own
        dress
      </p>

      <CustomDressForm />
    </Container>
  );
};

export default CustomDress;
