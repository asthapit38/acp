import { fetchDataFromApi } from "@/utils/api";
import FilteredProduct from "./components/FilteredProduct";
import Image from "next/image";
const getCategory = async (slug) => {
  try {
    const { data } = await fetchDataFromApi(
      `/api/categories?filters[slug]=${slug}&populate=image,items,subcategories`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const metadata = {
  title: "Product | ACP",
  description: `The Association for Craft Producers (ACP) is a Fair Trade Organization based in Nepal, dedicated to empowering low-income artisans. Through design, marketing, and technical services, ACP combines traditional craft with contemporary design, fostering creative collaboration. ACP offers a flexible program, supporting artisans while prioritizing their welfare and environmental conservation. Experience the unique craftsmanship and sustainable initiatives of ACP in Nepal.`,
};
export default async function Page({ params }) {
  const category = await getCategory(params.slug);
  const subCategories = category[0].attributes.subcategories;
  const products = category[0].attributes.items;

  return (
    <div className="max-w-5xl px-4 mx-auto mt-6 lg:px-0">
      <div className="grid items-center grid-cols-1 py-5 border-b lg:grid-cols-[60%_1fr] gap-x-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-relaxed tracking-wider uppercase text-primary font-title ">
            {category[0].attributes.name}
          </h1>
          <p className="text-sm text-gray-500">
            {category[0].attributes.brief}
          </p>
        </div>
        <div className="hidden w-full overflow-hidden bg-gray-400 rounded-lg aspect-sqaure lg:block">
          {category[0].attributes.image_url && (
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
              style={{
                objectFit: "cover",
              }}
              src={`${category[0].attributes.image_url}`}
            />
          )}
        </div>
      </div>
      <FilteredProduct subCategories={subCategories} products={products} />
    </div>
  );
}
