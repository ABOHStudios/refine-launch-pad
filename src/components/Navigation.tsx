import { useLocation } from "react-router-dom";
import logo from "@/assets/LOGOABOH.png";
import PillNav from "@/components/PillNav";

export const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-center px-4 py-4 md:px-6 lg:px-8">
        <PillNav
          logo={logo}
          logoAlt="ABOH"
          items={navItems}
          activeHref={location.pathname}
          className="shadow-[0_8px_30px_rgba(2,6,23,0.45)]"
          ease="power2.easeOut"
          baseColor="rgba(2,6,23,0.95)"
          pillColor="rgba(15,23,42,0.85)"
          hoveredPillTextColor="#38bdf8"
          pillTextColor="#f8fafc"
        />
      </div>
    </header>
  );
};
