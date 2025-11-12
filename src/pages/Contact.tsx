import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email service not configured",
        description: "Set your EmailJS IDs in the environment to enable direct submissions.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          company: formData.company || "N/A",
          message: formData.message,
          title: "Website contact",
          to_email: "hello@aboh.studio",
        },
        publicKey,
      );

      toast({
        title: "Message sent",
        description: "Thank you for reaching out — we'll respond within two business days.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again or email hello@aboh.studio directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ABOH",
    description: "Get in touch with ABOH for AI software development, ChatGPT applications, and AI consultancy services.",
    email: "hello@aboh.studio",
  };

  return (
    <Layout
      title="Contact Us"
      description="Let's design your next AI milestone. Email or drop us a note — we reply within two business days."
      keywords="contact ABOH, AI consultation, get in touch, AI services inquiry, schedule demo"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-400 animate-fade-in">
            Contact
          </p>
          <h1 className="mb-6 text-white animate-slide-up">Let's design your next AI milestone.</h1>
          <p className="text-xl text-gray-300 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Email us directly or send a message below — we monitor the inbox constantly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="mb-8 text-white">Talk with us</h2>
                <p className="text-gray-300 mb-8">
                  Include the opportunity, timeline, and budget so we can respond with clear next steps.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-soft transition-smooth hover:shadow-medium hover:bg-white/10">
                <div className="mb-2 flex items-center gap-2 text-sky-400">
                  <Mail size={18} />
                  <p className="text-sm font-medium uppercase tracking-wider">Email</p>
                </div>
                <a
                  href="mailto:hello@aboh.studio"
                  className="text-lg font-medium text-white hover:text-sky-400 transition-smooth"
                >
                  hello@aboh.studio
                </a>
                <p className="mt-2 text-sm text-gray-400">
                  We aim to respond within two business days. Urgent requests should include timelines in the subject.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-soft"
              >
                <h2 className="mb-8 text-white">Send a message</h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jordan Lee"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-300">
                      Subject of interest
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="AI platform build, automation, etc."
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Share context, goals, and timelines."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send email"}
                  </Button>

                  <p className="text-sm text-gray-400">
                    Delivered privately to hello@aboh.studio — no email client required.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
