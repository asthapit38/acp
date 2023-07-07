import Link from "next/link";
import CategoriesAccordion from "../components/Partials/ProductShowCase/CategoriesAccordion";
import ProductCard from "../components/ui/ProductCard";
import CategoriesData from "@/data/categories.json";
export default async function Products() {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-6 lg:px-0">
      <div className="grid items-center grid-cols-1 py-5 border-b lg:grid-cols-2 gap-x-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-relaxed tracking-wider uppercase text-primary font-title ">
            ALL PRODUCTS
          </h1>
          <p className="text-sm text-gray-500">
            ACP expanded its range of products by introducing contemporary
            designs to meet market demands while also ensuring that the
            community's skills were preserved. Each product is meticulously
            crafted using simple tools, showcasing the exceptional artistry and
            skill of our talented artisans.
          </p>
        </div>
        <div className="hidden w-full overflow-hidden bg-gray-400 rounded-lg aspect-video lg:block"></div>
      </div>
      <div className="flex flex-col gap-x-6 lg:flex-row">
        <div className="w-full lg:max-w-[200px] max-w-full py-4 space-y-2  sidebar shrink-0">
          <CategoriesAccordion categories={CategoriesData.data} />
          <div className="hidden lg:block">
            <p className="px-2 mb-2 text-lg font-bold">Categories</p>
            <ul>
              {CategoriesData.data.map((category, index) => (
                <Link
                  href="/"
                  key={index}
                  className="block px-2 py-3 capitalize transition-colors rounded-md hover:bg-gray-100"
                >
                  {category.name}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-grow py-4 content">
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
      </div>
    </div>
  );
}
