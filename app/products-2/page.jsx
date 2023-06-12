import ProductCard from "@/app/components/ui/ProductCard";

export default function Page() {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-6 lg:px-0">
      <div className="grid items-center grid-cols-1 py-5 border-b lg:grid-cols-2 gap-x-5">
        <div className="text-center">
          <h1 className="text-3xl font-medium leading-relaxed tracking-wider uppercase font-title ">
            All Products
          </h1>
          <p className="text-sm text-gray-500">
            Introducing our new season collections, from statement lighting to
            stylish rattan garden furniture. Find texture in abundance with
            handwoven textiles and tactile ceramics, and embrace organic forms
            and silhouettes through handcrafted and reclaimed decorative objet.
          </p>
        </div>
        <div className="hidden w-full bg-gray-400 aspect-video lg:block"></div>
      </div>
      {/* filter */}
      <select name="" id="" className="border py-2.5">
        <option value="">Relevance</option>
        <option value="">Popular</option>
        <option value="">Newest</option>
      </select>
      {/* display the products */}
      <div className="grid w-full grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
        <ProductCard title="Product one" code="234324" price="500" />
      </div>
    </div>
  );
}
