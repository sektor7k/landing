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
          <source src="/videos/comunitysale.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex justify-between items-end w-full px-10 pb-20">
        {/* Sol Taraf Yazı */}
        <div className="text-white max-w-sm">
          <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Roboto Slab', serif" }}>
            Castrum Legions
          </h2>
          <p className="text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Kahramanlar burada toplanıyor. Şimdi harekete geç!
          </p>
        </div>

        {/* Sağ Taraf Yazı */}
        <div className="text-white max-w-sm text-right">
          <h2 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Roboto Slab', serif" }}>
            Community Sale
          </h2>
          <p className="text-lg" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Özel ödüller için yerinizi alın. Şimdi katılın!
          </p>
        </div>
      </div>
    </section>
    );
  };
  
  export default FeatureTwo;