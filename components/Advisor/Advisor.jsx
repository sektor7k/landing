import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

export function Advisor() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: '/images/avatar.png',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: '/images/avatar2.png',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: '/images/avatar3.png',
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: '/images/avatar.png',
    },
    {
      quote:
        'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Lisa Thompson',
      designation: 'VP of Technology at FutureNet',
      src: '/images/avatar.png',
    },
  ]

  return (
    <section id='advisor' className="relative bg-black px-4 py-20 text-white md:px-10">
      {/* Üst Başlık */}
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Advisor Testimonials</h2>
        <p className="text-lg text-gray-300 md:text-xl">Hear what our advisors have to say about us</p>
      </div>

      {/* Testimonials Alanı */}
      <div className="mx-auto max-w-7xl">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}
