import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Settings, MessageSquare, Lightbulb } from "lucide-react";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ABOH",
    "description": "AI Innovation Studio delivering AI-powered software, ChatGPT applications, and strategic consultancy",
    "url": "https://aboh.ai",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-010-2030",
      "contactType": "Customer Service",
      "email": "hello@aboh.ai"
    }
  };

  return (
    <Layout 
      title="AI Innovation Studio"
      description="ABOH delivers AI-powered software, ChatGPT applications, and strategic consultancy with elegance and innovation. Transform your business with human-centered AI."
      keywords="AI software, ChatGPT applications, AI consultancy, machine learning, artificial intelligence, AI innovation"
      structuredData={structuredData}
      background="beams"
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            AI software, applications, and consultancy
          </p>
          <h1 className="mb-6 text-white animate-slide-up">
            Building the next generation of intelligent software
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            ABOH ships production AI software, conversational applications, and strategy engagements that translate emerging tech into measurable outcomes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Link to="/services">
              <Button variant="brand" size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                Explore services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-sky-400">
              What we do
            </p>
            <h2 className="text-white">Full-stack AI craftsmanship.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={<Settings size={24} />}
              title="AI Software Development"
              description="Ship bespoke platforms that weave AI into everyday workflows."
              delay={0}
            />
            <ServiceCard
              icon={<MessageSquare size={24} />}
              title="ChatGPT Application Development"
              description="Launch copilots and assistants grounded in your data and brand."
              delay={100}
            />
            <ServiceCard
              icon={<Lightbulb size={24} />}
              title="AI Consultancy"
              description="Align teams, roadmaps, and governance so AI ships responsibly."
              delay={200}
            />
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Home;
