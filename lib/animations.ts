import { Variants } from "framer-motion";

export const menuVariants: Variants = {
  open: {
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
  closed: {
    clipPath: "circle(0% at 50% 50%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 50,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};