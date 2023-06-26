import { motion } from "framer-motion";
import Link from "next/link";

const ProductCard = ({ code, title, dimensions }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Link
        href="/products/a"
        className="flex flex-col gap-2 transition-all border rounded-md product-card hover:shadow-md"
      >
        <div className="w-full bg-gray-200 card-image aspect-square"></div>
        <div className="p-2 card-body">
          <p className="text-xs text-gray-400">{code}</p>
          <p className="text-base leading-4">{title}</p>
          <p className="text-sm">{dimensions}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
