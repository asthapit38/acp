const Banner = ({ title, children }) => {
  return (
    <div className="relative bg-gray-400 h-96">
      <div className="absolute inset-0 z-10 w-full h-full bg-black/40"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl mx-auto">
        <p className="text-4xl font-bold leading-normal text-background font-title">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Banner;
