import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import heroVisual from "@/assets/hero-visual.png";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 bg-gradient-subtle" />
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] bg-gradient-hero rounded-bl-[200px]" />

    <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Trusted by startups & fast-growing companies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-6"
          >
            One partner —{" "}
            <span className="text-gradient-accent">Complete people solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
          >
            TalentAccel partners with startups and growing companies to build high-performing teams, streamline HR operations, and ensure compliance — from hiring to payroll.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Hiring Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all duration-200"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              "Fast-track hiring for startups & scaling companies",
              "Dedicated recruiters & offshore hiring support",
              "End-to-end HR, payroll & compliance management",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block"
        >
          <img
            src={heroVisual}
            alt="TalentAccel growth visualization"
            className="w-full h-auto max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </div>
  </section>
);
