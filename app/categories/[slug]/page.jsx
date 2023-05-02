import Banner from "@/app/components/ui/Banner";
import ProductCard from "@/app/components/ui/ProductCard";
const title = "Cotton Textiles";
import BannerImage from "@/public/images/categories/cotton_textiles.jpeg";

export default function Category() {
  return (
    <>
      <Banner title={title} image={BannerImage}>
        <div className="relative z-20 flex flex-col items-center justify-center h-full max-w-5xl mx-auto xl:px-0 px-4">
          <h3 className="text-4xl font-bold leading-normal text-background font-title">
            {title}
          </h3>
        </div>
      </Banner>
      <div className="flex flex-col max-w-5xl mx-auto xl:px-0 px-4 mt-6 gap-y-6">
        <p className="font-light leading-loose">
          Cotton textiles refer to fabrics and products made from cotton fibers.
          Cotton is a natural and versatile material that is widely used in the
          textile industry due to its softness, breathability, and durability.
        </p>

        <div className="grid w-full grid-cols-3 mt-4 gap-x-2 gap-y-4">
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
          <ProductCard title="Product one" code="234324" price="500" />
        </div>
      </div>
    </>
  );
}
