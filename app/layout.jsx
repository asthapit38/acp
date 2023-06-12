"use client";
import { delay, motion } from "framer-motion";
import Navigation from "@/app/components/Navigation/NavigationWrapper";
import "./globals.css";
import Footer from "@/app/components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navigation />
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
