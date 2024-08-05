"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menuVariants, itemVariants } from "@/lib/animations";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-end items-center p-4">
      {/* Buttons on the right */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-sm font-semibold text-white bg-wedgewood rounded-full hover:bg-baliHai">
          + Become a Client
        </button>

        <button
          className="p-2 text-wedgewood bg-white rounded-full focus:outline-none"
          onClick={toggleMenu}
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              initial={false}
              animate={isOpen ? { d: "M6 18L18 6M6 6l12 12" } : { d: "M4 6h16M4 12h16m-7 6h7" }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>

      <motion.div
        className="fixed inset-0 bg-wedgewood"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {/* Logo and Business Name in dropdown */}
        {isOpen && (
          <div className="absolute top-4 left-4 flex items-center space-x-4">
            <img src="/logo.png" alt="SoleMedia Logo" className="w-10 h-10" />
            <span className="text-lg font-semibold text-white">SoleMedia</span>
          </div>
        )}

        {/* Close button in the dropdown */}
        {isOpen && (
          <button
            className="absolute top-4 right-4 p-2 text-white bg-transparent rounded-full focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <motion.nav
          className="flex flex-col items-center justify-center h-full text-white"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={itemVariants}
        >
          {["Home", "Our Services", "About Us", "Portfolio", "Reviews", "Contact Us"].map(
            (item, index) => (
              <motion.a
                key={index}
                href="#"
                className="mb-4 text-4xl font-bold hover:text-baliHai"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default NavBar;
