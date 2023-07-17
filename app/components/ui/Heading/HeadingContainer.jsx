import Heading from "./Heading";

const HeadingContainer = ({ title, children }) => {
  return (
    <section>
      <Heading>{title}</Heading>
      <p className="text-center">{children}</p>
    </section>
  );
};

export default HeadingContainer;
