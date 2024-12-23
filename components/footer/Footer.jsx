import { FooterData } from '@/data/footer';
import footerSeperator from '@/public/images/footer-seperator.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black pt-20 text-white">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/castrum-logo.svg"
              alt="Castrum Legions Logo"
              className="mb-10 inline-block"
              width={100}
              height={40}
            />
            <p className="max-w-[350px] max-lg:mx-auto">
              "Castrum Legions is your gateway to decentralized gaming and blockchain innovation."
            </p>
          </div>

          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <Link href="#about" className="text-white hover:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#games" className="text-white hover:text-gray-400">
                  Our Games
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-white hover:text-gray-400">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <Link href="#docs" className="text-white hover:text-gray-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-white hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white hover:text-gray-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Get In Touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link href="mailto:support@castrumlegions.com" className="text-white hover:text-gray-400">
                support@castrumlegions.com
              </Link>
            </p>
            <p className="mb-3">
              <Link href="tel:+1234567890" className="text-white hover:text-gray-400">
                +1 234 567 890
              </Link>
            </p>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              <li>
                <Link href="https://twitter.com/castrumlegions" target="_blank" className="text-white hover:text-gray-400">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/castrumlegions" target="_blank" className="text-white hover:text-gray-400">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://github.com/castrumlegions" target="_blank" className="text-white hover:text-gray-400">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src={footerSeperator}
            alt="footer-seperator"
            className="w-full object-cover max-md:h-[1px]"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">© 2024 Castrum Legions. All rights reserved.</p>
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
      </div>
    </footer>
  );
};

export default Footer;
