"use client";
import ProductCard from "@/app/components/ui/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeSubCategories, setActiveSubcategories] = useState(0);
  const params = useParams();
  const getDatas = async () => {
    try {
      const { data } = await fetchDataFromApi(
        `/api/categories?filters[slug]=${params.slug}&populate=items,subcategories`
      );
      setSubCategories(data[0].attributes.subcategories);
      setProducts(data[0].attributes.items);
      setFiltered(data[0].attributes.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

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
      <Filters
        products={products}
        setFiltered={setFiltered}
        activeSubcategories={activeSubCategories}
        setActiveSubcategories={setActiveSubcategories}
        subCategories={subCategories}
      />

      {/* display the products */}
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
    </div>
  );
}
