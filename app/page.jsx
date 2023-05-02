import Hero from "@/app/components/Partials/Landing/Hero";
import DiscoverAcp from "@/app/components/Partials/Landing/DiscoverAcp";
import NewProduct from "@/app/components/Partials/Landing/new-product/NewProduct";
import Journal from "./components/Partials/Landing/Journal";
import Categories from "@/app/components/Partials/Landing/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col max-w-5xl mx-auto mt-6 gap-y-16">
        {/* categories */}
        <Categories />
        <DiscoverAcp />
        {/* events */}
        <NewProduct />
        <Journal />
      </div>
    </main>
  );
}
