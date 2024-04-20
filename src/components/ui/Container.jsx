const Container = ({ children, marginTop = 24 }) => {
  return (
    <div
      className={`max-w-[1140px] ${
        "mt-" + marginTop
      } mx-auto lg:px-10 md:px-8 px-2`}
    >
      {children}
    </div>
  );
};

export default Container;
