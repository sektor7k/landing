'use client'

import TimeLineCard from './TimeLineCard'

export const TimeLineData = [
  {
    id: 1,
    yearRange: '2024',
    title: 'The Beginning',
    item: [
      {
        year: '2024',
        details: 'Castrum Legions was founded with a vision to revolutionize blockchain-based gaming.',
      },
      {
        year: '2025',
        details: 'Initial projects launched, focusing on GameFi and decentralized economies.',
      },
      {
        year: '2026',
        details: 'Achieved major milestones with partnerships and innovative NFT utilities.',
      },
    ],
  },
  {
    id: 2,
    yearRange: '2027-2029',
    title: 'Expansion Phase',
    item: [
      {
        year: '2027',
        details: 'Castrum Legions expanded its presence in global markets.',
      },
      {
        year: '2028',
        details: 'Launched DAO governance for player-driven decisions.',
      },
      {
        year: '2029',
        details: 'Ecosystem growth with multiple GameFi integrations and DApps.',
      },
    ],
  },
  {
    id: 3,
    yearRange: '2030-2032',
    title: 'The Future of Blockchain Gaming',
    item: [
      {
        year: '2030',
        details: 'Introduced next-gen blockchain technology with immersive gaming experiences.',
      },
      {
        year: '2031',
        details: 'Further advancements in interoperability and tokenomics.',
      },
      {
        year: '2032',
        details: 'Castrum Legions becomes a household name in blockchain gaming.',
      },
    ],
  },
]

const TimeLine = () => {
  return (
    <section className="bg-black pb-150 dark:bg-dark-300">
      {/* Componentin arka planı siyah olarak ayarlandı */}
      <div className="container">
        <div className="grid grid-cols-12 items-start max-md:gap-y-8 md:gap-8">
          <div className="col-span-12 lg:sticky lg:top-150 lg:col-span-4">
            <div className="max-lg:mb-20">
              <p className="section-tagline">Castrum Legions Journey</p>
              {/* Başlık ve açıklamalar Castrum Legions'a uygun hale getirildi */}
              <h2 className="mb-8 text-white">Timeline</h2>
              <p className="text-gray-300 lg:max-w-[520px]">
                Discover the evolution of Castrum Legions as we redefine the boundaries of blockchain gaming and GameFi.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-15">
            <div className="relative z-10">
              <div className="absolute right-20 top-1/2 -z-10 flex -translate-y-1/2 flex-col max-sm:hidden">
                <div className="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"></div>
                <div className="h-[330px] w-[330px] rounded-full bg-primary-200/20 blur-[145px] xl:h-[350px] xl:w-[350px]"></div>
              </div>

              <div className="relative">
                <ul className="stack-cards js-stack-cards">
                  {TimeLineData.map((item, i) => (
                    <TimeLineCard key={`p_${i}`} {...item} i={i} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
