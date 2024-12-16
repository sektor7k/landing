import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Roadmap() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Castrum Legions için büyük başarılar ve lansmanlar gerçekleştirildi.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Burada görseller yerine placeholder bırakıldı */}
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Kahramanlar için yeni özellikler ve sistem iyileştirmeleri
            gerçekleştirildi.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Topluluk tarafından güçlü bir destek ve heyecan ile karşılandık.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Yeni bileşenler ve güncellemeler yayınlandı.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Yeni Kahramanlar Eklendi
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Yeni Görevler ve Etkinlikler
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Topluluk Katılım İstatistikleri
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Teknik İyileştirmeler ve Performans Güncellemeleri
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-20 md:h-44 lg:h-60 w-full bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={data}
        customStyle={{
          lineColor: "red", // Çubuğu kırmızı yapmak için
        }}
      />
    </div>
  );
}

export default Roadmap;
