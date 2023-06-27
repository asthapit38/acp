"use client";

import Button from "@/app/components/ui/Button";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect } from "react";

const Filters = ({
  subCategories,
  setActiveSubcategories,
  activeSubcategories,
  setFiltered,
  products,
}) => {
  useEffect(() => {
    if (activeSubcategories === 0) {
      setFiltered(products);
      return;
    }
    fun();
  }, [activeSubcategories]);

  const fun = async () => {
    const { data } = await fetchDataFromApi(
      `/api/subcategories?filters[id]=${activeSubcategories}&populate=items`
    );
    setFiltered(data[0].attributes.items);
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 my-4">
      <Button
        intent={activeSubcategories === 0 ? "active" : "secondary"}
        size="small"
        onPress={() => setActiveSubcategories(0)}
      >
        All
      </Button>
      {subCategories.data &&
        subCategories.data.map((subCategory) => (
          <Button
            onPress={() => setActiveSubcategories(subCategory.id)}
            intent={
              activeSubcategories === subCategory.id ? "active" : "secondary"
            }
            size="small"
            className={
              activeSubcategories === subCategory.id
                ? "bg-primary text-white"
                : ""
            }
            key={subCategory.id}
          >
            {subCategory.attributes.name}
          </Button>
        ))}
    </div>
  );
};

export default Filters;
