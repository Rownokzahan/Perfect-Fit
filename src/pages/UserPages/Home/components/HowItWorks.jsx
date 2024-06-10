import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import howItWorksSteps from "../../../../data/howItWorksSteps";
import HowItWorksCard from "../../../../components/cards/HowItWorksCard";

const HowItWorks = () => {
  return (
    <section>
      <Container>
        <Title>How It Works</Title>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-12">
          {howItWorksSteps?.map((step, index) => (
            <HowItWorksCard key={index} step={step} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
