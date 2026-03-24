import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { articles } from "@/lib/blogData";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold text-foreground">Article not found</h1>
        <p className="text-muted-foreground">This post doesn't exist or may have been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const others = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                <Tag className="w-3 h-3" /> {article.tag}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" /> {article.read} read
              </span>
              <span className="text-xs text-muted-foreground">{article.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-foreground max-w-3xl">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            {/* Lead */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 pb-10 border-b border-border"
            >
              {article.desc}
            </motion.p>

            {/* Sections */}
            <div className="space-y-8">
              {article.content.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                >
                  {section.heading && (
                    <h2 className="text-xl font-bold text-foreground mb-3">{section.heading}</h2>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <AnimatedSection className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/15 text-center">
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">Need Help?</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Talk to our team</h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                TalentAccel helps startups and growing companies solve exactly these challenges. Book a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5"
              >
                Book a Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* More articles */}
      {others.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">More Insights</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((a) => (
                <Link key={a.slug} to={`/blog/${a.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
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
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default BlogPost;
