"use client";

import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";

const FeatureOne = () => {
  // Title style
  const titleStyle = {
    background: "linear-gradient(90deg, #FF4500, #FFFFFF)", // Red to white gradient
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  };

  // List items
  const items = [
    "High Security: Investments protected by blockchain-based infrastructure.",
    "Token Benefits: Early access opportunities and exclusive rewards.",
    "DAO Integration: Community-driven decision-making mechanisms.",
    "NFT and Ecosystem Compatibility: Reward mechanisms that enhance project value.",
    "Sustainable Income: Long-term growth strategy.",
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/comunitysale.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Left Section */}
      <div className="absolute top-[30%] left-[15%] z-10">
        <div className="text-neutral-400 text-base max-w-xs">
          {/* Title */}
          <h2
            style={titleStyle}
            className="text-3xl font-extrabold mb-6 uppercase"
          >
            Experience the Future
          </h2>

          {/* Slogan and LinkPreview */}
          <p className="mb-4">
            Discover{" "}
            <LinkPreview
              url="https://castrumlegions.com"
              className="font-bold text-[#FF6347] hover:text-[#FF4500] transition-colors"
            >
              Castrum Legions
            </LinkPreview>{" "}
            and unleash the power of Web3 innovation.
          </p>
          <p className="mb-4">
            Build your future with{" "}
            <LinkPreview
              url="https://castrumlegions.com/features"
              className="font-bold text-[#FFA500] hover:text-[#FF8C00] transition-colors"
            >
              decentralized technology
            </LinkPreview>{" "}
            that leads the next revolution.
          </p>
          <p>
            Join{" "}
            <LinkPreview
              url="https://castrumlegions.com/community"
              className="font-bold bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700"
            >
              our growing community
            </LinkPreview>{" "}
            and shape tomorrow with Castrum Legions.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="absolute top-[30%] right-[15%] z-10 text-white max-w-sm">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.h2
            style={titleStyle}
            className="text-3xl uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Community Sale
          </motion.h2>

          {/* List Items */}
          <ul className="space-y-2 text-gray-300 text-base">
            {items.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <span className="mr-2 text-[#FF4500] text-base">•</span>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="https://castrumlegions.com/community-sale"
              className="inline-block px-4 py-2 bg-[#FF4500] text-white text-base font-bold rounded-md shadow-md hover:bg-[#e03e00] transition-colors"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureOne;
