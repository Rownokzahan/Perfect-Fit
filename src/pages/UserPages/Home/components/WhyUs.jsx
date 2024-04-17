import Container from "../../../../components/ui/Container";
import { SlDiamond } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";

const data = [
  {
    icon: <RiListSettingsLine />,
    title: "Customization Features",
    description:
      "Personalize every detail with our extensive customization features, ensuring your dress reflects your unique style.",
  },
  {
    icon: <SlDiamond />,
    title: "Premium Quality Fabric",
    description:
      "Handpicked materials ensure comfort and durability, ensuring premium quality in every stitch.",
  },
  {
    icon: <LiaShippingFastSolid />,
    title: "On Time Shipping",
    description:
      "Swift delivery options for timely arrivals, because we understand the importance of your special occasion.",
  },
  {
    icon: <MdSentimentSatisfiedAlt />,
    title: "Amazing Customer Service",
    description:
      "Our priority is your happiness. Count on us for top-notch service, aimed at ensuring your complete satisfaction.",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-primary-black text-primary-white py-16">
      <Container marginTop={0}>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8">
          {data?.map((item, index) => (
            <div
              key={index}
              className="text-center border-[0.5px] p-8"
            >
              <div className="text-4xl mx-auto w-fit">{item.icon}</div>
              <h4 className="mt-2 mb-4 font-semibold">{item.title}</h4>
              <p className="text-primary-white text-opacity-80 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
