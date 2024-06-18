const CustomContainer = ({ children, className }) => {
  return (
    <div
      className={`border-x-2 md:border-x-4 border-b-2 md:border-b-4 first:border-t-2 md:first:border-t-4 first:border-b-2 md:first:border-b-4 border-black px-[24px] md:px-[80px] ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
