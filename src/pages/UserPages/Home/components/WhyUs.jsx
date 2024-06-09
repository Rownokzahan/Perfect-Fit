import Container from "../../../../components/ui/Container";
import { SlDiamond } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSentimentSatisfiedAlt } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";

const data = [
  {
    icon: <RiListSettingsLine />,
    title: "Customization Features",
  },
  {
    icon: <SlDiamond />,
    title: "Premium Quality Fabric",
  },
  {
    icon: <LiaShippingFastSolid />,
    title: "On Time Shipping",
  },
  {
    icon: <MdSentimentSatisfiedAlt />,
    title: "Amazing Customer Service",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-primary-black text-primary-white py-4">
      <Container marginTop={0}>
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-secondary-white/60">
          {data?.map((item, index) => (
            <div
              key={index}
              className="text-center p-4"
            >
              <div className="text-2xl lg:text-4xl mx-auto w-fit">
                {item.icon}
              </div>
              <h4 className="mt-2 font-semibold text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUs;
