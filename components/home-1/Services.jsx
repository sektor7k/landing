'use client'
import { fadeUpAnimation, fadeFromLeftAnimation, fadeFromRightAnimation } from '@/data/animation'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import useWhileInView from '@/hooks/useWhileInView'

const Services = () => {
  const ref = useRef(null)
  const controlAnimation = useWhileInView(ref)

  return (
    <div className="relative pb-150 pt-150">
      {/* Arka plan tamamen kaldırıldı */}
      
      <div className="container relative">
        <div className="mb-14 text-center">
          <p className="section-tagline mb-3">Our services</p>
          <h2 className="mb-12">
            Comprehensive Guide to Cryptocurrency Services <br />
            Aplio.
          </h2>
        </div>

        <div className="relative flex items-center gap-8 max-md:flex-col">
          <motion.div
            className="w-[32%] max-md:w-full"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromRightAnimation}
          >
            <div className="mb-8 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200 max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5"></div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-6 leading-8">Wallets</h3>
                  <p>Software Wallets: Coinbase Wallet, MetaMask, Trust Wallet.</p>
                </div>
              </div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200 max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5"></div>
                </div>
                <div>
                  <h3 className="mb-6 leading-8">Crypto Lending</h3>
                  <p>Centralized Lending: Blockfi, Celsius Network, Nexo.</p>
                </div>
              </div>
            </div>
          </motion.div>

       <motion.div
  className="flex w-[70%] flex-col items-center justify-center max-md:w-full"
  initial="initial"
  ref={ref}
  animate={controlAnimation}
  variants={fadeUpAnimation}
>
  {/* Video */}
  <video
    className="w-[100%] h-auto max-h-[1080px] rounded-md shadow-lg"
    src="/videos/features.mp4"
    autoPlay
    loop
    muted
  ></video>
</motion.div>



          <motion.div
            className="w-[32%] max-md:w-full"
            initial="initial"
            ref={ref}
            animate={controlAnimation}
            variants={fadeFromLeftAnimation}
          >
            <div className="mb-8 rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200 max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5"></div>
                </div>
                <div>
                  <h3 className="mb-6 leading-8">Exchanges</h3>
                  <p>Decentralized Exchanges: Uniswap, SushiSwap, PancakeSwap.</p>
                </div>
              </div>
            </div>
            <div className="rounded-medium bg-white p-2.5 shadow-nav dark:bg-dark-200">
              <div className="rounded border border-dashed border-gray-100 p-10 dark:border-borderColor-dark max-lg:p-5">
                <div className="mb-6 inline-block rounded-full bg-white p-2.5 shadow-nav dark:bg-dark-200 max-lg:p-2">
                  <div className="h-full rounded-full border border-dashed border-gray-100 p-5 dark:border-borderColor-dark max-lg:p-5"></div>
                </div>
                <div className="mb-8">
                  <h3 className="mb-6 leading-8">Payment Services</h3>
                  <p>Crypto Payment Gateways: BitPay, CoinGate, Coinbase Commerce.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services
