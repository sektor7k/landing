"use client";
import React from "react";
import { StickyScroll } from "../ui/ticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Single Elimination Bracket",
    description:
      "A fast-paced and highly competitive tournament format. Win and move forward, lose and you're out. Only the strongest make it to the final round!",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/single.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="single elimination demo"
        />
      </div>
    ),
  },
  {
    title: "Double Elimination Bracket",
    description:
      "A tournament format that gives players a second chance. Losing once doesn’t eliminate you; you drop to the losers' bracket and keep fighting. However, a second loss means you're out for good.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/double.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="double elimination demo"
        />
      </div>
    ),
  },
  {
    title: "Battle Royale Bracket",
    description:
      "Everyone competes at the same time, but only one can survive. Players or teams enter matches, and as rounds progress, eliminations continue until just one remains—the ultimate champion.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/Battle.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="battle royale demo"
        />
      </div>
    ),
  },
  {
    title: "Round Robin Bracket",
    description:
      "Each player or team competes against every opponent. No eliminations—everyone plays all their matches, and the one with the most wins claims victory. Consistency is key!",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/robin.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="round robin demo"
        />
      </div>
    ),
  },
  {
    title: "Swiss Bracket",
    description:
      "A non-elimination format where players face opponents with similar records each round. Every match matters, and the player or team with the most wins at the end becomes the champion.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/swiss.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="swiss bracket demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div  className="p-10">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">
        Bracket Breakdown
      </h1>
      <p className="text-lg text-slate-300 mb-6 text-center max-w-2xl mx-auto">
        Explore the most popular tournament formats, from Single Elimination to Swiss Bracket. Learn how each system works and find the perfect structure for your competition.
      </p>
      <StickyScroll
        content={content}
        contentClassName="text-lg"
        titleClassName="text-2xl font-bold"
      />
    </div>
  );
}