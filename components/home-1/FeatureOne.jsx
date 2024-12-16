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

      {/* Sol Yazılar (Üst ve Sağa Taşındı) */}
      <div className="absolute top-2/3 left-[15%] text-white max-w-sm space-y-2 font-sans z-10">
        <h2 className="text-3xl font-bold">Castrum Legions</h2>
        <ul className="list-disc pl-5 text-lg space-y-1">
          <li>Kahramanlar burada toplanıyor.</li>
          <li>Şimdi harekete geçin ve zafer kazanın!</li>
          <li>En güçlülerin mücadelesine katılın.</li>
        </ul>
      </div>

      {/* Sağ Yazılar (Sola Ortalandı) */}
      <div className="absolute top-1/3 right-[10%] text-white max-w-sm text-right space-y-2 font-sans z-10">
        <h2 className="text-3xl font-bold">Community Sale</h2>
        <ul className="list-disc pl-5 text-lg space-y-1">
          <li>Özel ödüller için yerinizi alın.</li>
          <li>Şimdi katılın ve fırsatları yakalayın!</li>
          <li>Topluluğun bir parçası olun.</li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureOne;
