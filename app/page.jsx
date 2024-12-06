import Footer from '@/components/footer/Footer'
import Faq from '@/components/home-1/Faq'
import Features from '@/components/home-1/Features'
import Hero from '@/components/home-1/Hero'
import Integration from '@/components/home-1/Integration'
import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Clients from '@/components/shared/Clients'
import EasyStepFeature from '@/components/home-1/EasyStepFeature'
import TimeLine from '@/components/home-1/TimeLine'
import { AnimatedPinDemo } from '@/components/home-1/AnimatedPinDemo'
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

        <Integration />

        <Features />

        <EasyStepFeature />

        <TimeLine />
        
        <AnimatedPinDemo/>
      

      
        {/* advisor */}


        <Faq />



      </main>
      <Footer />
    </>
  )
}
