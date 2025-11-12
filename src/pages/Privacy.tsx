import { Layout } from "@/components/Layout";

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "ABOH Privacy Policy",
    "description": "How ABOH collects, uses, and protects personal information across its AI services."
  };

  return (
    <Layout
      title="Privacy Policy"
      description="Learn how ABOH collects, uses, and safeguards personal information across our AI software, applications, and consultancy engagements."
      keywords="privacy policy, data protection, personal information, ABOH privacy"
      structuredData={structuredData}
    >
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl space-y-12">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400">
              Privacy
            </p>
            <h1 className="mb-6 text-white">How we handle your data.</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              ABOH only collects the information required to respond to inquiries, deliver contracted services, and
              improve our products. We never sell data and we adhere to applicable privacy laws in the regions we serve.
            </p>
          </div>

          <div className="space-y-10">
            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Information we collect</h2>
              <ul className="space-y-3 text-gray-300">
                <li>Contact details submitted through our website or during onboarding.</li>
                <li>Usage analytics that help us keep the platform secure and performant.</li>
                <li>Project artifacts shared by clients for the purpose of delivering services.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">How we use information</h2>
              <ul className="space-y-3 text-gray-300">
                <li>Responding to support requests and sending relevant project updates.</li>
                <li>Operating, maintaining, and securing the products we build with you.</li>
                <li>Complying with legal obligations and safeguarding our clients&rsquo; data.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft">
              <h2 className="mb-4 text-white">Your choices</h2>
              <p className="text-gray-300 leading-relaxed">
                You can request access, updates, or deletion of your personal information at any time by emailing
                <a href="mailto:privacy@aboh.ai" className="text-sky-400 hover:text-sky-300 ml-1">
                  privacy@aboh.ai
                </a>
                . We respond to verified requests within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
