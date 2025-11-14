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
              <ul className="flex items-center gap-15 max-lg:justify-center lg:ml-auto flex-wrap">
                <li>
                  <Link href="/privacy-policy" className="text-white hover:text-red-500 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white hover:text-red-500 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/branding"
                    className="text-white hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Brand Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2 lg:col-start-9">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <Link href="/#ecosystem" className="text-white hover:text-red-500 transition-colors">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-white hover:text-red-500 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="text-white hover:text-red-500 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/#community" className="text-white hover:text-red-500 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2 lg:col-start-11">
            <h3 className="mb-8 text-lg font-medium">Get In Touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link href="mailto:support@castrumlegions.com" className="text-white hover:text-red-500 transition-colors">
                support@castrumlegions.com
              </Link>
            </p>

            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              <li>
                <Link
                  href="https://twitter.com/castrumlegion"
                  target="_blank"
                  className="text-white hover:text-red-500 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/zYDmmQvSTB" target="_blank" className="text-white hover:text-red-500 transition-colors">
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/castrumlegions"
                  target="_blank"
                  className="text-white hover:text-red-500 transition-colors">
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
