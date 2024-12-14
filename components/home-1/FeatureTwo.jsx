const FeatureTwo = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Video Arka Plan */}
      <div className="absolute inset-0">
        <video
          id="background-video"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/bet.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Sol Alt Yazılar */}
      <div className="absolute bottom-20 left-10 text-white max-w-sm space-y-2 font-sans">
        <h2 className="text-3xl font-bold">Destansı Arenalar</h2>
        <ul className="list-disc pl-5 text-lg space-y-1">
          <li>Kahramanlarını seç ve stratejini belirle.</li>
          <li>Zafer için savaş!</li>
          <li>Yeteneklerinle toplumu şaşırt.</li>
        </ul>
      </div>

      {/* Sağ Alt Yazılar */}
      <div className="absolute bottom-20 right-10 text-white max-w-sm text-right space-y-2 font-sans">
        <h2 className="text-3xl font-bold">Efsaneler Yarat</h2>
        <ul className="list-disc pl-5 text-lg space-y-1">
          <li>Yeni hikayeler ve karakterler keşfet.</li>
          <li>Kendi efsaneni oluştur.</li>
          <li>Gücünle dünyayı şekillendir.</li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureTwo;
