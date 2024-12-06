"use client";
import { fadeUpAnimation } from "@/data/animation";
import useWhileInView from "@/hooks/useWhileInView";
import hostingStepDark from "@/public/images/home-5-img/hosting-steps-dark.png";
import hostingStep from "@/public/images/home-5-img/hosting-steps.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import FadeUpOneByOneAnimation from "../animations/FadeUpOneByOneAnimation";

const easyStepPlan1 = [
  {
    id: 1,
    title: "Choose Domain",
    description:
      "Choose a domain name that reflects your website&apos;s purpose, content, or the nature of your business.",
  },
  {
    id: 2,
    title: "Login/Register",
    description:
      "Take the first step towards creating your website and reaching a wider audience by registering today.",
  },
  {
    id: 3,
    title: "Make Payment",
    description:
      "We offer a variety of secure payment methods to make your payment process convenient and hassle-free.",
  },
];

const easyStepPlan2 = [
  {
    id: 1,
    title: "Chooseee Domain",
    description:
      "Choose a domain name that reflects your website&apos;s purpose, content, or the nature of your business.",
  },
  {
    id: 2,
    title: "Login/Register",
    description:
      "Take the first step towards creating your website and reaching a wider audience by registering today.",
  },
  {
    id: 3,
    title: "Make Payment",
    description:
      "We offer a variety of secure payment methods to make your payment process convenient and hassle-free.",
  },
];

const EasyStepFeature = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <>
      <section className="relative overflow-hidden bg-black">
        <div className="container relative z-10 pt-16 pb-24">
          <div className="mx-auto mb-16 max-w-[550px] text-center text-white">
            <h2 className="text-white">
              What&apos;s the procedure for <br />
              its operation?
            </h2>
          </div>

          <div className="grid grid-cols-2 items-start gap-10 max-md:grid-cols-1">
            <div className="space-y-10 max-md:order-1">
              {/* Aralarındaki boşluk için space-y-10 eklendi */}
              {easyStepPlan1?.map((plan, i) => (
                <FadeUpOneByOneAnimation
                  i={i}
                  className="rounded-medium bg-gray-800 p-4 shadow-box dark:bg-dark-200"
                  key={plan.id}
                >
                  <div className="rounded p-8 max-md:p-4">
                    <div className="flex gap-10 max-lg:gap-5">
                      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
                        <p className="font-jakarta_sans font-bold text-paragraph dark:text-paragraph">
                          {plan.id}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2.5 text-white">{plan.title}</h3>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeUpOneByOneAnimation>
              ))}
            </div>
            <motion.div
              className="relative flex aspect-square items-center justify-end max-md:justify-center"
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}
              ref={ref}
            >
              <Image
                src={hostingStep}
                alt="company image"
                className="aos-init aos-animate dark:hidden"
                placeholder="blur"
                quality={70}
              />
              <Image
                src={hostingStepDark}
                alt="company image"
                className="aos-init aos-animate hidden dark:inline-block"
                placeholder="blur"
                quality={70}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black pt-16 pb-24">
        <div className="container relative z-10">
          <div className="grid grid-cols-2 items-start gap-10 max-md:grid-cols-1">
            <motion.div
              className="relative flex aspect-square items-center justify-start max-md:justify-center"
              initial="initial"
              animate={controlAnimation}
              variants={fadeUpAnimation}
              ref={ref}
            >
              <Image
                src={hostingStep}
                alt="company image"
                className="aos-init aos-animate dark:hidden"
                placeholder="blur"
                quality={70}
              />
              <Image
                src={hostingStepDark}
                alt="company image"
                className="aos-init aos-animate hidden dark:inline-block"
                placeholder="blur"
                quality={70}
              />
            </motion.div>

            <div className="space-y-10 max-md:order-2">
              {/* Aralarındaki boşluk için space-y-10 eklendi */}
              {easyStepPlan2?.map((plan, i) => (
                <FadeUpOneByOneAnimation
                  i={i}
                  className="rounded-medium bg-gray-800 p-4 shadow-box dark:bg-dark-200"
                  key={plan.id}
                >
                  <div className="rounded p-8 max-md:p-4">
                    <div className="flex gap-10 max-lg:gap-5">
                      <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-primary">
                        <p className="font-jakarta_sans font-bold text-paragraph dark:text-paragraph">
                          {plan.id}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-2.5 text-white">{plan.title}</h3>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeUpOneByOneAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EasyStepFeature;
