import { fetchDataFromApi } from "@/utils/api";
import CategorySlider from "./Categories/SliderContent";

const getData = async () => {
  const { data } = await fetchDataFromApi("/api/categories?populate=image");
  return data;
};

export default async function Categories() {
  const data = await getData();
  return (
    <div>
      <CategorySlider categories={data} />
    </div>
  );
}
