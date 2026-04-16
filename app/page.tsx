import { Curriculum } from "@/components/Curriculum";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroWithLeadForm } from "@/components/HeroWithLeadForm";
import { OutcomesSection } from "@/components/OutcomesSection";
import { ProblemInsightSection } from "@/components/ProblemInsightSection";
import { Roadmap4Weeks } from "@/components/Roadmap4Weeks";
import { WhoForSection } from "@/components/WhoForSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
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
  );
}
