import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { StepsSection } from "@/components/landing/StepsSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header variant="transparent" />
      <main>
        <HeroSection />
        <StepsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
