export const LayoutSection = ({ children, className }) => {
  return (
    <div
      className={`py-[40px] md:py-[60px] lg:py-[120px] px-[20px] md:px-[40px] lg:px-[80px] space-y-4 ${
        className && className
      }`}
    >
      {children}
    </div>
  );
};
