"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
  scrollRange?: [number, number]; // opsional untuk atur scroll awal & akhir
}

export const TextReveal: FC<TextRevealProps> = ({
  children,
  className,
  scrollRange = [0.2, 0.8], // default scrollYProgress: 20%–80%
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");
  const total = words.length;

  return (
    <div ref={containerRef} className={cn("relative z-0 h-[180vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center px-4 py-10 bg-transparent">
        <p className="flex flex-wrap text-lg text-justify font-medium leading-relaxed text-black/20 dark:text-white/20">
          {words.map((word, i) => {
            const start = scrollRange[0] + (i / total) * (scrollRange[1] - scrollRange[0]);
            const end = start + 0.05; // durasi untuk tiap kata tampil
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 whitespace-nowrap">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};
