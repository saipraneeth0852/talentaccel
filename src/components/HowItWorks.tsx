import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { Search, Target, Users, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Understand Your Needs", desc: "We analyze your hiring goals, team structure, and growth plans through a free workplace audit or discovery session." },
  { icon: Target, step: "02", title: "Build the Hiring Strategy", desc: "We design a tailored recruitment or HR operations model aligned with your objectives." },
  { icon: Users, step: "03", title: "Source & Screen Talent", desc: "Our recruiters identify and evaluate the best candidates using deep talent networks." },
  { icon: TrendingUp, step: "04", title: "Scale Your Team", desc: "We support onboarding, HR operations, and compliance as your team grows." },
];

export const HowItWorks = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-6 lg:px-12">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Our Process</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">How TalentAccel Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every engagement begins with a free audit at your workplace or a discovery session to truly understand your needs.
        </p>
      </AnimatedSection>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <StaggerItem key={s.step}>
              <div className="relative p-7 rounded-2xl bg-card border border-border shadow-card h-full">
                <span className="text-5xl font-extrabold text-muted/60 absolute top-4 right-5">{s.step}</span>
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  </section>
);
