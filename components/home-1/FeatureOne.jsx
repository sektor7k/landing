"use client";

import { motion } from "framer-motion";

const FeatureOne = () => {
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

      {/* Castrum Legions Section */}
      <div className="absolute top-[50%] left-[10%] transform -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-white max-w-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-red-500 leading-tight">
            Castrum Legions
          </h2>
          <p className="mt-4 text-sm md:text-base font-light text-gray-300 leading-relaxed">
            Kahramanlar burada toplanıyor. Şimdi harekete geçin ve zafer kazanın!
            <br />
            En güçlülerin mücadelesine katılın.
          </p>
        </motion.div>
      </div>

      {/* Community Sale Section */}
      <div className="absolute top-[50%] right-[10%] transform -translate-y-1/2 z-10 text-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="text-white max-w-sm"
        >
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-red-500 leading-tight">
            Community Sale
          </h2>
          <p className="mt-4 text-sm md:text-base font-light text-gray-300 leading-relaxed">
            Özel ödüller için yerinizi alın. Topluluğun bir parçası olun ve
            fırsatları yakalayarak zaferin bir parçası olun.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureOne;
