
import Footer from '@/components/footer/Footer'
import Features from '@/components/home-1/Features'
import Hero from '@/components/home-1/Hero'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import Clients from '@/components/shared/Clients'
import { Teams } from '@/components/home-1/Teams'
import Services from '@/components/home-1/Services'
import { Roadmap } from '@/components/home-1/Roadmap'
import { Advisor } from '@/components/Advisor/Advisor'
import { Ecosystem } from '@/components/Ecosystem/Ecosystem'
import { FrequentlyAskedQuestionsAccordion } from '@/components/ui/FrequentlyAskedQuestionsAccordion'

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
        <Features />
        <Services />
        <Roadmap />
        <Teams />
        <Advisor />
        <FrequentlyAskedQuestionsAccordion />
      </main>
      <Footer />
    </>
  )
}
