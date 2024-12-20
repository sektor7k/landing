"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function SimpleNavbarWithHoverEffects() {
  const navItems = [
    { name: "Ecosystem", link: "/ecosystem" },
    { name: "Features", link: "/features" },
    { name: "Roadmap", link: "/roadmap" },
    { name: "Community", subMenu: true },
  ];

  return (
    <div className="w-full bg-black text-white fixed top-0 z-50">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
}

const DesktopNav = ({ navItems }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="hidden lg:flex justify-between items-center w-full px-8 py-4"
    >
      <Logo />
      <div className="flex space-x-6">
        {navItems.map((item, idx) => (
          <div key={idx} className="relative">
            <Link
              href={item.link || "#"}
              onMouseEnter={() => setHovered(idx)}
              className="relative px-4 py-2 text-white hover:text-gray-400"
            >
              {item.name}
            </Link>
            {item.subMenu && hovered === idx && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg shadow-lg"
              >
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500"
                    >
                      <Image
                        src="/icons/twitter.svg"
                        alt="Twitter"
                        width={20}
                        height={20}
                      />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500"
                    >
                      <Image
                        src="/icons/discord.svg"
                        alt="Discord"
                        width={20}
                        height={20}
                      />
                      <span>Discord</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500"
                    >
                      <Image
                        src="/icons/youtube.svg"
                        alt="YouTube"
                        width={20}
                        height={20}
                      />
                      <span>YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://telegram.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white hover:text-red-500"
                    >
                      <Image
                        src="/icons/telegram.svg"
                        alt="Telegram"
                        width={20}
                        height={20}
                      />
                      <span>Telegram</span>
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <button className="p-[3px] relative">
    {/* Kenar Geçiş Efekti */}
    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-white to-red-500 rounded-lg animate-pulse" />
    {/* İç Kısım */}
    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-red-500">
      Launch App
    </div>
  </button>
    </motion.div>
  );
};

const MobileNav = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden flex flex-col px-6 py-4 bg-black">
      <div className="flex justify-between items-center">
        <Logo />
        {isOpen ? (
          <IconX className="text-white w-8 h-8" onClick={() => setIsOpen(false)} />
        ) : (
          <IconMenu2 className="text-white w-8 h-8" onClick={() => setIsOpen(true)} />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col items-start space-y-4 mt-4"
          >
            {navItems.map((item, idx) => (
              <div key={idx} className="relative">
                <Link
                  href={item.link || "#"}
                  className="text-gray-300 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subMenu && (
                  <div className="mt-2 w-full bg-black border border-gray-700 rounded-lg shadow-lg">
                    <ul className="flex flex-col space-y-2 p-4">
                      <li>
                        <a
                          href="https://twitter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500"
                        >
                          <Image
                            src="/icons/twitter.svg"
                            alt="Twitter"
                            width={20}
                            height={20}
                          />
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://discord.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500"
                        >
                          <Image
                            src="/icons/discord.svg"
                            alt="Discord"
                            width={20}
                            height={20}
                          />
                          <span>Discord</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500"
                        >
                          <Image
                            src="/icons/youtube.svg"
                            alt="YouTube"
                            width={20}
                            height={20}
                          />
                          <span>YouTube</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://telegram.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white hover:text-red-500"
                        >
                          <Image
                            src="/icons/telegram.svg"
                            alt="Telegram"
                            width={20}
                            height={20}
                          />
                          <span>Telegram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Logo = () => (
  <Link href="/" className="flex items-center">
    <Image src="/images/legionslogored.jpg" alt="Logo" width={200} height={50} />
  </Link>
);
