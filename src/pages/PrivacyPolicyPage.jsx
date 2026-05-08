import { Container, Typography } from '@mui/material'

function PrivacyPolicyPage() {
  return (
    <main className="bg-[#F8FFFB] py-16">
      <Container maxWidth="lg">
        <section className="rounded-3xl border border-emerald-100 bg-white p-7 shadow-[0_14px_30px_rgba(6,78,59,0.08)] md:p-10">
          <Typography variant="h2" className="!font-sans !text-3xl !font-bold !text-[#1A3C34] md:!text-4xl">
            Privacy Policy
          </Typography>
          <Typography className="!mt-3 !font-sans !text-sm !font-semibold !text-emerald-700">
            Last updated: May 8, 2026
          </Typography>
          <Typography className="!mt-4 !max-w-4xl !font-sans !text-[#355A4F]">
            This Privacy Policy explains how SavoryOps collects, uses, stores, and protects information when you use
            our white-label restaurant SaaS platform and related services. By using this website and platform, you
            agree to the practices described here.
          </Typography>
        </section>

        <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8">
          <Typography variant="h5" className="!font-sans !font-bold !text-[#1A3C34]">
            Software Purchase and Deployment Details
          </Typography>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            White-Label Licensing Scope
          </Typography>
          <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            Buyers who purchase SavoryOps can deploy the software in their country using their own software name,
            logo, and theme colors. The buyer receives country-level rights to operate and market the platform under
            their own brand for restaurant businesses.
          </Typography>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            Commercial Rights and Ownership
          </Typography>
          <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            This model is provided as a white-label software licensing arrangement. The buyer controls brand identity,
            local go-to-market execution, and commercial relationships with restaurant owners using the deployed
            platform within the permitted territory.
          </Typography>
          <ul className="mt-3 space-y-2 text-sm text-[#355A4F]">
            <li>- The buyer may sell the software service to restaurant owners in their approved market.</li>
            <li>- The buyer can collect subscription fees directly from restaurant owners.</li>
            <li>- Subscription revenue collected from restaurant owners belongs 100% to the buyer.</li>
            <li>- The buyer is responsible only for the software purchase amount and applicable setup charges.</li>
            <li>- The buyer may use their own pricing model, billing cycle, and restaurant onboarding process.</li>
            <li>- The buyer may apply their own brand assets, including software name, logo, and color theme.</li>
            <li>- The buyer is responsible for local legal and tax compliance in their operating country.</li>
            <li>- SavoryOps platform intellectual property remains owned by SavoryOps unless otherwise agreed in writing.</li>
          </ul>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            Support and Setup Terms
          </Typography>
          <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            SavoryOps also provides customer support services and software setup assistance. Setup fees are charged
            separately as listed on the pricing page or shared in a custom commercial proposal.
          </Typography>
        </section>

        <section className="mt-6 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8">
          <Typography variant="h5" className="!font-sans !font-bold !text-[#1A3C34]">
            SaaS Service Model Details
          </Typography>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            Service Delivery Model
          </Typography>
          <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            SavoryOps is delivered as a SaaS platform that supports daily restaurant operations such as ordering, KOT,
            billing, reservation workflows, reporting, and multi-role team coordination. Buyers receive access to
            platform capabilities through managed software services rather than source code transfer.
          </Typography>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            Operations, Access, and Responsibilities
          </Typography>
          <ul className="mt-3 space-y-2 text-sm text-[#355A4F]">
            <li>- Service availability depends on network access, infrastructure uptime, and scheduled maintenance windows.</li>
            <li>- Feature releases, performance updates, and security improvements may be delivered periodically.</li>
            <li>- Platform access can be role-based for admins, owners, staff, and other approved users.</li>
            <li>- Data generated by buyer-operated tenants remains available to authorized buyer accounts.</li>
            <li>- Buyers are responsible for credential security and access governance for their teams.</li>
            <li>- Abuse, unauthorized access attempts, or illegal usage may result in service restriction.</li>
          </ul>
          <Typography className="!mt-4 !font-sans !text-base !font-semibold !text-[#1A3C34]">
            Support Coverage
          </Typography>
          <Typography className="!mt-2 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            Support coverage includes onboarding guidance, configuration help, and issue assistance based on the
            selected plan or support commitment. Extended setup, advanced integrations, or custom feature work may be
            billed separately under agreed project scope.
          </Typography>
        </section>

        <section className="mt-6 rounded-3xl border border-emerald-100 bg-white p-6 md:p-8">
          <Typography variant="h5" className="!font-sans !font-bold !text-[#1A3C34]">
            Policy Updates and Contact
          </Typography>
          <Typography className="!mt-3 !font-sans !text-sm !leading-relaxed !text-[#355A4F]">
            We may update this Privacy Policy periodically to reflect service, legal, or security changes. Updates are
            posted on this page with a revised effective date. For privacy-related questions, contact us at
            info@savoryops.com.
          </Typography>
        </section>
      </Container>
    </main>
  )
}

export default PrivacyPolicyPage
