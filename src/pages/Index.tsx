import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProblemStatement } from "@/components/ProblemStatement";
import { MissionVision } from "@/components/MissionVision";
import { FeaturedSolutions } from "@/components/FeaturedSolutions";
import { UserJourney } from "@/components/UserJourney";
import { CoreFeatures } from "@/components/CoreFeatures";
import { Impact } from "@/components/Impact";
import { Services } from "@/components/Services";
import { MarketOpportunity } from "@/components/MarketOpportunity";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProblemStatement />
      <MissionVision />
      <FeaturedSolutions />
      <UserJourney />
      <CoreFeatures />
      <Impact />
      <Services />
      <MarketOpportunity />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
