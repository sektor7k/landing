import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Advisor() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/images/avatar.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/images/avatar2.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/avatar3.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/avatar.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/avatar.png",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 px-4 md:px-10">
      {/* Üst Başlık */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Advisor Testimonials
        </h2>
        <p className="text-lg md:text-xl text-gray-300">
          Hear what our advisors have to say about us
        </p>
      </div>

      {/* Testimonials Alanı */}
      <div className="max-w-7xl mx-auto">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
