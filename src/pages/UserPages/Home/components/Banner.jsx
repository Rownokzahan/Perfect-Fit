import bg_image from "../../../../assets/images/home/banner/banner2.jpg";
import Container from "../../../../components/ui/Container";

const Banner = () => {
  return (
    <div className="relative min-h-screen">
      <div className="inset-0 absolute -top-16 bg-primary-black bg-opacity-70">
        <img
          src={bg_image}
          className="h-full w-full object-cover object-center mix-blend-overlay"
          alt=""
        />
      </div>

      <div className="absolute bottom-1/4 text-primary-white">
        <Container>
          <h1 className="text-5xl font-bold mb-5 max-w-screen-md">
            Craft Your Signature Look
          </h1>
          <p className="text-xl text-primary-white mb-8">
            Let&apos;s craft a wardrobe that resonates with your essence
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
