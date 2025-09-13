import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/504BCA26-7471-4676-A9CC-0F2FED0B601A_4_5005_c-epQEdGpGZ1eqg4HJYk6enT05PDKqAQ.jpeg"
                alt="Brand Founding Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation with Back Button */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" asChild className="text-gray-600 hover:text-black">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/#opportunities" className="text-gray-600 hover:text-black transition-colors font-medium">
                  Opportunities
                </Link>
                <Link href="/#how-it-works" className="text-gray-600 hover:text-black transition-colors font-medium">
                  How It Works
                </Link>
                <Link href="/#for-investors" className="text-gray-600 hover:text-black transition-colors font-medium">
                  For IP & Businesses
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="border-2 border-black">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl font-bold text-black text-center">
              Terms of Service for Crypto Asset Loan for Consumption
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm max-w-none text-black">
            <p className="mb-6">
              These Terms of Service for Crypto Asset Loan for Consumption (hereinafter referred to as "these Terms")
              set forth the terms and conditions of the Crypto Asset Loan for Consumption Agreement (as defined in
              Article 2, Paragraph 1) to be concluded between GustoDevelopment Inc. (hereinafter referred to as "the
              Company") and the customer, and the rights and obligations between the Company and the customer.
            </p>

            <p className="mb-6 font-semibold">
              Before applying for a Crypto Asset Loan for Consumption Agreement, you must read the full text of these
              Terms and agree to them.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 1: Application</h2>
            <p className="mb-4">
              1. The purpose of these Terms is to establish the transaction conditions for the Crypto Asset Loan for
              Consumption Agreement and the rights and obligations between the Company and the customer concerning the
              said agreement. These Terms shall apply to all matters related to the Crypto Asset Loan for Consumption
              Agreement between the Company and the customer.
            </p>
            <p className="mb-6">
              2. Any conditions related to the Crypto Asset Loan for Consumption Agreement posted by the Company on the
              Website, etc. (as defined in Article 2, Paragraph 10) (hereinafter referred to as "Individual Terms")
              shall constitute a part of these Terms. In the event of any conflict between the content of these Terms
              and the Individual Terms, the content of these Terms shall prevail, unless otherwise specified in the
              Individual Terms.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 2: Definitions</h2>
            <p className="mb-4">In these Terms, the following terms shall have the meanings set forth below:</p>
            <div className="mb-6 space-y-4">
              <p>
                <strong>1. "Crypto Asset Loan for Consumption Agreement"</strong> means an agreement concluded between
                the Company and the customer, under which the customer lends the Target Crypto Assets (as defined in
                the next paragraph) to the Company, and after the Loan Period (as defined in Paragraph 5 of this
                Article), the Company returns to the customer crypto assets of the same type and quantity as the said
                Target Crypto Assets (hereinafter referred to as "the Principal") and pays a predetermined interest
                (as defined in Paragraph 6 of this Article).
              </p>
              <p>
                <strong>2. "Target Crypto Asset"</strong> means the type of crypto asset designated by the Company on
                the Website, etc., which the customer lends to the Company.
              </p>
              <p>
                <strong>3. "Lending Date"</strong> means the date on which the Company receives the Target Crypto
                Assets sent by the customer in the Company's Wallet (as defined in Paragraph 12 of this Article), as
                notified by the Company in accordance with Article 3, Paragraph 2.
              </p>
              <p>
                <strong>4. "Return Date"</strong> means the date on which the Company returns the Principal to the
                customer based on the Crypto Asset Loan for Consumption Agreement, which is the date specified in
                Article 5, Paragraph 1.
              </p>
              <p>
                <strong>5. "Loan Period"</strong> means the period for which the customer lends the Target Crypto Assets
                to the Company under the Crypto Asset Loan for Consumption Agreement, which is the period specified in
                Article 6, Paragraph 1.
              </p>
              <p>
                <strong>6. "Interest"</strong> means the consideration for the use of the crypto assets lent by the
                customer, which shall be in the same type of crypto asset as the Target Crypto Asset.
              </p>
              <p>
                <strong>7. "Interest Rate"</strong> means the rate determined by the Company in accordance with Article
                4.
              </p>
              <p>
                <strong>8. "Fee"</strong> means the crypto asset of the same type as the Target Crypto Asset required
                to record the transaction history on the blockchain upon the transfer of crypto assets.
              </p>
              <p>
                <strong>9. "Automatic Renewal"</strong> means that upon the expiration of the Loan Period of the Crypto
                Asset Loan for Consumption Agreement, the Principal and Interest are incorporated into the Target
                Crypto Assets, and the customer lends the Target Crypto Assets to the Company under the same
                transaction conditions as the immediately preceding Crypto Asset Loan for Consumption Agreement in
                accordance with Article 6, Paragraph 2.
              </p>
              <p>
                <strong>10. "Website, etc."</strong> means the website related to transactions for the Crypto Asset
                Loan for Consumption Agreement provided by the Company (http//lockon.finance/kashitoku) and any social
                networking services separately designated by the Company.
              </p>
              <p>
                <strong>11. "Registered Information"</strong> means the customer's information provided by the customer
                to the Company pursuant to Article 3.
              </p>
              <p>
                <strong>12. "Wallet"</strong> means an application that has the function of sending or receiving Target
                Crypto Assets.
              </p>
              <p>
                <strong>13. "Wallet Address"</strong> means an identifier for a Wallet, consisting of letters,
                numbers, etc.
              </p>
            </div>

            <h2 className="text-lg font-bold mt-8 mb-4">
              Article 3: Formation of the Crypto Asset Loan for Consumption Agreement
            </h2>
            <p className="mb-4">
              1. The customer shall, after agreeing to these Terms, apply for a Crypto Asset Loan for Consumption
              Agreement by providing the matters specified in the following items and other information prescribed by
              the Company in the manner prescribed by the Company, and by sending the Target Crypto Assets to the
              Company's Wallet Address specified in the next paragraph in accordance with the information provided in
              this paragraph. The Crypto Asset Loan for Consumption Agreement shall be deemed to be concluded at the
              time when the Company accepts the application by receiving the Target Crypto Assets at its Wallet
              Address.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Type of the Target Crypto Asset</li>
              <li>
                Amount of the Target Crypto Asset (however, the amount shall be equal to or more than the minimum
                amount separately specified by the Company)
              </li>
              <li>
                The customer's Wallet Address from which the Target Crypto Asset will be sent and to which the
                Principal and Interest will be received
              </li>
              <li>The customer's email address</li>
            </ol>
            <p className="mb-4">
              2. When the information is provided based on the preceding paragraph, the Company shall determine
              whether to accept the customer's application according to the criteria set forth in the following
              items, and if the Company approves the application, it shall notify the customer of the information
              necessary to send the Target Crypto Assets to the Company in the manner prescribed by the Company.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                If the customer has previously violated these Terms, the Crypto Asset Loan for Consumption Agreement,
                or the terms of other services provided by the Company, or has been refused the use of other
                services by the Company.
              </li>
              <li>If the customer resides or is located outside of Japan.</li>
              <li>If the customer is a minor.</li>
              <li>
                If the customer is an adult ward, a person under curatorship, or a person under assistance, and has
                not completed the necessary procedures for the formation of the Crypto Asset Loan for Consumption
                Agreement, such as obtaining the consent of a legal representative, guardian, curator, or assistant.
              </li>
              <li>
                If the customer is a corporation and has not completed the necessary procedures for the formation of
                the Crypto Asset Loan for Consumption Agreement.
              </li>
              <li>
                If the Company determines with reasonable grounds that the customer is an anti-social force, etc.
                (meaning an organized crime group (as defined in Article 2, Item 2 of the Act on Prevention of Unjust
                Acts by Organized Crime Group Members (Act No. 77 of 1991; hereinafter referred to as the
                "Anti-Organized Crime Act")), a member of an organized crime group (as defined in Article 2, Item 6 of
                the Anti-Organized Crime Act), a person for whom five years have not elapsed since they ceased to be a
                member of an organized crime group, an associate member of an organized crime group, a company
                affiliated with an organized crime group, a corporate racketeer, a group engaging in criminal
                activities under the guise of social movements, a group engaging in criminal activities under the
                guise of political activities, a special intelligence violent group, or other similar persons; the
                same shall apply hereinafter), or is involved in any interaction or engagement with anti-social
                forces, etc., such as cooperating in the maintenance, operation, or management of anti-social forces,
                etc. through funding or other means.
              </li>
              <li>If there is any falsehood, error, or omission in all or part of the Registered Information.</li>
              <li>In addition to the preceding items, if the Company deems it inappropriate.</li>
            </ol>
            <p className="mb-4">
              3. Notwithstanding the provisions of the preceding two paragraphs, the Crypto Asset Loan for Consumption
              Agreement shall not be concluded if any of the following items apply between the Company's notification
              under the preceding paragraph and the Lending Date.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                If the type (including the type of blockchain) or amount of the Target Crypto Asset sent by the
                customer differs from the type or amount of the Target Crypto Asset about which the customer provided
                information to the Company pursuant to Paragraph 1 of this Article.
              </li>
              <li>If the Company is unable to receive the Target Crypto Asset by the Lending Date.</li>
              <li>
                If the transaction involving the Target Crypto Assets, etc., violates or is likely to violate laws,
                regulations, or orders.
              </li>
            </ol>
            <p className="mb-6">
              4. In the case prescribed in the preceding paragraph, if the customer has sent the Target Crypto Asset
              to the Company, the Company shall return the said Target Crypto Asset by sending it to the customer's
              Wallet Address in the Registered Information. The Fee for such return shall be borne by the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 4: Interest</h2>
            <p className="mb-6">
              The Interest Rate shall be determined by the Company for each Crypto Asset Loan for Consumption
              Agreement (each "Project") at its discretion. The applicable Interest Rate for each agreement will be
              announced on the Website, etc., and notified to the customer's registered email address prior to or
              upon the conclusion of the agreement.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 5: Return of Principal and Payment of Interest</h2>
            <p className="mb-4">
              1. The Company shall return the Principal and pay the Interest to the customer by adding the Interest to
              the Principal and sending it to the customer's Wallet Address in the Registered Information by the 5th
              business day (the "Return Date") after the expiration of the Loan Period. The Fee for sending the
              Principal and Interest shall be borne by the Company.
            </p>
            <p className="mb-4">
              2. Notwithstanding the preceding paragraph, the Company may return all or part of the Principal and pay
              all or part of the Interest before the Return Date by notifying the customer of a separately designated
              return date in advance. In this case, the Interest shall be calculated with the Loan Period being the
              period from the Lending Date to the return date notified by the Company, and the Principal shall be
              returned and the Interest shall be paid in accordance with the preceding paragraph.
            </p>
            <p className="mb-4">
              3. The Company shall not be liable for any damages incurred by the customer arising from the provisions
              of the preceding paragraph, except as provided in these Terms.
            </p>
            <p className="mb-4">
              4. If it is difficult for the Company to return the Principal and pay the Interest by the Return Date
              due to the reasons specified in Article 19, the Company may pay money equivalent to the value of the
              Principal and Interest in lieu of returning the Principal and paying the Interest. In this case, the
              Company's obligation to return the Principal and pay the Interest to the customer shall be extinguished
              by the payment of such money.
            </p>
            <p className="mb-6">
              5. The amount of money equivalent to the value of the Principal and Interest as stipulated in the
              preceding paragraph shall be calculated by multiplying the quantity of the crypto assets related to the
              Principal and Interest by the rate at which the crypto assets related to the said Principal and Interest
              can be exchanged for legal tender at the crypto asset exchange and on the date separately specified by
              the Company in advance.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 6: Loan Period and Automatic Renewal</h2>
            <p className="mb-4">
              1. The Loan Period of the Crypto Asset Loan for Consumption Agreement shall be one month from the first
              day to the last day of a calendar month. However, if a new Crypto Asset Loan for Consumption Agreement
              is concluded and the Lending Date is not the first day of the month, the Loan Period shall be the period
              from the Lending Date to the last day of the following month.
            </p>
            <p className="mb-4">
              2. Notwithstanding the preceding paragraph, the Crypto Asset Loan for Consumption Agreement shall be
              renewed under the same conditions with the principal and interest of the immediately preceding agreement
              incorporated into the Target Crypto Assets, unless the customer notifies the Company of their intention
              not to renew the agreement. The Interest shall be in accordance with the provisions of Article 4.
            </p>
            <p className="mb-4">
              3. The notification specified in the preceding paragraph shall be made by notifying the contact point
              designated by the Company from the customer's email address registered in the Registered Information by
              the 25th day of each month (if that day is a holiday, the next business day).
            </p>
            <p className="mb-6">
              4. Notwithstanding the provisions of Paragraphs 1 and 2, the Company may choose not to automatically
              renew the Crypto Asset Loan for Consumption Agreement by notifying the customer five business days
              before the expiration date of the Loan Period.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 7: Registered Information</h2>
            <p className="mb-4">
              1. If there is any change in the Registered Information, the customer shall promptly notify the Company
              of such change in the manner prescribed by the Company.
            </p>
            <p className="mb-6">
              2. The Company shall not be liable for any damages arising from the customer's failure to update their
              Registered Information.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 8: Notices</h2>
            <p className="mb-4">
              1. Regarding the Crypto Asset Loan for Consumption Agreement, the Company shall provide notices to the
              customer by contacting the contact information in the Registered Information or by a method separately
              specified by the Company. Such notices shall be deemed to have reached the customer at the time they
              would normally have arrived, unless otherwise provided in these Terms.
            </p>
            <p className="mb-6">
              2. Inquiries regarding the Crypto Asset Loan for Consumption Agreement and other communications or
              notices from the customer to the Company must be made by the method specified by the Company, such as by
              email to info@gustodevelopment.com.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 9: Maintenance of Equipment, etc.</h2>
            <p className="mb-4">
              1. The customer must, at their own expense and responsibility, secure and maintain the equipment and
              communication means necessary to conclude and perform the Crypto Asset Loan for Consumption Agreement.
            </p>
            <p className="mb-6">
              2. The customer shall, at their own expense and responsibility, take security measures such as (i)
              preventing computer virus infections, (ii) preventing unauthorized access, and (iii) preventing
              information leakage, according to their own usage environment.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 10: Entrustment</h2>
            <p className="mb-6">
              The Company may entrust all or part of the operations related to the Crypto Asset Loan Agreement to a
              third party without obtaining the customer's consent.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">
              Article 11: Termination of the Crypto Asset Loan for Consumption Agreement by the Company
            </h2>
            <p className="mb-4">
              1. The Company may terminate all or part of the Crypto Asset Loan for Consumption Agreement without
              prior notice or demand if the customer falls under any of the following items:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Falls under any of the items in Article 3, Paragraph 2.</li>
              <li>
                Violates any provision of these Terms, and such violation is not rectified within a reasonable period
                specified by the Company.
              </li>
              <li>It is found that there is false information in the information provided to the Company.</li>
              <li>The customer dies or is declared missing.</li>
              <li>The customer is liquidated.</li>
              <li>
                (i) The customer suspends payments or becomes insolvent, or a petition is filed for the commencement
                of bankruptcy proceedings, civil rehabilitation proceedings, corporate reorganization proceedings,
                special liquidation, or similar proceedings; (ii) a bill or check drawn or accepted by the customer is
                dishonored, or the customer is subject to a suspension of transactions at a clearinghouse or other
                similar measures; (iii) a petition is filed for attachment, provisional attachment, provisional
                disposition, compulsory execution, or auction; or (iv) the customer is subject to a disposition for
                tax delinquency.
              </li>
              <li>
                The Company reasonably determines that the Crypto Asset Loan for Consumption Agreement is being used
                or is suspected of being used for criminal acts or tax evasion (including but not limited to cases
                where all or part of the Target Crypto Assets are suspected of having been obtained through criminal
                acts).
              </li>
              <li>
                The Company reasonably determines that there is a violation or suspected violation of laws and
                regulations related to money laundering, financing of terrorism, or economic sanctions.
              </li>
              <li>
                The transaction involving the Target Crypto Assets, etc., violates or is likely to violate laws,
                regulations, or orders.
              </li>
              <li>
                The handling of the Target Crypto Assets, etc., is discontinued or is likely to be discontinued at the
                crypto asset exchange designated by the Company.
              </li>
              <li>
                In addition to the preceding items, the Company reasonably determines that it is appropriate to
                suspend the customer's use of this service.
              </li>
            </ol>
            <p className="mb-4">
              2. If the Company terminates the Crypto Asset Loan for Consumption Agreement based on the preceding
              paragraph, it shall promptly return the Principal. In this case, the method of returning the Principal
              shall be governed by Article 5, Paragraph 2, and the Company shall be exempt from paying interest,
              notwithstanding the provisions of Article 4.
            </p>
            <p className="mb-4">
              3. Notwithstanding the preceding paragraph, in the cases specified in the following items, the Company
              may be exempted from or may withhold the return of the Principal or payment of Interest. In this case,
              the Company shall not be liable for default arising from not returning the Principal.
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                When the Crypto Asset Loan for Consumption Agreement is terminated for reasons set forth in Items 7
                and 9 of the preceding paragraph or similar reasons, and the return of the Principal is prohibited or
                suspended by law or an order or other request from a public authority.
              </li>
              <li>
                When the Crypto Asset Loan for Consumption Agreement is terminated for the reason set forth in Item 4
                of Paragraph 1, and the heir is not determined.
              </li>
            </ol>
            <p className="mb-6">
              4. Termination under this article shall not prevent the Company from claiming damages against the
              customer.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">
              Article 12: Termination of the Crypto Asset Loan for Consumption Agreement by the Customer
            </h2>
            <p className="mb-4">
              1. The customer may not cancel or terminate the Crypto Asset Loan for Consumption Agreement, except as
              provided in the following paragraph.
            </p>
            <p className="mb-4">
              2. The customer may terminate the entire Crypto Asset Loan for Consumption Agreement without prior
              notice or demand if the Company falls under any of the following items:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>The Company is liquidated.</li>
              <li>
                (i) The Company suspends payments or becomes insolvent, or a petition is filed for the commencement of
                bankruptcy proceedings, civil rehabilitation proceedings, corporate reorganization proceedings, special
                liquidation, or similar proceedings; (ii) a bill or check drawn or accepted by the Company is
                dishonored, or the Company is subject to a suspension of transactions at a clearinghouse or other
                similar measures; (iii) a petition is filed for attachment, provisional attachment, provisional
                disposition, compulsory execution, or auction; or (iv) the Company is subject to a disposition for tax
                delinquency.
              </li>
              <li>
                The Company violates any provision of these Terms, and such violation is not rectified within a
                reasonable period specified by the customer.
              </li>
              <li>The Company falls under any of the items in Article 542, Paragraph 1 and Paragraph 2 of the Civil Code.</li>
            </ol>
            <p className="mb-6">
              3. If the Crypto Asset Loan for Consumption Agreement is terminated based on the preceding paragraph,
              the Company shall promptly return the Principal and pay the Interest.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 13: Modification of these Terms</h2>
            <p className="mb-4">
              1. The Company may modify these Terms when it deems necessary in the following cases:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>When the modification of these Terms conforms to the general interests of the customer.</li>
              <li>
                When the modification of these Terms does not contradict the purpose of the contract and is reasonable
                in light of the necessity of the modification, the appropriateness of the content after the
                modification, the content of the modification, and other circumstances related to the modification.
              </li>
            </ol>
            <p className="mb-4">
              2. In the case of the preceding paragraph, the Company shall, by the effective date of the modified
              Terms, post on the Website, etc., or notify the customer by the method specified in Article 8 of the
              fact that these Terms will be modified, the content of the modified Terms, and their effective date,
              with a reasonable period of notice.
            </p>
            <p className="mb-6">
              3. In addition to the provisions of the preceding two paragraphs, the Company may modify these Terms by
              obtaining the customer's consent in a manner determined by the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 14: Measures after Termination and Survival Clauses</h2>
            <p className="mb-4">
              1. If the Crypto Asset Loan for Consumption Agreement is terminated for any reason, the Company may
              delete the customer's data related to the agreement (however, (a) information that is technically
              impossible or extremely difficult to delete, and (b) information that is required to be retained by law
              will not be deleted). The customer agrees in advance that they will not be able to recover their data
              related to the Crypto Asset Loan for Consumption Agreement if the agreement is terminated.
            </p>
            <p className="mb-4">
              2. The Company shall not be liable for any damages incurred by the customer as a result of deleting the
              customer's data based on the preceding paragraph.
            </p>
            <p className="mb-6">
              3. Even after the termination of the Service Use Agreement, the provisions of Article 5, Article 11,
              Article 12, Article 14, Article 17, Article 18, Article 20, Article 21, Article 22, Article 23, Article
              24, and Article 25 shall remain in full force and effect.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 15: Prior Consent</h2>
            <p className="mb-4">
              The customer agrees in advance to the following matters regarding the conclusion of the Crypto Asset
              Loan for Consumption Agreement and shall not raise any objections thereto:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                Transactions related to the Crypto Asset Loan for Consumption Agreement are not deposits or similar
                transactions and are not covered by deposit insurance.
              </li>
              <li>The Company will not provide collateral for the Crypto Asset Loan for Consumption Agreement.</li>
              <li>
                The Crypto Asset Loan for Consumption Agreement does not fall under the category of crypto asset
                exchange services based on the Payment Services Act (Act No. 59 of 2009, including subsequent
                amendments; hereinafter referred to as the "Payment Services Act").
              </li>
              <li>
                The Target Crypto Assets are not subject to segregated management under the Payment Services Act.
              </li>
              <li>
                The customer does not have the right to receive repayment in preference to other creditors with
                respect to the Target Crypto Assets lent to the Company.
              </li>
              <li>
                The customer may not be able to receive the return of the Principal and payment of Interest if the
                Company becomes bankrupt.
              </li>
              <li>
                The customer cannot dispose of the Principal and Interest in any way (including but not limited to
                selling, exchanging, sending to other addresses, or providing as collateral to a third party) until
                the Company returns or pays them based on these Terms.
              </li>
              <li>
                The value of the Target Crypto Asset fluctuates daily, and the value of the Target Crypto Asset on the
                Return Date may be lower than the price of the Target Crypto Asset on the Lending Date.
              </li>
              <li>
                Even if the crypto asset market for the Target Crypto Asset fluctuates during the Loan Period, the
                Company is only required to return the crypto assets of the same type and quantity and pay the
                interest in accordance with the provisions of the Crypto Asset Loan for Consumption Agreement, and the
                customer shall bear the risk associated with fluctuations in the value of the Target Crypto Asset.
              </li>
              <li>
                Even if new crypto assets are granted to the Company during the Loan Period due to a hard fork,
                airdrop, or other changes in the technology or specifications used for the Target Crypto Asset, the
                rights and interests related to such granted crypto assets shall belong to the Company.
              </li>
            </ol>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 16: Handling of Customer Information</h2>
            <p className="mb-6">
              The handling of customer information shall be governed by the "Privacy Policy" separately established by
              the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">
              Article 17: Disclaimer of Warranties and Exemption from Liability
            </h2>
            <p className="mb-4">
              1. The Company makes no warranty, express or implied, that the Crypto Asset Loan for Consumption
              Agreement (i) is suitable for the customer's specific purpose, (ii) will achieve specific results, (iii)
              can be used satisfactorily on any OS, web browser, or app version, (iv) has the expected functionality,
              merchantability, accuracy, safety, usefulness, or legality, (v) does not infringe on the rights of
              third parties, (vi) can be used continuously, (vii) will not be interrupted, suspended, or have other
              failures, (viii) is free of bugs or defects, and (ix) is free from hacking or theft.
            </p>
            <p className="mb-4">
              2. Transactions related to the Crypto Asset Loan for Consumption Agreement may link to external
              services, but the Company does not guarantee that the customer can use such external services in such
              collaborations.
            </p>
            <p className="mb-6">
              3. When using an external service linked to transactions related to the Crypto Asset Loan for
              Consumption Agreement, the customer shall (i) comply with the terms of use and other conditions of said
              external service at their own expense and responsibility, and (ii) if a dispute arises between the
              customer and the provider of said external service, the customer shall handle it at their own expense
              and responsibility.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 18: Damages</h2>
            <p className="mb-4">
              1. The customer shall compensate the Company for any damages (including reasonable attorneys' fees)
              caused to the Company in connection with a violation of these Terms or the Crypto Asset Loan for
              Consumption Agreement.
            </p>
            <p className="mb-4">
              2. If a customer receives a complaint from another customer or a third party or a dispute arises with
              them regarding transactions related to the Crypto Asset Loan for Consumption Agreement, the customer
              shall immediately notify the Company of the details, handle the complaint and dispute at their own
              expense and responsibility, and not cause any trouble to the Company. The customer shall also report the
              progress and results to the Company upon request. If the Company suffers damages due to such a complaint
              or dispute, the customer shall compensate for such damages.
            </p>
            <p className="mb-4">
              3. The Company shall not be liable for any damages incurred by the customer in connection with
              transactions related to the Crypto Asset Loan for Consumption Agreement, except in cases of willful
              misconduct or negligence on the part of the Company.
            </p>
            <p className="mb-4">
              4. If a customer incurs damages in connection with transactions related to the Crypto Asset Loan for
              Consumption Agreement due to the Company's negligence, the Company shall be liable only for direct and
              ordinary damages actually incurred by the customer, regardless of the cause of action such as default or
              tort, and shall not be liable for incidental, indirect, special, future damages, or lost profits. The
              cumulative total amount of compensation shall not exceed the amount equivalent to the value of the
              Interest. However, this upper limit shall not apply if the damage specified in this paragraph is caused
              by the Company's gross negligence.
            </p>
            <p className="mb-6">
              5. The amount equivalent to the value of the Interest as stipulated in the preceding paragraph shall be
              calculated by multiplying the quantity of the crypto assets related to the Interest at the time the
              damage occurred by the rate at which the crypto assets related to the said Interest can be exchanged for
              legal tender at the crypto asset exchange specified separately by the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 19: Force Majeure</h2>
            <p className="mb-6">
              The Company shall not be liable for any damages or disadvantages incurred by the customer when the
              performance of the Crypto Asset Loan for Consumption Agreement is hindered by force majeure, including
              but not limited to natural disasters (typhoons, tsunamis, earthquakes, floods, lightning, salt damage,
              etc.), fires, infectious diseases, epidemics, plagues, cyber-attacks, pollution, wars, riots, civil
              commotions, terrorist acts, strikes, sudden fluctuations in the crypto asset market, closure or
              disruption of the crypto asset exchange market, enactment or revision of laws or regulations, orders or
              dispositions by public authorities or other governmental acts, labor disputes, accidents involving
              transportation or communication lines, or other force majeure events.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 20: Exclusion of Anti-Social Forces</h2>
            <p className="mb-4">1. The customer assures the Company of the following matters:</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>
                That neither they nor their officers or equivalent persons are anti-social forces, nor are they
                involved in corporations, etc., where anti-social forces are substantially involved in management, and
                that they will not fall under any of these categories in the future.
              </li>
              <li>
                That they are not involved in providing funds or other benefits to anti-social forces, nor do they
                allow their name to be used to perform this Service Use Agreement.
              </li>
              <li>
                That during the term of this Service Use Agreement, they will not, by themselves or through a third
                party, engage in the following acts: threatening behavior or use of violence, obstructing business, or
                damaging reputation through fraudulent means or force.
              </li>
            </ol>
            <p className="mb-4">
              2. If the customer violates the preceding paragraph, the Company may immediately terminate all or part of
              the Crypto Asset Loan for Consumption Agreement without any notice. In this case, the Company shall not
              be liable to compensate for any damages incurred by the customer due to such termination.
            </p>
            <p className="mb-6">
              3. If the Company terminates the Crypto Asset Loan for Consumption Agreement based on the preceding
              paragraph, the provisions of Article 11, Paragraphs 2 through 4 shall apply mutatis mutandis.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 21: Confidentiality</h2>
            <p className="mb-6">
              The customer shall treat as confidential any non-public information disclosed by the Company in
              connection with the Crypto Asset Loan for Consumption Agreement that the Company has requested to be
              treated as confidential, except with the prior written consent of the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 22: Assignment of Status</h2>
            <p className="mb-6">
              The customer may not assign, transfer, pledge as security, or otherwise dispose of (i) their status
              under the Crypto Asset Loan for Consumption Agreement, or (ii) their rights or obligations under these
              agreements to a third party without the prior written consent of the Company.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 23: Entire Agreement</h2>
            <p className="mb-6">
              These Terms constitute the entire agreement between the Company and the customer regarding the matters
              contained herein and supersede all prior agreements, representations, and understandings, whether oral
              or written, between the Company and the customer regarding the matters contained herein.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 24: Severability</h2>
            <p className="mb-6">
              Even if any provision or part of these Terms is determined to be invalid or unenforceable by law, (i)
              the remaining provisions of these Terms and (ii) the remaining parts of the provision that was partially
              determined to be invalid or unenforceable shall continue to have full force and effect.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 25: Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              1. The governing law for these Terms and the Crypto Asset Loan for Consumption Agreement shall be the
              laws of Japan.
            </p>
            <p className="mb-6">
              2. The Tokyo District Court shall be the exclusive court of first instance for all disputes (including
              mediation proceedings) arising out of or related to these Terms or the Crypto Asset Loan for Consumption
              Agreement.
            </p>

            <h2 className="text-lg font-bold mt-8 mb-4">Article 26: Consultation and Resolution</h2>
            <p className="mb-6">
              The Company and the customer shall promptly resolve any matters not stipulated in these Terms or any
              doubts concerning the interpretation of these Terms through consultation in accordance with the
              principle of good faith and sincerity.
            </p>

            <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm font-semibold">【Supplementary Provision】</p>
              <p className="text-sm">Enacted on February 1, 2025 by GustoDevelopment Inc.</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                For questions regarding these terms, please contact: info@gustodevelopment.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex items-center space-x-6 mb-4 md:mb-0">
              <Link href="/#opportunities" className="text-gray-300 hover:text-white transition-colors">
                Opportunities
              </Link>
              <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="/#for-investors" className="text-gray-300 hover:text-white transition-colors">
                For IP & Businesses
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 Brand Founding. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-2">
              This is a sample website. All investment opportunities shown are for illustrative purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
