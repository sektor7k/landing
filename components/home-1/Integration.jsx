import Link from 'next/link'
import IntegrationAnimation from './IntegrationAnimation'

const Integration = () => {
  return (
    <section className="bg-black max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          <p className="section-tagline">Top Integration</p>

          <h2 className="mb-8 text-white">Make productivity easier with 50+ Integrations</h2>
          <p className="mb-10 text-gray-300">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&rsquo;s not Latin
            though it looks like nothing.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
        <IntegrationAnimation />
      </div>
    </section>
  )
}

export default Integration
