import Container from "../../../../components/ui/Container";
import Title from "../../../../components/ui/Title";
import ExpertCard from "../../../../components/cards/ExpertCard";
import experts from "../../../../data/experts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 -left-1 z-20 p-1 bg-white text-secondary-black text-xl border rounded-full"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </button>
  );
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 -translate-y-1/2 -right-1 z-20 p-1 bg-white text-secondary-black text-xl border rounded-full"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </button>
  );
}

const OurExperts = () => {
  const settings = {
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 700,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <Container>
        <Title>Meet Our Experts</Title>

        <div className="relative">
          <Slider {...settings}>
            {experts?.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default OurExperts;
