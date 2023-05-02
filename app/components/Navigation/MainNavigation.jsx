import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const MainNavigation = () => {
  const navLists = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Journal",
      url: "/our-journal",
    },
    {
      name: "Artisan Story",
      url: "/artisan-story",
    },
    {
      name: "Dhukuti",
      url: "/dhukuti",
    },
  ];
  return (
    <div className="bg-background">
      <ul className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center py-2 right-nav gap-x-6">
          {navLists.map((list, index) => (
            <li
              key={index}
              className="font-normal transition duration-200 ease-linear hover:text-primary hover:font-bold"
            >
              <Link href={list.url}>{list.name}</Link>
            </li>
          ))}
        </div>
        <div className="flex items-center left-nav gap-x-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <UserIcon className="w-5 h-5" />
        </div>
      </ul>
    </div>
  );
};

export default MainNavigation;
