"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ProductNavList from "./ProductNavList";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const MainNavigationWithHover = () => {
  const pathname = usePathname();
  const homeLink = {
    name: "Home",
    url: "/",
  };
  const navLists = [
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
    <div className="py-3 border-y ">
      {/* desktop navigation */}
      <ul className="items-center justify-between hidden max-w-5xl px-4 mx-auto lg:flex lg:px-0">
        <div className="flex items-center py-2 right-nav gap-x-6">
          <li className="relative font-normal transition duration-200 ease-linear hover:text-primary">
            <Link href={homeLink.url}>{homeLink.name}</Link>
          </li>
          <ProductNavList />
          {navLists.map((list, index) => (
            <li
              className="relative font-normal transition duration-200 ease-linear hover:text-primary"
              key={index}
            >
              <Link href={list.url}>{list.name}</Link>
            </li>
          ))}
        </div>
        <div className="flex items-center left-nav gap-x-2">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </div>
      </ul>
    </div>
  );
};

export default MainNavigationWithHover;
