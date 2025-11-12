import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Let's build the next wave of AI experiences.</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                Email us at{" "}
                <a href="mailto:hello@aboh.ai" className="hover:text-sky-400 transition-smooth">
                  hello@aboh.ai
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                Portfolio
              </Link>
              <Link
                to="/services"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                What we do
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-gray-300 hover:text-sky-400 transition-smooth"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 space-y-3 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} ABOH. All rights reserved.</p>
          <div className="flex flex-col items-center gap-2 text-gray-400 sm:flex-row sm:justify-center sm:gap-6">
            <Link to="/privacy" className="hover:text-sky-400 transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-sky-400 transition-smooth">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
