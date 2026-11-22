import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fronts } from "@/components/Fronts";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";
import { CommerceDetails } from "@/components/CommerceDetails";
import { CommerceScenario } from "@/components/CommerceScenario";
import { ConnectionFlow } from "@/components/ConnectionFlow";
import { Integrations } from "@/components/Integrations";
import { Roadmap } from "@/components/Roadmap";
import { Plans } from "@/components/Plans";
import { Sectors } from "@/components/Sectors";
import { Methodology } from "@/components/Methodology";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ContactProvider } from "@/components/ContactProvider";
import { RevealEffects } from "@/components/RevealEffects";

export default function Home() {
  return (
    <ContactProvider>
      <Header />
      <main id="top">
        <Hero />
        <Fronts />
        <Services />
        <Products />
        <CommerceDetails />
        <CommerceScenario />
        <ConnectionFlow />
        <Integrations />
        <Roadmap />
        <Plans />
        <Sectors />
        <Methodology />
        <About />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <RevealEffects />
    </ContactProvider>
  );
}
