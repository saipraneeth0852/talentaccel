import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { articles } from "@/lib/blogData";

const Blog = () => (
  <>
    {/* Hero */}
    <section className="relative min-h-[40vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-secondary" />
          Insights & Blog
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-foreground mb-4"
        >
          Talent & HR{" "}
          <span className="text-gradient-accent">Insights</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-xl"
        >
          Practical guides on hiring, compliance, and building great teams — from the TalentAccel team.
        </motion.p>
      </div>
    </section>

    {/* Articles */}
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <StaggerItem key={a.slug}>
              <Link to={`/blog/${a.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                      {a.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-3 leading-snug text-base">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{a.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{a.read} read</span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-200">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-16">
          <p className="text-muted-foreground mb-6">More insights coming soon. Stay tuned.</p>
          <a
            href="mailto:hr@talentaccel.com?subject=Newsletter Subscription"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-muted transition-all"
          >
            Subscribe for Updates <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>

    <Footer />
  </>
);

export default Blog;
