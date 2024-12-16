import Footer from '@/components/footer/Footer'
import Faq from '@/components/home-1/Faq'
import Features from '@/components/home-1/Features'
import Hero from '@/components/home-1/Hero'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Clients from '@/components/shared/Clients'
import { Teams } from '@/components/home-1/Teams'
import Advisor from '@/components/home-1/Advisor'
import Services from '@/components/home-1/Services'
import { Roadmap } from '@/components/home-1/Roadmap'


export const metadata = {
  title: 'Castrum Legions',
}

export default function Home() {
  return (
    <>
      <PrimaryNavbar />
      <main>
        <Hero />
        <Clients />
        <Features />
        <Services />
       <Roadmap/>
        <Teams />
        <Advisor />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
