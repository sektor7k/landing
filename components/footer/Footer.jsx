import Image from 'next/image'
import Link from 'next/link'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black pt-20 text-white">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/legionslogo.png"
              alt="Castrum Legions Logo"
              className="mb-10 inline-block"
              width={200}
              height={50}
            />
            <p className="max-lg:mb-10">© 2024 Castrum Legions. All rights reserved.</p>
            <div className="py-10 max-lg:text-center">
              <ul className="flex items-center gap-15 max-lg:justify-center lg:ml-auto">
                <li>
                  <Link href="#privacy" className="text-white hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#terms" className="text-white hover:text-gray-400">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2 lg:col-start-9">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <Link href="#ecosystem" className="text-white hover:text-gray-400">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-white hover:text-gray-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-white hover:text-gray-400">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-white hover:text-gray-400">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2 lg:col-start-11">
            <h3 className="mb-8 text-lg font-medium">Get In Touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link href="mailto:support@castrumlegions.com" className="text-white hover:text-gray-400">
                support@castrumlegions.com
              </Link>
            </p>

            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              <li>
                <Link
                  href="https://twitter.com/castrumlegion"
                  target="_blank"
                  className="text-white hover:text-gray-400">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" target="_blank" className="text-white hover:text-gray-400">
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/castrumlegions"
                  target="_blank"
                  className="text-white hover:text-gray-400">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[2px] max-w-screen-1xl  bg-gradient-to-r from-white/0 via-white/80 to-white/0"></div>

        <div className="flex h-[20rem] items-center justify-center">
          <TextHoverEffect text="Legions" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
