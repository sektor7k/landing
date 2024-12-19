const FeatureOne = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Video Arka Plan */}
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

      {/* Sol Yazılar */}
      <div className="absolute top-[55%] left-[10%] text-white max-w-sm space-y-4 z-10">
        <h2 className="text-5xl font-extrabold text-red-500 uppercase tracking-wide">
          Castrum Legions
        </h2>
        <div className="border-l-4 border-red-500 pl-4">
          <p className="text-lg font-light">
            Kahramanlar burada toplanıyor.
          </p>
          <p className="text-lg font-light">
            Şimdi harekete geçin ve zafer kazanın!
          </p>
          <p className="text-lg font-light">
            En güçlülerin mücadelesine katılın.
          </p>
        </div>
      </div>

      {/* Sağ Yazılar */}
      <div className="absolute top-[55%] right-[10%] text-white max-w-sm text-right space-y-4 z-10">
        <h2 className="text-5xl font-extrabold text-red-500 uppercase tracking-wide">
          Community Sale
        </h2>
        <div className="border-r-4 border-red-500 pr-4">
          <p className="text-lg font-light">
            Özel ödüller için yerinizi alın.
          </p>
          <p className="text-lg font-light">
            Şimdi katılın ve fırsatları yakalayın!
          </p>
          <p className="text-lg font-light">
            Topluluğun bir parçası olun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
