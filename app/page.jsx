import Footer from '@/components/footer/Footer'
import Hero from '@/components/home-1/Hero'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import Clients from '@/components/shared/Clients'
import Services from '@/components/home-1/Services'
import { Roadmap } from '@/components/home-1/Roadmap'
import { Ecosystem } from '@/components/Ecosystem/Ecosystem'
import { SimpleFaqsWithBackground } from '@/components/ui/FrequentlyAskedQuestionsAccordion'
import { StickyScrollRevealDemo } from '@/components/home-1/StickyScrollRevealDemo'

export const metadata = {
  title: 'Castrum Legions',
}
export default function Home() {
  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main>
        <Hero />
        <Clients />
        <Ecosystem />
        <Services />

        <Roadmap />
        <SimpleFaqsWithBackground />
      </main>
      <Footer />
    </>
  )
}
