"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const intervalRef = useRef<any>();

  const startAnimation = () => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      if (i === words.length) {
        i = 0;
      }
      setCurrentWord(words[i]);
    }, duration);
  };

  useEffect(() => {
    startAnimation();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startAnimation]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={cn("z-10 inline-block relative text-white/[.87]", className)}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
