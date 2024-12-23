'use client';

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const FAQs = [
  {
    question: "What is Castrum Legions?",
    answer:
      "Castrum Legions is a revolutionary platform enabling seamless Web3 collaboration and innovation.",
  },
  {
    question: "How can I get started with Castrum Legions?",
    answer:
      "Sign up on our platform to access powerful tools for building and scaling your Web3 projects.",
  },
  {
    question: "What features does Castrum Legions offer?",
    answer:
      "From DAO management to NFT marketplaces, Castrum Legions provides an extensive suite of Web3 solutions.",
  },
  {
    question: "Is Castrum Legions secure?",
    answer:
      "Yes, we employ state-of-the-art blockchain security measures to protect your data and transactions.",
  },
  {
    question: "Can I integrate my existing Web3 project?",
    answer:
      "Absolutely! Castrum Legions is designed to seamlessly integrate with your existing blockchain projects.",
  },
  {
    question: "Where can I learn more about Castrum Legions?",
    answer:
      "Visit our official website or reach out to our support team at support@castrumlegions.com for more information.",
  },
];

export function FrequentlyAskedQuestionsAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-20 md:px-8 md:py-40">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center text-4xl font-bold tracking-tight text-red-500 md:text-5xl"
      >
        Welcome to Castrum Legions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-lg text-center text-base text-neutral-600 dark:text-neutral-50"
      >
        Explore the answers to common questions about our platform. For further assistance, contact us at{" "}
        <a href="mailto:support@castrumlegions.com" className="text-red-500 underline">
          support@castrumlegions.com
        </a>
      </motion.p>
      <div className="mx-auto mt-10 w-full max-w-3xl">
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
      </div>
    </div>
  );
}

const FAQItem = ({ question, answer, setOpen, open }) => {
  const isOpen = open === question;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start">
        <div className="relative mr-4 mt-1 h-6 w-6 flex-shrink-0">
          <IconChevronUp
            className={cn(
              "absolute inset-0 h-6 w-6 transform text-red-500 transition-all duration-200 dark:text-red-400",
              isOpen && "rotate-90 scale-0"
            )}
          />
          <IconChevronDown
            className={cn(
              "absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-red-500 transition-all duration-200 dark:text-red-400",
              isOpen && "rotate-0 scale-100"
            )}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {question}
          </h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden text-neutral-500 dark:text-neutral-400"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
