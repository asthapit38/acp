import Hero from "@/app/components/Partials/Landing/Hero";
import DiscoverAcp from "@/app/components/Partials/Landing/DiscoverAcp";
import NewProduct from "@/app/components/Partials/Landing/new-product/NewProduct";
import Journal from "./components/Partials/Landing/Journal";
import Categories from "@/app/components/Partials/Landing/Categories";
import Container from "./components/ui/Container";

export default function Home() {
  return (
    <main>
      <Hero />
      <Container className="flex flex-col max-w-5xl px-4 mx-auto mt-6 xl:px-0 gap-y-16">
        <Categories />
        <DiscoverAcp />
        {/* events */}
      </Container>
      <div className="w-full bg-gray-200 h-96">
        <Container className="h-full">
          <p>hello</p>
        </Container>
      </div>
      <Container className="flex flex-col max-w-5xl px-4 mx-auto mt-6 xl:px-0 gap-y-16">
        <NewProduct />
        <Journal />
      </Container>
    </main>
  );
}
