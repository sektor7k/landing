import Footer from '@/components/footer/Footer'
import Cta from '@/components/home-1/Cta'
import Faq from '@/components/home-1/Faq'
import Features from '@/components/home-1/Features'
import Hero from '@/components/home-1/Hero'
import Integration from '@/components/home-1/Integration'




import PrimaryNavbar from '@/components/navbar/PrimaryNavbar'
import Clients from '@/components/shared/Clients'



import FinancialBlog from '@/components/shared/FinancialBlog'


import Testimonial from '@/components/shared/Testimonial'
import EasyStepFeature from '@/components/home-1/EasyStepFeature'

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
        
        
       


       

        <Faq />
        <Testimonial />
        <FinancialBlog />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
