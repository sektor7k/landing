"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
  titleClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // "end start" yerine "end end" kullanarak sonuna kadar algılamayı sağlıyoruz
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progressPerCard = 1 / cardLength; // Her kart için ilerleme oranını hesapla
    const closestBreakpointIndex = Math.min(
      Math.floor(latest / progressPerCard),
      cardLength - 1 // Son kartın aşılmamasını sağla
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = useMemo(() => ["var(--black)"], []);
  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, var(--black))",
      "linear-gradient(to bottom right, var(--black))",
      "linear-gradient(to bottom right, var(--black))",
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[35rem] overflow-y-auto flex justify-center relative space-x-12 rounded-md p-12"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={cn(
                  "text-2xl font-bold text-slate-100",
                  titleClassName
                )}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className={cn(
                  "text-base text-slate-300 max-w-sm mt-12",
                  contentClassName
                )}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-48" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-80 w-96 rounded-md bg-white sticky top-12 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};