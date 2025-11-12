import { Layout } from "@/components/Layout";

const Terms = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TermsAndConditions",
    "name": "ABOH Terms of Service",
    "description": "Terms that govern your use of ABOH websites, software, and consultancy services."
  };

  return (
    <Layout
      title="Terms of Service"
      description="Understand the conditions that govern your use of ABOH websites, software, and professional services."
      keywords="terms of service, ABOH terms, service agreement"
      structuredData={structuredData}
    >
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400">
              Terms
            </p>
            <h1 className="mb-6 text-white">Conditions for working with ABOH.</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              By accessing our site or partnering with us, you agree to the terms below. We keep the language clear so
              responsibilities are transparent for both sides.
            </p>
          </div>

          <div className="space-y-10">
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Use of our site</h2>
              <p className="text-gray-300 leading-relaxed">
                Content on this site is provided for informational purposes. You may not copy it for commercial use
                without written permission. We run routine monitoring to protect the site from abuse.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Engagements and deliverables</h2>
              <p className="text-gray-300 leading-relaxed">
                Statements of work govern timelines, scope, and acceptance criteria. Each party agrees to provide timely
                feedback so milestones can be met. Intellectual property ownership is defined per engagement and does not
                transfer until invoices are paid in full.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Liability and warranties</h2>
              <p className="text-gray-300 leading-relaxed">
                ABOH delivers work using industry best practices, but we cannot guarantee uninterrupted operation of any
                third-party services. Our liability is limited to the fees paid for the specific engagement. Nothing in
                these terms limits rights that cannot be waived by law.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Questions about these terms can be sent to
                <a href="mailto:legal@aboh.ai" className="text-sky-400 hover:text-sky-300 ml-1">
                  legal@aboh.ai
                </a>
                . We review the policy periodically and update the effective date when changes are made.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
