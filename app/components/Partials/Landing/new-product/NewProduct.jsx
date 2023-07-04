import HeadingContainer from "../../../ui/Heading/HeadingContainer";
import ProductSlider from "./ProductSlider";

const NewProduct = () => {
  return (
    <div className="flex flex-col gap-y-8">
      <HeadingContainer title="New Product">
        ACP expanded its range of products by introducing contemporary designs
        to meet market demands while also ensuring that the community's skills
        were preserved. Each product is meticulously crafted using simple tools,
        showcasing the exceptional artistry and skill of our talented artisans.
      </HeadingContainer>
      <ProductSlider />
    </div>
  );
};

export default NewProduct;
