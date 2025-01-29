import Footer from '@/components/footer/Footer'
import SimpleNavbarWithHoverEffects from '@/components/navbar/SimpleNavbarWithHoverEffects'
import PageHero from '@/components/shared/PageHero'

const TermsPage = () => {
  return (
    <>
      <SimpleNavbarWithHoverEffects />
      <main>
        <PageHero
          subtitle="TERMS OF USE"
          title="Terms & Conditions"
          paragraph="Welcome to Castrum Legions. By accessing and using our Websites, you agree to comply with these Terms of Use. Please read them carefully."
        />
        <section className="pb-150 max-md:overflow-hidden">
          <div className="container relative z-10">
            {/* Dekoratif arka plan şekilleri */}
            <div className="absolute left-1/2 top-0 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
              <div className="rounded-full bg-red-300/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]" />
              <div className="-ml-[170px] rounded-full bg-red-300/25 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]" />
              <div className="-ml-[170px] rounded-full bg-red-300/20 blur-[145px] max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]" />
            </div>

            {/* Küçük ekranlar için arka plan */}
            <div className="absolute left-1/2 -z-10 h-full w-full -translate-x-1/2 bg-[url('/images/terms-bg.png')] bg-cover bg-center bg-no-repeat p-[350px] opacity-70 md:hidden" />

            {/* Asıl metin konteyneri, spacing ve siyah metin rengi */}
            <div className="mx-auto mt-10 max-w-4xl text-black">
              {/* Ana Başlık */}
              <h2 className="text-2xl font-bold">TERMS OF USE</h2>

              {/* Bölüm 1 */}
              <h2 className="mt-8 text-2xl font-bold">1. INTRODUCTION AND DEFINITIONS</h2>
              <p className="mt-4 leading-relaxed">
                Welcome to Castrum Legions (“Castrum”, “the Company,” “we,” “us,” or
                “our“). These Terms of Websites (“Terms“) govern your access to and use of
                our websites, applications, and any other products. By accessing or using
                our Websites, you agree to be bound by these Terms.
              </p>
              <p className="mt-4 leading-relaxed">
                Castrum operates the following sites:
              </p>
              {/* UL listesinin rengi beyaz olacak şekilde */}
              <ul className="mt-4 ml-5 list-disc text-white space-y-2">
                <li>
                  <strong>Castrum Capital – castrum.capital</strong><br />
                  A venture capital firm focused on blockchain and cryptocurrency projects,
                  providing investment and strategic support to innovative startups in the
                  Web3 space.
                </li>
                <li>
                  <strong>Castrum Legions – castrumlegions.com</strong><br />
                  A game guild that organizes and supports gaming communities, fostering
                  collaboration and growth within the blockchain gaming ecosystem.
                </li>
                <li>
                  <strong>Castrum Work – castrum.work</strong><br />
                  A crypto growth agency dedicated to scaling blockchain projects through
                  targeted marketing strategies and community engagement.
                </li>
                <li>
                  <strong>Castrum Social – castrum.social</strong><br />
                  An influencer agency that connects brands with influencers in the crypto
                  and blockchain space to amplify their reach and engagement.
                </li>
                <li>
                  <strong>Crypto Data Space – cryptodataspace.com</strong><br />
                  A news and data platform providing insights and updates on the latest
                  trends in the cryptocurrency market.
                </li>
                <li>
                  <strong>Castrum Academy – castrum.academy</strong><br />
                  An educational platform offering courses and training programs on
                  blockchain technology and cryptocurrency, aimed at fostering knowledge and
                  skill development in the industry.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                The aforementioned sites, applications, and any other products shall
                hereinafter be collectively referred to as the “Websites.”
              </p>

              {/* Bölüm 2 */}
              <h2 className="mt-8 text-2xl font-bold">2. ELIGIBILITY</h2>
              <h3 className="mt-4 text-xl font-semibold">2.1. Age Requirement and Capacity:</h3>
              <p className="mt-2 leading-relaxed">
                You represent and warrant that you are at least 18 years of age or the age
                of majority in your jurisdiction, whichever is higher, and are fully
                capable and competent to enter into and abide by these Terms.
              </p>
              <p className="mt-2 leading-relaxed">
                You are not impersonating any individual, using a pseudonym, or otherwise
                concealing your identity.
              </p>

              {/* Bölüm 3 */}
              <h2 className="mt-8 text-2xl font-bold">3. INTELLECTUAL PROPERTY RIGHTS</h2>
              <h3 className="mt-4 text-xl font-semibold">3.1. Ownership of Intellectual Property:</h3>
              <p className="mt-2 leading-relaxed">
                All content, news, essays, articles, any kind of media including audio
                photographs but not limited to those, trademarks, trade names, logos, and
                intellectual property rights related to the Websites are the exclusive
                property of Castrum.
              </p>
              <p className="mt-2 leading-relaxed">
                You acknowledge and agree that:
              </p>
              <ul className="mt-2 ml-5 list-disc text-white space-y-2">
                <li>
                  the Castrum trademarks and logos, and any other logos, names and other
                  proprietary indicia used in the Websites are the property of Castrum
                  (“Trademarks”);
                </li>
                <li>
                  other than the license expressly granted by you in these Terms, no other
                  rights are granted to you in respect of either the Trademarks or Websites;
                  and;
                </li>
                <li>
                  Subject to these Terms, you may view, print and make copies of content for
                  your own personal use or to be stored in an information retrieval system.
                  Without our prior written consent, you shall not, copy, reproduce,
                  download, ‘screen scrape’, store, transmit, broadcast, publish, modify,
                  create a derivative work from, display, perform, distribute, redistribute,
                  sell, license, rent, lease or otherwise use, transfer (either in printed,
                  electronic or other format) or exploit any content, in whole or in part,
                  in any way that does not comply with these Terms without our prior written
                  permission. To request permission to use or store any content other than
                  as expressly permitted in these Terms, please contact{' '}
                  <a
                    href="mailto:cc@castrum.istanbul"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    cc@castrum.istanbul
                  </a>
                </li>
              </ul>
              <p className="mt-2 leading-relaxed">
                Nothing contained in these Terms grants you any interest in any of Castrum’s
                or any third-party’s intellectual property. The use or misuse of Castrum’s
                trademarks or other intellectual property, except as expressly permitted by
                these Terms, is prohibited. You shall promptly notify Castrum at{' '}
                <a
                  href="mailto:cc@castrum.istanbul"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  cc@castrum.istanbul
                </a>{' '}
                if you know or suspect that any of Castrum’s or its providers’ intellectual
                property rights has been violated or infringed.
              </p>

              <h3 className="mt-6 text-xl font-semibold">3.2. License</h3>
              <p className="mt-2 leading-relaxed">
                3.2.1. You must only use the Websites as expressly permitted by these Terms.
                All rights not expressly granted to you are reserved by Castrum, its
                third-party providers and other respective owners, if any.
              </p>
              <p className="mt-2 leading-relaxed">
                3.2.2. Castrum provides content through the Websites that is copyrighted
                and/or trademarked work of Castrum or Castrum’s employees, this includes any
                other data from any Castrum Websites (collectively, the “Licensed
                Content“). For clarity, Licensed Content shall include all such content
                accessed by you at any time. You acknowledge that the Website and the
                Licensed Contents has been developed, compiled, prepared, revised, selected
                and arranged by Castrum and such third parties through the application of
                methods and standards of judgement developed and applied through the
                expenditure of substantial time, effort and money and constitutes valuable
                intellectual property of Castrum and such others. Accordingly, you shall
                protect the proprietary rights of Castrum and all others having rights in
                the Websites during and after the term of these Terms.
              </p>
              <p className="mt-2 leading-relaxed">
                3.2.3. Subject to these Terms, and to the extent of your reliance on the
                data, or the subsequent use of such data, and your compliance with these
                Terms together with any terms and conditions of use of any relevant third
                party providers and the other respective owners of the Licensed Content,
                Castrum hereby grants you a limited, for personal use, non-exclusive,
                non-sub-licensable and non-transferable license to use the Licensed Content.
              </p>
              <p className="mt-2 leading-relaxed">
                3.2.4. If you breach any of these Terms, the above license will terminate
                automatically.
              </p>

              {/* Bölüm 4 */}
              <h2 className="mt-8 text-2xl font-bold">4. PROHIBITED ACTIVITIES</h2>
              <p className="mt-4 leading-relaxed">
                4.1. You further agree not to make use of the Castrum Websites for the
                purpose of:
              </p>
              <ul className="mt-2 ml-5 list-disc text-white space-y-2">
                <li>
                  Uploading, emailing, transmitting, or otherwise making available any
                  content that may be unlawful, harmful, threatening, abusive, harassing,
                  tortious, defamatory, vulgar, obscene, libelous, invasive of another’s
                  privacy or which is hateful, and/or racially, ethnically, or otherwise
                  objectionable (Also See Code of Ethics:{' '}
                  <a
                    href="https://castrum.capital/wp-content/uploads/2024/08/Castrum-Code-of-Ethics.pdf&sa=D&source=docs&ust=1725622983116899&usg=AOvVaw2KU2opUClYkY11pkMnvFI3"
                    className="underline text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  );
                </li>
                <li>Engaging in or creating any unlawful activities;</li>
                <li>Causing harm to any third party;</li>
                <li>
                  Uploading, emailing, transmitting or otherwise offering any Information
                  that may infringe upon any patent, copyright, trademark, or any other
                  proprietary or intellectual rights of any other party;
                </li>
                <li>
                  Uploading, emailing, transmitting or otherwise offering any Information
                  that may contain a software virus or other computer code, any files and/or
                  programs which have been designed to interfere, destroy and/or limit the
                  operation of any computer software, hardware, or telecommunication
                  equipment;
                </li>
                <li>
                  Interfering with or disrupting any of Castrum’s Websites, servers and/or
                  networks that may be connected or related to the Websites; and/or
                </li>
                <li>
                  Introduce a virus, Trojan horse, worm, time bomb or other malware to the
                  Websites or the Platform, or use any device, software or routine to bypass
                  any software or hardware that prohibits volume requests for information;
                </li>
                <li>
                  Make excessive requests for information or take any action that interferes
                  with, disrupts or imposes an undue burden on the Websites or any server or
                  network connected to the Websites or negatively affects the quality or
                  availability of any content, or speed or functionality of the Websites;
                </li>
                <li>
                  Violate, bypass or circumvent any security measure intended to limit or
                  prevent access to the Platform, Licensed Content or Websites;
                </li>
                <li>
                  Otherwise attempt to gain unauthorized access to the Websites, any content
                  or to any computer systems or networks connected to the Websites or any
                  Castrum server, whether through hacking;
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                4.2. You agree that you will not, without Castrum’s prior written consent:
              </p>
              <ul className="mt-2 ml-5 list-disc text-white space-y-2">
                <li>
                  Copy, modify, attempt to decompile or reverse engineer and/or create
                  derivative works of the Websites or any content;
                </li>
                <li>
                  Copy, transfer, mirror, manipulate and/or aggregate any of the Websites or
                  any content (including data) for the purpose of making it available to any
                  third party;
                </li>
                <li>
                  Use or introduce to the Websites any data mining, crawling, “scraping”,
                  robot and/or similar automated or data gathering or extraction method, or
                  manually access, acquire, monitor and/or copy any portion of the Websites,
                  download or store content and/or to scan or probe the underlying structure
                  of Castrum;
                </li>
                <li>
                  Restrict, inhibit or interfere with use of the Website by any other user
                  (including by hacking or defacing the Platform);
                </li>
                <li>
                  Introduce or otherwise distribute through the Platform any computer
                  program that damages, interferes with, intercepts, collects, releases or
                  discloses any system, data or personal information of ours or any third
                  party;
                </li>
                <li>
                  Make use of and/or remove any proprietary notations including, but not
                  limited to, our trademarks, service marks, trade names or logos or those
                  of any third party displayed on the Platform or from the content;
                </li>
                <li>
                  Modify or remove any copyright or other proprietary notice in the
                  content;
                </li>
                <li>
                  Commercialise and/or profit from the content and/or any proprietary
                  information belonging to Castrum and/or its Affiliates. Should you require
                  consent for such activities, a further bilateral agreement must be made
                  between yourself and Castrum.
                </li>
              </ul>

              {/* Bölüm 5 */}
              <h2 className="mt-8 text-2xl font-bold">5. DISCLAIMER</h2>
              <p className="mt-4 leading-relaxed">
                5.1. Castrum, while exercising due diligence to ensure the accuracy and
                timeliness of the content published on its Websites, does not guarantee or
                make any legal commitment regarding the absolute accuracy of such content.
                Although the authenticity and reliability of these content are reviewed and
                published by the Castrum, Castrum does not extend any warranties as to their
                accuracy. Individuals or third parties who rely on this content for any
                actions, transactions, or investments do so at their own risk, and Castrum
                Capital shall not be held liable for any resulting damages.
              </p>
              <p className="mt-2 leading-relaxed">
                5.2. The content provided on the Websites does not constitute investment
                advice, and Castrum accepts no responsibility for any negative outcomes
                arising from the use of this information in investment decisions. The
                content is produced by Castrum in its capacity within the industry,
                reflecting real information, but it is not intended to serve as financial
                guidance. Accordingly, Castrum disclaims all liability for any damages or
                losses arising from the use of these materials under any circumstances.
              </p>
              <p className="mt-2 italic leading-relaxed">(Also See our Disclaimer Policy.)</p>

              {/* Bölüm 6 */}
              <h2 className="mt-8 text-2xl font-bold">6. LIMITATION OF LIABILITY</h2>
              <h3 className="mt-4 text-xl font-semibold">6.1. No Liability:</h3>
              <p className="mt-2 leading-relaxed">
                To the fullest extent permitted by applicable law, Castrum, its partners,
                managers, employees, or affiliates shall not be liable for any indirect,
                incidental, special, punitive, or consequential damages arising out of or in
                connection with your use of the Websites. This includes, but is not limited
                to, damages for loss of profits, goodwill, data, or other intangible losses,
                even if Castrum has been advised of the possibility of such damages.
              </p>

              {/* Bölüm 7 */}
              <h2 className="mt-8 text-2xl font-bold">7. INDEMNIFICATION</h2>
              <h3 className="mt-4 text-xl font-semibold">7.1. Indemnity for Breach:</h3>
              <p className="mt-2 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Castrum, its partners,
                managers, employees, affiliates, and licensors from and against any and all
                claims, damages, obligations, losses, liabilities, costs, and expenses
                (including but not limited to attorney’s fees) arising out of or related to:
              </p>
              <ul className="mt-2 ml-5 list-disc text-white space-y-2">
                <li>Your use or misuse of the Websites;</li>
                <li>Your violation of these Terms;</li>
                <li>Your breach of any representation or warranty set forth in these Terms;</li>
                <li>
                  Your infringement of any intellectual property or other rights of any
                  third party; or
                </li>
                <li>Any other claim related to your use of the Websites.</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">7.2. Indemnity for Third-Party Claims:</h3>
              <p className="mt-2 leading-relaxed">
                You agree to indemnify and hold harmless Castrum from and against any
                claims, damages, losses, or expenses, including legal fees, arising out of
                or related to any third-party claim that your use of the Websites violated
                their rights or applicable law.
              </p>

              <h3 className="mt-6 text-xl font-semibold">7.3. Defense of Claims:</h3>
              <p className="mt-2 leading-relaxed">
                You agree that Castrum may select its own legal counsel and may participate
                in its own defense if it wishes. Castrum reserves the right, at its own
                cost, to assume the exclusive defense and control of any matter otherwise
                subject to indemnification by you, in which event you will fully cooperate
                with Castrum in asserting any available defenses and in the conduct of such
                defense.
              </p>

              {/* Bölüm 8 */}
              <h2 className="mt-8 text-2xl font-bold">8. THIRD-PARTY WEBSITES</h2>
              <h3 className="mt-4 text-xl font-semibold">8.1. Links to Third-Party Websites:</h3>
              <p className="mt-2 leading-relaxed">
                The Websites may contain links to third-party websites. Your use of all
                links to third-party websites is at your own risk. We do not monitor or have
                any control over, and make no claim or representation regarding third-party
                websites.
              </p>

              <h3 className="mt-6 text-xl font-semibold">8.2. Disclaimer of Liability for Third-Party Content:</h3>
              <p className="mt-2 leading-relaxed">
                We are not responsible for, have no control over, and do not monitor or
                review the content of any other website. A link to a third-party website
                does not imply sponsorship, approval, affiliation, or endorsement by Castrum
                of the linked third-party website.
              </p>

              <h3 className="mt-6 text-xl font-semibold">8.3. No Liability for Third-Party Transactions:</h3>
              <p className="mt-2 leading-relaxed">
                You agree that Castrum shall not, under any circumstances, be responsible or
                liable, directly or indirectly, for any websites, information, resources, or
                content available on or through any third-party websites, for any dealings
                or communications you may have with third parties, or for any harm,
                damages, or losses caused or alleged to be caused by, or in connection with,
                any of the foregoing. This includes your use of or reliance on the
                materials, content, or business practices of any third party.
              </p>

              {/* Bölüm 9 */}
              <h2 className="mt-8 text-2xl font-bold">9. AMENDMENT AND VARIATION</h2>
              <h3 className="mt-4 text-xl font-semibold">9.1. Right to Amend:</h3>
              <p className="mt-2 leading-relaxed">
                We reserve the right, at our sole and exclusive discretion, and without
                liability or prior notice to you, to update, change, remove, cancel,
                suspend, disable, or restrict access to or discontinue the Wesites or change
                any features, components, or content thereof.
              </p>

              <h3 className="mt-6 text-xl font-semibold">9.2. Application of Amendments:</h3>
              <p className="mt-2 leading-relaxed">
                If we do so, these Terms shall apply to any and all additional Websites and
                any and all updated, modified, or revised Websites unless otherwise
                stipulated. Your continued use of the Websites after such updates, changes,
                and/or modifications constitutes your acceptance of the revised Terms. It is
                your responsibility to regularly review these Terms to stay informed of any
                updates or changes. Should you not agree to the updated Terms, you must
                cease using the Websites immediately.
              </p>

              {/* Bölüm 10 */}
              <h2 className="mt-8 text-2xl font-bold">10. THIRD PARTY RIGHTS</h2>
              <h3 className="mt-4 text-xl font-semibold">10.1. No Third-Party Enforcement:</h3>
              <p className="mt-2 leading-relaxed">
                Except for entities within Castrum Capital, no person who is not a party to
                these Terms has any right to enforce any of these Terms. These Terms are
                intended solely for the benefit of the Parties to these Terms and their
                respective successors and permitted assigns.
              </p>

              {/* Bölüm 11 */}
              <h2 className="mt-8 text-2xl font-bold">11. NOTICES AND COMMUNICATIONS</h2>
              <h3 className="mt-4 text-xl font-semibold">11.1. Electronic Notices:</h3>
              <p className="mt-2 leading-relaxed">
                By using the Websites, you agree that you may submit a document which
                constitute Type of Advertisement. You may receive notices or other
                communications related to your use of the Websites electronically, including
                via email (to the address you provided), to the Websites. For notices sent
                by email, the date of receipt is deemed to be the date on which such notice
                is transmitted. You will have the option to unsubscribe from advertisement
                communications.
              </p>

              <h3 className="mt-6 text-xl font-semibold">11.2. Notices to Us:</h3>
              <p className="mt-2 leading-relaxed">
                Notices to us should be sent electronically to our support system at{' '}
                <a
                  href="mailto:cc@castrum.com"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  cc@castrum.com
                </a>
              </p>

              {/* Bölüm 12 */}
              <h2 className="mt-8 text-2xl font-bold">12. ENTIRE AGREEMENT</h2>
              <h3 className="mt-4 text-xl font-semibold">12.1. Language and Translation</h3>
              <p className="mt-2 leading-relaxed">
                These Terms are concluded in the English language, and all communications,
                including notices and information, shall be in English. In the event of any
                translation of these Terms into another language, the English language text
                shall prevail, except where expressly prohibited by law.
              </p>

              {/* Bölüm 13 */}
              <h2 className="mt-8 text-2xl font-bold">13. WAIVER</h2>
              <h3 className="mt-4 text-xl font-semibold">13.1. No Waiver of Rights</h3>
              <p className="mt-2 leading-relaxed">
                No waiver of any provision of these Terms shall be deemed a further or
                continuing waiver of such provision or any other provision. The delay or
                failure of any party to enforce any provision of these Terms shall not
                constitute a waiver of such provision or the right to enforce it.
              </p>

              <h3 className="mt-6 text-xl font-semibold">13.2. Cumulative Rights:</h3>
              <p className="mt-2 leading-relaxed">
                No right, power, or remedy conferred upon or reserved for any party under
                these Terms is exclusive of any other right, power, or remedy available to
                that party, and each such right, power, or remedy shall be cumulative.
              </p>

              {/* Bölüm 14 */}
              <h2 className="mt-8 text-2xl font-bold">14. SEVERABILITY</h2>
              <h3 className="mt-4 text-xl font-semibold">14.1. Enforceability of Terms</h3>
              <p className="mt-2 leading-relaxed">
                If any provision of these Terms is found by a court or administrative body
                of competent jurisdiction to be invalid or unenforceable, such provision
                shall be modified or interpreted to achieve its intended purpose to the
                greatest extent possible under applicable laws. The remaining provisions
                shall continue in full force and effect.
              </p>

              {/* Bölüm 15 */}
              <h2 className="mt-8 text-2xl font-bold">15. TRANSFER, ASSIGNMENT OR DELEGATION</h2>
              <h3 className="mt-4 text-xl font-semibold">15.1. Restrictions on Assignment</h3>
              <p className="mt-2 leading-relaxed">
                These Terms, and any rights and obligations or licenses granted hereunder,
                are personal to you and may not be transferred, assigned, or delegated by
                you without our prior written consent. Any unauthorized transfer,
                assignment, or delegation shall be null and void.
              </p>

              <h3 className="mt-6 text-xl font-semibold">15.2. Assignment by Us</h3>
              <p className="mt-2 leading-relaxed">
                We may transfer, assign, or delegate these Terms and any rights and
                obligations hereunder without notice or restriction, including to any entity
                within Castrum or any successor in interest of any business associated with
                the Websites.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TermsPage
