import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import image1 from "../../../../assets/images/home/team/tailor1.jpeg";
import image2 from "../../../../assets/images/home/team/tailor2.jpg";
import image3 from "../../../../assets/images/home/team/tailor3.jpg";
import image4 from "../../../../assets/images/home/team/tailor4.jpg";
import ExpertCard from "../../../../components/cards/ExpertCard";

const experts = [
  {
    id: 1,
    name: "Charlotte Taylor",
    image: image4,
    designation: "Designer",
  },

  {
    id: 2,
    name: "Emma Wilson",
    image: image2,
    designation: "Master",
  },

  {
    id: 3,
    name: "Olivia Davis",
    image: image3,
    designation: "Tailor",
  },
  {
    id: 4,
    name: "Jhon Smith",
    image: image1,
    designation: "Tailor",
  },
];

const OurExperts = () => {
  return (
    <section>
      <Container>
        <Title>Meet Our Experts</Title>

        <div className="overflow-x-scroll">
          <div className="flex flex-no-wrap w-max gap-12">
            {experts?.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurExperts;
