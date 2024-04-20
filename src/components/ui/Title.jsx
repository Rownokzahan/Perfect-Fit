const Title = ({ children, position = "center", color = "primary-black" }) => {
  const alignmentClass =
    position === "center" ? "mx-auto text-center" : `text-${position}`;

  return (
    <>
      <div className={`mb-16 w-fit ${alignmentClass}`}>
        <h3 className={`text-3xl font-semibold text-${color}`}>{children}</h3>
      </div>
    </>
  );
};

export default Title;
