import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { WhatHappensNext } from "@/components/landing/WhatHappensNext";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header variant="transparent" />
      <main>
        <HeroSection />
        <StepsSection />
        <WhatHappensNext />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
