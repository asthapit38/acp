import Link from "next/link";

const ProductCard = ({ code, title, price }) => {
  return (
    <Link
      href="/products/a"
      className="flex flex-col gap-2 transition-all border rounded-md product-card hover:shadow-md"
    >
      <div className="w-full bg-gray-200 card-image aspect-square"></div>
      <div className="p-2 card-body">
        <p className="text-sm text-gray-400">{code}</p>
        <p className="text-lg font-bold">{title}</p>
        <p>Rs. {price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
