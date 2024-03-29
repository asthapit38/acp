"use client";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import AboutNavList from "./AboutNavList";
const MobileNavigation = ({ navLists }) => {
  const [open, cycleOpen] = useCycle(false, true);
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
    <>
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
                <motion.a
                  variants={itemVariants}
                  href="/"
                  className="text-xl font-normal transition duration-200 ease-linear hover:text-primary hover:font-bold"
                >
                  {" "}
                  Home{" "}
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="/about"
                  className="text-xl font-normal transition duration-200 ease-linear hover:text-primary hover:font-bold"
                >
                  About
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href="/products"
                  className="text-xl font-normal transition duration-200 ease-linear hover:text-primary hover:font-bold"
                >
                  Products
                </motion.a>
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
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
