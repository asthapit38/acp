import Heading from "./Heading";

const HeadingContainer = ({ title, children }) => {
  return (
    <section>
      <Heading>{title}</Heading>
      <p className="text-center text-gray-500">{children}</p>
    </section>
  );
};

export default HeadingContainer;
