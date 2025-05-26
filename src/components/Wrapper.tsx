"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Reduced for snappier UX
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  const indexVariants = {
    hidden: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {!isVisible ? (
        <div className="h-screen w-screen flex justify-center items-center bg-white dark:bg-[#222]">
          {/* You can add a spinner or animation here */}
          <span className="text-sm text-gray-400">Loading...</span>
        </div>
      ) : (
        <motion.div
          key={pathName}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={pathName === "/" ? indexVariants : variants}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
          className="min-h-screen w-full flex flex-col bg-white dark:bg-[#222] transition-colors"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
