import ProductCard from "../components/ui/ProductCard";

export default function Products() {
  return (
    <div className="max-w-5xl px-4 mx-auto mt-6 lg:px-0">
      <div className="flex flex-col gap-x-2 lg:flex-row">
        <div className="max-w-xs px-2 py-4 space-y-2 sidebar shrink-0">
          <p className="text-lg font-bold">Categories</p>
          <ul>
            <li>load all the Categories</li>
          </ul>
          {/* price filter goes here */}
        </div>
        <div className="flex flex-col flex-grow py-4 content">
          <select className="border p-2.5 self-end lg:min-w-[284px] min-w-full rounded-md">
            <option value="">Relevance</option>
            <option value="">Popular</option>
            <option value="">Newest</option>
          </select>
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
