"use client";
import Filters from "../../components/Filters";
import ProductCard from "@/app/components/ui/ProductCard";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FilteredProduct = ({ subCategories, products }) => {
  const [filtered, setFiltered] = useState(products);
  const [activeSubCategories, setActiveSubcategories] = useState(0);
  return (
    <>
      <Filters
        products={products}
        setFiltered={setFiltered}
        activeSubcategories={activeSubCategories}
        setActiveSubcategories={setActiveSubcategories}
        subCategories={subCategories}
      />
      {filtered.data && filtered.data.length > 0 ? (
        <motion.div
          layout
          className="min-h-[600px] grid w-full grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4"
        >
          <AnimatePresence>
            {filtered.data &&
              filtered.data.map((product) => (
                <ProductCard
                  title={product.attributes.name}
                  code={product.attributes.code}
                  dimension={product.attributes.dimensions}
                  key={product.id}
                />
              ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="text-center text-gray-500">No Product found.</p>
      )}
    </>
  );
};

export default FilteredProduct;
