"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimate, useInView } from "framer-motion";
import { Source_Code_Pro } from "next/font/google";
import { useEffect, useState, useRef } from "react";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

const CURSOR_OFFSET = 2; // Adjust this value as needed

type WordType = {
  text: string;
  className?: string;
};

export const TypeWriter = ({
  words,
  className,
  cursorClassName,
}: {
  words: WordType | WordType[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = Array.isArray(words) ? words : [words];
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [currentPosition, setCurrentPosition] = useState({ top: 0, left: 0 });
  const containerRef = useRef<HTMLPreElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      const totalChars = wordsArray.reduce((acc, word) => acc + word.text.length, 0);

      const animateChars = async () => {
        for (let i = 0; i < totalChars; i++) {
          const charElement = containerRef.current?.querySelector<HTMLSpanElement>(`.char-${i}`);
          if (charElement) {
            await animate(
              charElement,
              { opacity: 1 },
              { duration: 0.05, ease: "easeInOut" }
            );

            const rect = charElement.getBoundingClientRect();
            const containerRect = containerRef.current!.getBoundingClientRect();
            setCurrentPosition({
              top: rect.top - containerRect.top,
              left: rect.right - containerRect.left + CURSOR_OFFSET,
            });
          }
        }
      };

      animateChars();
    }
  }, [isInView, animate, wordsArray, isAnimating]);

  const renderWords = (): React.ReactNode[] => {
    const lines: React.ReactNode[] = [];
    let currentLine: React.ReactNode[] = [];
    let charIndex = 0;

    wordsArray.forEach((word, wordIdx) => {
      const parts = word.text.split('\n');
      parts.forEach((part, partIdx) => {
        if (partIdx > 0) {
          lines.push(<span key={`line-${lines.length}`}>{currentLine}</span>);
          currentLine = [];
        }
        currentLine.push(
          <span key={`word-${wordIdx}-${partIdx}`} className={word.className}>
            {part.split('').map((char, idx) => {
              const currentCharIndex = charIndex++;
              return (
                <motion.span
                  key={`char-${wordIdx}-${partIdx}-${idx}`}
                  className={`char char-${currentCharIndex} opacity-0`}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              );
            })}
          </span>
        );
      });
    });

    if (currentLine.length > 0) {
      lines.push(<span key={`line-${lines.length}`}>{currentLine}</span>);
    }

    return lines;
  };

  return (
    <pre
      ref={containerRef}
      className={cn(
        "text-[13px] tracking-tight text-left relative",
        className,
        font.className
      )}
    >
      <motion.div ref={scope} className="inline">
        {renderWords().map((line, idx: number) => (
          <div key={`line-container-${idx}`} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, top: 0, left: 0 }}
        animate={{ 
          opacity: 1, 
          top: currentPosition.top,
          left: currentPosition.left
        }}
        transition={{
          opacity: { duration: 0.8, repeat: Infinity, repeatType: "reverse" },
          top: { duration: 0.05, ease: "linear" },
          left: { duration: 0.05, ease: "linear" },
        }}
        className={cn(
          "absolute rounded-sm w-[2px] h-4 bg-neutral-500",
          cursorClassName
        )}
        style={{ transform: `translateX(${CURSOR_OFFSET}px)` }}
      ></motion.span>
    </pre>
  );
};
