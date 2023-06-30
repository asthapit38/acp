import ProductSlider from "@/app/components/Partials/Landing/new-product/ProductSlider";
import Heading from "@/app/components/ui/Heading/Heading";
export default function ProductDetail() {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-4 xl:px-0 ">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="bg-gray-400 min-h-[384px]"></div>
        <div className="space-y-3">
          <p className="tracking-wider text-gray-600 uppercase">
            Cotton Textiles
          </p>
          <p className="text-2xl font-bold font-title text-primary">
            Felt Heart Key Rng W/Beads
          </p>
          <div className="space-y-2 font-light properties">
            <p>Code: FLX1798S </p>
            <p>Size: 2" x 2.5" </p>
            <p>Material: felt </p>
            <p>Color: Red</p>
          </div>
          <div className="space-y-2 description">
            <p className="font-bold">Descriptions</p>
            <p className="font-light leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Sed egestas senectus eget
              adipiscing pharetra. Facilisis consequat blandit vel mauris augue
              scelerisque eget velit sit. Neque tincidunt ornare consequat orci
              volutpat. Viverra fermentum eu feugiat amet consectetur egestas
              tristique tristique.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        {/* related products */}
        <Heading>Related Products</Heading>
        <ProductSlider />
      </div>
    </div>
  );
}
