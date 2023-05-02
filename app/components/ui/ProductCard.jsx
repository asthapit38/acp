const ProductCard = ({ code, title, price }) => {
  return (
    <div className="flex flex-col gap-2 product-card">
      <div className="w-full bg-gray-200 card-image aspect-square"></div>
      <div className="card-body">
        <p className="text-sm text-gray-400">{code}</p>
        <p className="text-xl font-bold">{title}</p>
        <p>Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
