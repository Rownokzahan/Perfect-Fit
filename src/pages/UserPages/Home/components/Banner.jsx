import bg_image from "../../../../assets/images/home/banner/banner.jpg";

const Banner = () => {
  return (
    <div className="relative min-h-[calc(100vh-58px)]">
      <div className="inset-0 absolute -top-16 bg-gradient-to-br from-black/80">
        <img
          src={bg_image}
          className="h-full w-full object-cover object-center mix-blend-multiply"
          alt=""
        />
      </div>

      <div className="absolute top-1/2 left-[5%] lg:left-[7%] text-primary-white font-bold">
        <h1 className="text-2xl md:text-4xl mb-5">
          We make dresses that fit you
        </h1>
        <h1 className="text-4xl md:text-7xl uppercase">BEAUTIFULLY</h1>
      </div>
    </div>
  );
};

export default Banner;
