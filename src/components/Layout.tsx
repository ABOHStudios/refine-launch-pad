import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import Beams from "./Beams";
import LightRays from "./LightRays";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  structuredData?: object;
  background?: "beams" | "lightRays" | "none";
}

export const Layout = ({
  children,
  title,
  description,
  keywords,
  structuredData,
  background = "lightRays",
}: LayoutProps) => {
  const fullTitle = `${title} | ABOH`;
  
  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={`https://aboh.ai${window.location.pathname}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://aboh.ai${window.location.pathname}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        
        {/* Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      
      <div className="relative min-h-screen bg-slate-950 text-white">
        {/* Fixed Background */}
        <div className="fixed inset-0 z-0 bg-slate-950">
          {background === "beams" && (
            <Beams
              beamWidth={2}
              beamHeight={15}
              beamNumber={12}
              lightColor="#0EA5E9"
              speed={2}
              noiseIntensity={1.75}
              scale={0.2}
              rotation={0}
            />
          )}
          {background === "lightRays" && (
            <LightRays
              raysOrigin="top-center"
              raysColor="#00ffff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="opacity-90"
            />
          )}
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
