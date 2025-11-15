import { cn } from '@/utils/cn'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import clientBorderDark from '../../public/images/clients/client-border-dark.svg'
import clientBorder from '../../public/images/clients/client-border.svg'

const Clients = ({ border = true, className = 'bg-black pt-0 pb-0' }) => {
  const images = [
    '/images/client/havenscompass.png',
    '/images/client/avalon.png',
     '/images/client/logosomi.png',
     '/images/client/gamesomi.png',
    '/images/client/CriticalOps.png',
    '/images/client/outerring.png',
    '/images/client/tevaera.png',
    '/images/client/worldsofdypinas.png',
   
  ]

  return (
    <section className={cn('client', className)} style={{ margin: 0, padding: 0 }}>
      <div className="container overflow-hidden max-lg:!px-0">
        <div className="relative py-8">
          {/* Border Element */}
          {border && (
            <div className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2">
              <Image
                src={clientBorder}
                alt="border"
                className="inline-block h-full object-cover object-center dark:hidden"
              />
              <Image
                src={clientBorderDark}
                alt="border"
                className="hidden h-full object-cover object-center dark:inline-block"
              />
            </div>
          )}

          {/* Updated Marquee Content */}
          <Marquee pauseOnHover>
            {images.map((image, index) => (
              <div className="marquee-content-list relative w-[250px] overflow-y-hidden" key={index}>
                <Image
                  src={image}
                  alt={`client-${index + 1}`}
                  className="inline-block h-auto w-auto"
                  width={120}
                  height={22}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Clients
