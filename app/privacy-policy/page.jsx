import Footer from '@/components/footer/Footer'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import PageHero from '@/components/shared/PageHero'

const PrivacyPolicy = () => {
  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main>
        {/* Kahraman bileşeni (Hero) */}
        <PageHero
          subtitle="PRIVACY POLICY"
          title="Privacy Policy"
          paragraph="Castrum Legions respects your privacy and is committed to protecting your personal data. Learn how we collect, use, and safeguard your information."
        />

        {/* Ana içerik bölümü */}
        <section className="pb-150 max-md:overflow-hidden">
          <div className="container relative z-10">

            {/* Dekoratif Arka Planlar (Büyük ekranlarda) */}
            <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-red-300/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]" />
              <div className="-ml-[170px] rounded-full bg-red-300/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]" />
              <div className="-ml-[170px] rounded-full bg-red-300/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]" />
            </div>

            {/* Dekoratif Arka Plan (Küçük ekranlarda) */}
            <div className="absolute left-1/2 -z-10 h-full w-full -translate-x-1/2  bg-cover bg-center bg-no-repeat p-[350px] opacity-70 md:hidden" />

            {/* İçerik Metni */}
            <div className="mx-auto mt-10 max-w-4xl text-white">
              {/* INTRODUCTION */}
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Castrum Legions (&quot;we&quot;, &quot;our&quot;, or &quot;the Platform&quot;) respects your privacy and is committed to protecting your personal data.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                This Privacy Policy explains how we collect, use, and safeguard your information when you access or interact with our platform.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                By connecting your wallet or using Castrum Legions, you agree to the terms outlined in this policy.
              </p>

              {/* INFORMATION WE COLLECT */}
              <h2 className="mt-10 text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                We may collect the following types of information:
              </p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span><strong>Account Information:</strong> Username, email address, and basic profile details.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span><strong>Activity Data:</strong> Tournament participation, achievements, rewards earned, and interactions within the platform.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span><strong>Technical Data:</strong> IP address, browser type, device model, and operating system.</span>
                </li>
              </ul>
              <p className="mt-6 leading-relaxed text-gray-300">
                We do not collect or store private keys, wallet seed phrases, or any sensitive blockchain credentials.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                All blockchain interactions occur directly between you and your chosen wallet provider.
              </p>

              {/* HOW WE USE INFORMATION */}
              <h2 className="mt-10 text-2xl font-bold mb-4">3. How We Use Information</h2>
              <p className="mt-4 leading-relaxed text-gray-300">We use collected data to:</p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Operate, maintain, and improve the platform,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Manage tournaments, leaderboards, and user profiles,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Provide updates, announcements, and rewards,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Ensure fair gameplay and maintain security,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Comply with applicable laws and regulations.</span>
                </li>
              </ul>

              {/* DATA SHARING */}
              <h2 className="mt-10 text-2xl font-bold mb-4">4. Data Sharing and Third Parties</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                We do not sell or rent your personal data.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                Limited data may be shared with trusted partners for:
              </p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Tournament operations and prize distribution,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Analytics, performance, and infrastructure improvements.</span>
                </li>
              </ul>
              <p className="mt-6 leading-relaxed text-gray-300">
                All partners must adhere to strict data protection and confidentiality standards.
              </p>

              {/* COOKIES */}
              <h2 className="mt-10 text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Our website may use cookies to enhance user experience, remember preferences, and analyze traffic.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                You can disable cookies in your browser settings, but some features may not function properly without them.
              </p>

              {/* SECURITY */}
              <h2 className="mt-10 text-2xl font-bold mb-4">6. Security</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                We use encryption, access control, and monitoring systems to protect your information.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                However, users acknowledge that no online or blockchain-based system is completely secure.
              </p>

              {/* YOUR RIGHTS */}
              <h2 className="mt-10 text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                Depending on your location, you may have the right to:
              </p>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Access, correct, or delete your personal information,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Withdraw consent for data processing,</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-500">•</span>
                  <span>Request a copy of your stored data.</span>
                </li>
              </ul>
              <p className="mt-6 leading-relaxed text-gray-300">
                To exercise your rights, contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <a
                  href="mailto:support@castrumlegions.com"
                  className="text-red-500 hover:text-red-400 underline font-semibold"
                >
                  📧 support@castrumlegions.com
                </a>
              </p>

              {/* DATA RETENTION */}
              <h2 className="mt-10 text-2xl font-bold mb-4">8. Data Retention</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                We retain personal information only as long as necessary for operational, legal, or security purposes.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                Blockchain-related actions remain permanently recorded on-chain, in accordance with network protocols.
              </p>

              {/* POLICY UPDATES */}
              <h2 className="mt-10 text-2xl font-bold mb-4">9. Policy Updates</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                We may update this Privacy Policy from time to time.
              </p>
              <p className="mt-4 leading-relaxed text-gray-300">
                The updated version will be posted on our website, and continued use of Castrum Legions indicates your acceptance of those changes.
              </p>

              {/* CONTACT INFORMATION */}
              <h2 className="mt-10 text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="mt-4 leading-relaxed text-gray-300">
                If you have any questions or concerns about this policy, please contact us at:
              </p>
              <p className="mt-4 leading-relaxed">
                <a
                  href="mailto:support@castrumlegions.com"
                  className="text-red-500 hover:text-red-400 underline font-semibold"
                >
                  📧 support@castrumlegions.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
