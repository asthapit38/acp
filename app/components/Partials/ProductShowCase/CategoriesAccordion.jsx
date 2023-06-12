"use client";
import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";
export default function CategoriesAccordion({ categories }) {
  return (
    <Disclosure className="block lg:hidden" as="div">
      <Disclosure.Button className="py-2">
        <p className="px-2 text-lg font-bold">Categories</p>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 ">
        {categories.map((category, index) => (
          <Link
            href="/"
            key={index}
            className="block px-2 py-3 capitalize transition-colors rounded-md hover:bg-gray-100"
          >
            {category.name}
          </Link>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
}
