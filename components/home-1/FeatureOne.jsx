"use client";

import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";

const FeatureOne = () => {
  const titleStyle = {
    background: "linear-gradient(90deg, #FF6347, #8B0000)", // Zarif kırmızı geçiş
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
  };

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
      <div className="absolute top-[65%] left-[15%] transform -translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-sm"
        >
          <motion.h2
            style={titleStyle}
            className="text-3xl md:text-4xl uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Castrum Legions
          </motion.h2>
          <ul className="space-y-3">
            {[
              "Gerçek Zamanlı Strateji: Dinamik savaş alanında zafer kazanın.",
              "Liderlik ve İş Birliği: Takımınızı güçlendirin.",
              "Efsanevi Karakterler: Tarih yazmak için özel geliştirme.",
              "Sonsuz Gelişim: Sıralamalarda zirveye çıkın.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-300 text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <AiOutlineCheck className="mr-3 text-[#FF4500] text-lg" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Community Sale Section */}
      <div className="absolute top-[65%] right-[15%] transform -translate-y-1/2 z-10 text-right">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white max-w-sm"
        >
          <motion.h2
            style={titleStyle}
            className="text-3xl md:text-4xl uppercase mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Community Sale
          </motion.h2>
          <ul className="space-y-3">
            {[
              "Özel Token Avantajları: Yatırımlarınızı kazanca dönüştürün.",
              "NFT ve Ödül Sistemleri: Uzun vadeli değer oluşturun.",
              "Erken Erişim: Yeniliklerden ilk siz haberdar olun.",
              "DAO Üyeliği: Proje kararlarında söz sahibi olun.",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-end text-gray-300 text-sm md:text-base"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {item}
                <AiOutlineCheck className="ml-3 text-[#FF4500] text-lg" />
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureOne;
