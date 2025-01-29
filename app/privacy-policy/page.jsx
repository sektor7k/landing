import Footer from '@/components/footer/Footer'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import PageHero from '@/components/shared/PageHero'

const DisclaimerPolicy = () => {
  return (
    <>
      <SecondaryNavbar />
      <main>
        {/* Kahraman bileşeni (Hero) */}
        <PageHero
          subtitle="DISCLAIMER POLICY"
          title="Read Our Disclaimer"
          paragraph="By accessing and using our Websites, you acknowledge and agree to the following terms and conditions outlined in our Disclaimer Policy."
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
            <div className="mx-auto mt-10 max-w-4xl text-black">
              {/* INTRODUCTION */}
              <h2 className="text-2xl font-bold">INTRODUCTION</h2>
              <p className="mt-4 leading-relaxed">
                This Disclaimer Policy (“Policy“) is issued by Castrum Capital (“Castrum“)
                and is applicable to all users who access or utilize the content available
                on Castrum’s associated Websites. The purpose of this Policy is to clearly
                define the limitations of Castrum’s liabilities and to provide users with a
                comprehensive understanding of the potential risks associated with the
                content provided. By accessing these Websites, users acknowledge and agree
                to the terms outlined herein.
              </p>


              <h2 className="mt-8 text-2xl font-bold">GENERAL DISCLAIMER</h2>
              <p className="mt-4 leading-relaxed">
                <strong>Token Project Content Disclaimer:</strong> Castrum’s Websites might
                provide token project information and projections, intended solely for
                informational purposes. Such content may not always be accurate, complete,
                or current, and should not be relied upon as the sole basis for making
                investment decisions. Castrum shall not bear responsibility for any
                financial losses, legal consequences, or damages arising from the reliance
                on or use of token project information and/or content. Users are strongly
                advised to conduct independent research or consult a financial advisor
                before making any financial commitments.
              </p>


              <h2 className="mt-8 text-2xl font-bold">
                CRYPTOCURRENCY LANDSCAPE ANALYSIS AND TECHNICAL CONTENT
              </h2>
              <p className="mt-4 leading-relaxed">
                <strong>Digital Assets Environment and Technical Risks:</strong> Castrum’s
                Websites might offer content related to digital assets environment analysis,
                technical predictions, and investment strategies. Given the volatile nature
                of digital assets environment, this content might be subject to errors,
                disruptions, or inaccuracies, and may not always reflect the most recent
                digital assets ecosystem conditions. Users should exercise caution and
                recognize that digital assets environment predictions are inherently
                speculative. Castrum shall not be liable for any losses or damages arising
                from the use of this content or from the unpredictable fluctuations in the
                digital assets ecosystem that may contradict the information provided.
              </p>


              <h2 className="mt-8 text-2xl font-bold">LEGAL AND REGULATORY CONTENT</h2>
              <p className="mt-4 leading-relaxed">
                <strong>Legal Content Disclaimer:</strong> Castrum’s Websites might provide
                information that touches upon legal and regulatory matters. However, this
                content is not intended to serve as legal advice and may not cover all
                relevant laws and regulations that apply to the user’s specific
                circumstances. Users are responsible for seeking independent legal counsel
                to ensure compliance with all applicable laws. Castrum shall not be held
                liable for any actions taken based on the legal content provided on the
                Websites, and users are advised to consult qualified legal professionals
                before making any decisions that may have legal implications.
              </p>


              <h2 className="mt-8 text-2xl font-bold">CONTENT ACCURACY AND RECOMMENDATIONS</h2>
              <h3 className="mt-4 text-xl font-semibold">Accuracy of Information:</h3>
              <p className="mt-2 leading-relaxed">
                The content provided on Castrum’s Websites might not always be accurate,
                complete, or up-to-date. While Castrum strives to ensure the reliability of
                the information, the content is offered “as-is,” without any warranties,
                express or implied. Users should be aware that the information might contain
                errors or omissions and should verify the accuracy of the content through
                independent sources. Castrum shall not guarantee the accuracy or reliability
                of the content and shall not be liable for any errors, inaccuracies, or
                omissions.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Non-Investment Recommendations:</h3>
              <p className="mt-2 leading-relaxed">
                Castrum’s Websites might provide content related to specific investments,
                tokens, or any other digital assets. However, such content is not intended
                as a recommendation or endorsement of any particular investment strategy or
                asset. Castrum does not offer personalized investment advice, and users
                should not interpret the content as a directive to engage in any specific
                investment activity. Users are encouraged to perform their own due diligence
                and consult with a financial advisor before making any investment decisions.
                Castrum shall not be held responsible for any investment outcomes based on
                the content provided on the Websites.
              </p>

              {/* CYBERSECURITY AND THIRD-PARTY CONTENT */}
              <h2 className="mt-8 text-2xl font-bold">
                CYBERSECURITY AND THIRD-PARTY CONTENT
              </h2>
              <h3 className="mt-4 text-xl font-semibold">Cybersecurity Risks:</h3>
              <p className="mt-2 leading-relaxed">
                Castrum’s Websites might be vulnerable to cybersecurity threats, including
                unauthorized access, data breaches, or malicious attacks. Although Castrum
                employs security measures to protect its Websites, it cannot guarantee
                absolute security. Users are advised to take precautions, such as using
                secure connections and safeguarding their personal information. Castrum
                shall not be liable for any losses, damages, or interruptions resulting from
                cybersecurity breaches, unauthorized access, or any other malicious
                activities that may impact the Websites or user data.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Third-Party Content and Links:</h3>
              <p className="mt-2 leading-relaxed">
                Castrum’s Websites might include content, advertisements, or links to
                third-party websites. Castrum does not control, endorse, or assume
                responsibility for the accuracy, legality, or relevance of third-party
                content. Users who choose to access third-party websites do so at their own
                risk, and Castrum shall not be held liable for any issues that arise from
                interactions with third-party content, including security breaches,
                misinformation, or other negative outcomes. Users are encouraged to review
                the terms and privacy policies of any third-party sites they visit.
              </p>


              <h2 className="mt-8 text-2xl font-bold">DATA PROTECTION RISKS</h2>
              <p className="mt-4 leading-relaxed">
                <strong>Data Protection and Privacy Risks:</strong> Castrum’s Websites might
                collect, store, and process user data in accordance with its privacy policy.
                However, despite Castrum’s efforts to safeguard personal data, there may be
                risks of data breaches, unauthorized access, or misuse of personal
                information. Users should be aware of these risks and take appropriate
                measures to protect their own data. Castrum shall not be liable for any
                damages, losses, or privacy violations arising from such risks.
              </p>


              <h2 className="mt-8 text-2xl font-bold">
                INTELLECTUAL PROPERTY RIGHTS RISKS
              </h2>
              <p className="mt-4 leading-relaxed">
                <strong>Intellectual Property Risks:</strong> The content provided on
                Castrum’s Websites might include proprietary information, trademarks,
                copyrights, and other intellectual property owned by Castrum or third
                parties. Users are granted limited rights to access and use the content for
                personal, non-commercial purposes only. Any unauthorized use, reproduction,
                distribution, or modification of the content may result in infringement of
                intellectual property rights. Castrum shall not be liable for any disputes
                or claims arising from the unauthorized use of its intellectual property or
                the intellectual property of third parties featured on the Websites.
              </p>


              <h2 className="mt-8 text-2xl font-bold">RISK DISCLOSURE FOR CRYPTO PROJECTS</h2>
              <p className="mt-4 leading-relaxed">
                <strong>Crypto Projects Risk Disclosure:</strong> Castrum’s Websites might
                provide information related to various cryptocurrency projects. Users should
                be aware that investing in or participating in cryptocurrency projects
                involves significant risks, including but not limited to digital assets
                environment volatility, regulatory uncertainty, and potential loss of
                investment. Castrum does not guarantee the success or security of any
                cryptocurrency projects mentioned on the Websites. Users are advised to
                conduct thorough research and exercise caution when engaging with
                cryptocurrency projects. Castrum shall not be liable for any losses,
                damages, or legal issues arising from involvement in cryptocurrency
                projects.
              </p>


              <h2 className="mt-8 text-2xl font-bold">
                DISPUTE RESOLUTION AND LIABILITY LIMITATIONS
              </h2>
              <h3 className="mt-4 text-xl font-semibold">
                Content-Related Disputes:
              </h3>
              <p className="mt-2 leading-relaxed">
                Castrum’s Websites might contain content that could lead to disputes,
                conflicts, or legal claims. Users are solely responsible for any reliance on
                the content and for any actions taken as a result of the information
                provided. Castrum shall not be held liable for any disputes, conflicts, or
                legal actions that arise from the use of the content on the Websites. Users
                are encouraged to seek professional advice and exercise caution when
                interpreting and acting upon the information provided.
              </p>
              <h3 className="mt-4 text-xl font-semibold">Limitation of Liability:</h3>
              <p className="mt-2 leading-relaxed">
                To the fullest extent permitted by law, Castrum disclaims all liability for
                any direct, indirect, incidental, or consequential damages arising from the
                use or misuse of content on the Websites. This limitation applies to all
                claims, whether based on warranty, contract, tort, or any other legal
                theory, even if Castrum has been advised of the possibility of such damages.
                Castrum’s total liability to users for any claims arising out of or relating
                to the use of the content on the Websites shall be limited to the amount, if
                any, paid by the user for accessing the Websites.
              </p>

              {/* AMENDMENTS AND CHANGES */}
              <h2 className="mt-8 text-2xl font-bold">AMENDMENTS AND CHANGES</h2>
              <p className="mt-4 leading-relaxed">
                Castrum reserves the right to amend, modify, or update this Policy at any
                time without prior notice. Changes to this Policy will be effective
                immediately upon posting on the Websites. Users are encouraged to review
                this Policy periodically to stay informed of any updates. Continued use of
                the Websites following any changes to this Policy constitutes acceptance of
                those changes.
              </p>

              {/* CONTACT INFORMATION */}
              <h2 className="mt-8 text-2xl font-bold">CONTACT INFORMATION</h2>
              <p className="mt-4 leading-relaxed">
                If users have any questions, concerns, or require further clarification
                regarding this Policy or the content on Castrum’s Websites, they are
                encouraged to contact Castrum directly. Castrum can be reached at the
                following contact information:
              </p>
              <p className="mt-2 leading-relaxed">
                Email:{" "}
                <a
                  href="mailto:support@castrumlegions.com"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  cc@castrum.istanbul
                </a>
              </p>
              <p className="mt-2 leading-relaxed">
                Castrum will make reasonable efforts to respond to inquiries in a timely
                manner.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default DisclaimerPolicy
