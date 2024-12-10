'use client';
import { fadeUpAnimation, fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useWhileInView from '@/hooks/useWhileInView';
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Services = () => {
  const ref = useRef(null);
  const controlAnimation = useWhileInView(ref);

  return (
    <div className="relative pb-150 pt-150">
      <div className="container relative mx-auto h-screen flex items-center justify-center">
        {/* Ortadaki Video */}
        <motion.div
          className="absolute inset-0 w-full h-full -z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeUpAnimation}
        >
          <video
            className="w-full h-full object-cover"
            src="/videos/features.mp4"
            autoPlay
            loop
            muted
          ></video>
        </motion.div>

        {/* Sol Üst */}
        <motion.div
          className="absolute top-10 left-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromLeftAnimation}
        >
          <CardSpotlight className="h-64 w-64">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Wallets</p>
            <div className="text-neutral-200 mt-4 relative z-20">
              <ul>
                <Step title="Coinbase Wallet" />
                <Step title="MetaMask" />
                <Step title="Trust Wallet" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Sağ Üst */}
        <motion.div
          className="absolute top-10 right-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromRightAnimation}
        >
          <CardSpotlight className="h-64 w-64">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Crypto Lending</p>
            <div className="text-neutral-200 mt-4 relative z-20">
              <ul>
                <Step title="Blockfi" />
                <Step title="Celsius Network" />
                <Step title="Nexo" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Sol Alt */}
        <motion.div
          className="absolute bottom-10 left-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromLeftAnimation}
        >
          <CardSpotlight className="h-64 w-64">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Exchanges</p>
            <div className="text-neutral-200 mt-4 relative z-20">
              <ul>
                <Step title="Uniswap" />
                <Step title="SushiSwap" />
                <Step title="PancakeSwap" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>

        {/* Sağ Alt */}
        <motion.div
          className="absolute bottom-10 right-10 z-10"
          initial="initial"
          ref={ref}
          animate={controlAnimation}
          variants={fadeFromRightAnimation}
        >
          <CardSpotlight className="h-64 w-64">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Payment Services</p>
            <div className="text-neutral-200 mt-4 relative z-20">
              <ul>
                <Step title="BitPay" />
                <Step title="CoinGate" />
                <Step title="Coinbase Commerce" />
              </ul>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </div>
  );
};

const Step = ({ title }) => (
  <li className="flex gap-2 items-start">
    <CheckIcon />
    <p className="text-white">{title}</p>
  </li>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
      fill="currentColor"
      strokeWidth="0"
    />
  </svg>
);

export default Services;
