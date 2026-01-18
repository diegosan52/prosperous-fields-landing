import UrgencyBar from "@/components/landing/UrgencyBar";
import HeroSection from "@/components/landing/HeroSection";
import StorySection from "@/components/landing/StorySection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyBar />
      <HeroSection />
      <StorySection />
      <ScheduleSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
