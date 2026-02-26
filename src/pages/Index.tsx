import HeroScene from "@/components/home/HeroScene";
import FeaturedServers from "@/components/home/FeaturedServers";
import AboutSection from "@/components/home/AboutSection";
import GameShowcase from "@/components/home/GameShowcase";
import EventsPreview from "@/components/home/EventsPreview";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <main>
      <HeroScene />
      <GameShowcase />
      <FeaturedServers />
      <AboutSection />
      <EventsPreview />
      <FAQSection />
    </main>
  );
};

export default Index;
