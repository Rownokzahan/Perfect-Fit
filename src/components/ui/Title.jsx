const Title = ({ children, isCentered = true, color = "primary-black" }) => {
  return (
    <>
      <div className={`mb-16 w-fit ${isCentered ? "mx-auto text-center" : ""}`}>
        <h3 className={`text-3xl font-semibold text-${color}`}>{children}</h3>
      </div>
    </>
  );
};

export default Title;
