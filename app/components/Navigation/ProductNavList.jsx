"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { fetchDataFromApi } from "@/utils/api";

const ProductNavList = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(null);

  const closeList = (event) => {
    event.stopPropagation();
    console.log("namaste");
    setOpen(false);
  };
  const getCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?select=['name']");
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <li className="font-normal" onClick={() => setOpen((pv) => !pv)}>
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button className="flex items-center gap-2">
          <span>Products</span>
          <motion.span variants={iconVariants}>
            <ChevronDownIcon className="w-4 h-4" />
          </motion.span>
        </button>
        {open && (
          <div
            tabIndex="-1"
            className="fixed inset-0 z-20 w-full h-screen"
            onClick={closeList}
          ></div>
        )}

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top" }}
          className="absolute max-h-[400px] overflow-y-scroll z-50 flex flex-col gap-2 p-2 bg-white rounded-lg shadow-xl w-72 min-w-fit"
        >
          {categories &&
            categories.map((category) => (
              <Option
                setOpen={setOpen}
                text={category.attributes.name}
                key={category.id}
              />
            ))}
        </motion.ul>
      </motion.div>
    </li>
  );
};

const Option = ({ text }) => {
  return (
    <motion.li
      variants={itemVariants}
      className="flex items-center w-full gap-2 p-2 font-medium transition-colors ease-linear rounded-lg hover:bg-primary/30"
    >
      <Link href="/categories/category-slug">
        <span className="capitalize">{text}</span>
      </Link>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },

  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  close: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      duration: "0",
      ease: "easeIn",
    },
  },
};

export default ProductNavList;
