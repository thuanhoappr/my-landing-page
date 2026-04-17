import { Curriculum } from "@/components/Curriculum";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroWithLeadForm } from "@/components/HeroWithLeadForm";
import { OutcomesSection } from "@/components/OutcomesSection";
import { ProblemInsightSection } from "@/components/ProblemInsightSection";
import { Roadmap4Weeks } from "@/components/Roadmap4Weeks";
import { WhoForSection } from "@/components/WhoForSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LANDING_BACKGROUND_IMAGE } from "@/lib/landingBackground";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-slate-950 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${LANDING_BACKGROUND_IMAGE}')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="relative z-10 min-h-screen text-slate-50 antialiased">
        <HeroWithLeadForm />
        <ProblemInsightSection />
        <OutcomesSection />
        <Roadmap4Weeks />
        <Curriculum />
        <WhoForSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </div>
  );
}
