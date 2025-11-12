import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const Services = () => {
  const services = [
    {
      title: "AI Software Development",
      description: "We design and deliver cloud-native platforms, internal tools, and data products that embed machine learning where it creates the most impact.",
      features: [
        "End-to-end product and technical roadmapping",
        "Model design, training, and evaluation",
        "Privacy, security, and MLOps best practices"
      ],
      link: "Start a build"
    },
    {
      title: "ChatGPT Application Development",
      description: "We create tailored conversational agents, copilots, and integrations that extend your data and workflows safely and effectively.",
      features: [
        "Knowledge retrieval and contextual grounding",
        "Persona, tone, and brand alignment",
        "Multi-modal experiences across web, mobile, and voice"
      ],
      link: "Prototype a copilot"
    },
    {
      title: "AI Consultancy",
      description: "We partner with leadership teams to define strategy, assess readiness, and implement governance for sustainable AI transformation.",
      features: [
        "Executive workshops and strategic roadmaps",
        "Responsible AI frameworks and assessments",
        "Organisational change and workforce enablement"
      ],
      link: "Book a consultation"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Development Services",
    "provider": {
      "@type": "Organization",
      "name": "ABOH"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
    <Layout 
      title="AI Services"
      description="End to end AI solutions built for real world impact. From strategy and design to deployment and adoption, we integrate technology and change management to deliver measurable results quickly."
      keywords="AI software development, ChatGPT application development, AI consultancy, machine learning services, AI strategy"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            What we deliver
          </p>
          <h1 className="mb-6 text-white animate-slide-up">
            Scalable AI programs from concept to launch.
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            We combine design, engineering, and organisational alignment to turn ideas into value, fast.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-4 py-10 md:py-12">
        <div className="container mx-auto max-w-5xl">
          <ScrollStack className="scroll-stack-services" useWindowScroll itemDistance={40} itemStackDistance={10}>
            {services.map((service) => (
              <ScrollStackItem key={service.title}>
                <article className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10">
                  <h2 className="text-white">{service.title}</h2>
                  <p className="mb-6 text-lg text-gray-300 leading-relaxed">{service.description}</p>
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start text-gray-300">
                        <span className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-400"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sky-400 font-medium transition-smooth hover:translate-x-1 hover:text-sky-300"
                  >
                    {service.link} <ArrowRight className="ml-2" size={16} />
                  </Link>
                </article>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
