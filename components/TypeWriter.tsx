"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { Source_Code_Pro } from "next/font/google";
import { useEffect } from "react";

const font = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

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

  useEffect(() => {
    if (isInView) {
      animate(
        "span.char",
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    const lines: React.ReactNode[] = [];
    let currentLine: React.ReactNode[] = [];

    wordsArray.forEach((word, wordIdx) => {
      const parts = word.text.split('\n');
      parts.forEach((part, partIdx) => {
        if (partIdx > 0) {
          lines.push(<span key={`line-${lines.length}`}>{currentLine}</span>);
          currentLine = [];
        }
        currentLine.push(
          <span key={`word-${wordIdx}-${partIdx}`} className={word.className}>
            {part.split('').map((char, charIdx) => (
              <motion.span
                key={`char-${wordIdx}-${partIdx}-${charIdx}`}
                className="char opacity-0"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
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
      className={cn(
        "text-[13px] tracking-tight text-left",
        className,
        font.className
      )}
    >
      <motion.div ref={scope} className="inline">
        {renderWords().map((line, idx) => (
          <div key={`line-container-${idx}`} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[2px] h-4 bg-neutral-500 -mb-1",
          cursorClassName
        )}
      ></motion.span>
    </pre>
  );
};
