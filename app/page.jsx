import Hero from "@/app/components/Partials/Landing/Hero";
import DiscoverAcp from "@/app/components/Partials/Landing/DiscoverAcp";
import NewProduct from "@/app/components/Partials/Landing/new-product/NewProduct";
import Journal from "./components/Partials/Landing/Journal";
import Categories from "@/app/components/Partials/Landing/Categories";
import EventWrapper from "./components/Partials/Landing/EventWrapper";

export default async function Home() {
  return (
    // todo - change the slider.
    <main>
      <Hero />
      <div className="flex flex-col max-w-5xl px-4 mx-auto mt-6 xl:px-0 gap-y-16">
        <Categories />
        <DiscoverAcp />
      </div>
      <EventWrapper />
      <div className="flex flex-col max-w-5xl px-4 mx-auto mt-6 xl:px-0 gap-y-16">
        <NewProduct />
        <Journal />
      </div>
    </main>
  );
}
