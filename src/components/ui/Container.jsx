const Container = ({ children, marginTop = 24 }) => {
  marginTop = `mt-${marginTop}`;

  return (
    <div className={`max-w-[1440px] ${marginTop} mx-auto px-[5%] lg:px-[7%]`}>
      {children}
    </div>
  );
};

export default Container;
