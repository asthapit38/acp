"use client";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ProductNavList from "./ProductNavList";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const MainNavigationWithHover = () => {
  const [open, cycleOpen] = useCycle(false, true);

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
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
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
      {/* mobile navigation */}
      <div className="flex justify-end lg:hidden">
        <button onClick={cycleOpen} className="p-2">
          {open ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.aside
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{
              height: 0,
              transition: { delay: 1, duration: 0.3, ease: "linear" },
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              variants={sideVariants}
              exit="closed"
              className="z-50 flex flex-col items-center justify-between w-full gap-4 p-8 overflow-y-scroll"
            >
              <div className="flex flex-col items-center flex-grow gap-6">
                {navLists.map((list, index) => (
                  <motion.a
                    variants={itemVariants}
                    key={index}
                    href={list.url}
                    className="text-xl font-normal transition duration-200 ease-linear hover:text-primary hover:font-bold"
                  >
                    {list.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                variants={itemVariants}
                className="flex items-center left-nav gap-x-2"
              >
                <MagnifyingGlassIcon className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainNavigationWithHover;
