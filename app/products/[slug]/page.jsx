import ProductSlider from "@/app/components/Partials/Landing/new-product/ProductSlider";
import Heading from "@/app/components/ui/Heading/Heading";
import Link from "next/link";
export default function ProductDetail() {
  return (
    <div className="max-w-5xl mx-auto mt-4">
      <div className="grid grid-cols-2 gap-y-3">
        <div className="bg-gray-400"></div>
        <div className="p-4 space-y-3">
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
          <div className="price">
            {/* unauthenticated user */}
            <div className="inline-flex gap-x-1">
              <Link className="font-bold underline" href="/">
                Login
              </Link>
              <span>for pricing informations</span>
            </div>
            {/* authenticated user */}
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
