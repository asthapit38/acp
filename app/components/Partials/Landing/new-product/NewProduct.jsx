import HeadingContainer from "../../../ui/Heading/HeadingContainer";
import ProductSlider from "./ProductSlider";

const NewProduct = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <HeadingContainer title="New Product">
        The Association for Craft Producers is a Fair Trade Organization in
        Nepal that supports low-income artisans with design, marketing, and
        technical services. They blend traditional craft with modern design and
        offer a flexible program for creative collaboration. ACP provides
        various benefits and programs for their producers' welfare and
        conservation of the environment.
      </HeadingContainer>
      <ProductSlider />
    </div>
  );
};

export default NewProduct;
