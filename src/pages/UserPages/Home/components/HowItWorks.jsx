import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import image1 from "../../../../assets/images/home/customization/select.png";
import image2 from "../../../../assets/images/home/customization/customize.png";
import image3 from "../../../../assets/images/home/customization/tape.png";
import image4 from "../../../../assets/images/home/customization/bride-dress.png";
import HowItWorksCard from "../../../../components/cards/HowItWorksCard";

const steps = [
  {
    image: image1,
    title: "Choose Your Perfect Dress",
    description:
      "Browse through our collection and pick the dress that suits your style.",
  },
  {
    image: image2,
    title: "Customize Your Design",
    description:
      "Personalize your dress by selecting your preferred fabric, neckline etc.",
  },
  {
    image: image3,
    title: "Give Your Measurements",
    description:
      "Tell us your measurements to ensure the perfect fit for your dress.",
  },
  {
    image: image4,
    title: "Enjoy Your Tailored Dress",
    description: "Receive your custom-made dress and cherish the perfect fit.",
  },
];

const HowItWorks = () => {
  return (
    <section>
      <Container>
        <Title>How It Works</Title>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-12">
          {steps?.map((step, index) => (
            <HowItWorksCard key={index} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
