import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import OurExperts from "./components/OurExperts";
import ContactUs from "./components/ContactUs";
import NewArrival from "./components/NewArrival";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Perfect Fit | Home</title>
      </Helmet>

      <Banner />
      <WhyUs />
      <OurExperts />
      <HowItWorks />
      <NewArrival />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
