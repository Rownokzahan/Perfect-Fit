const Container = ({ children, marginTop = 24 }) => {
  return (
    <div className={`lg:px-10 md:px-8 px-2 mt-${marginTop}`}>{children}</div>
  );
};

export default Container;
