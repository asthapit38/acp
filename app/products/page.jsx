import ProductCard from "../components/ui/ProductCard";

export default function Products() {
  return (
    <div className="max-w-5xl mx-auto mt-6">
      <div className="flex gap-x-2">
        <div className="max-w-xs px-2 py-4 space-y-2 sidebar shrink-0">
          <p className="text-lg font-bold">Categories</p>
          <ul>
            <li>load all the Categories</li>
          </ul>
          {/* price filter goes here */}
        </div>
        <div className="flex flex-col flex-grow py-4 content">
          <select className="border p-2.5 self-end min-w-[284px] rounded-md">
            <option value="">Relevance</option>
            <option value="">Popular</option>
            <option value="">Newest</option>
          </select>
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
      </div>
    </div>
  );
}
