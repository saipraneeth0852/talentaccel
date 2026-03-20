import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { LogoMark } from "./LogoMark";

const footerLinks = {
  Company: ["About Us", "Leadership", "Careers", "Contact"],
  Services: ["Talent Acquisition", "Dedicated Teams", "Offshore Buildout", "Payroll & Compliance", "HR Advisory"],
  Industries: ["SaaS & Product", "AI / Data Science", "FinTech", "Telecom", "Startups & GCCs"],
  Resources: ["Blog", "Hiring Guides", "HR Templates", "Case Studies"],
};

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground pt-16 pb-24 lg:pb-8">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <LogoMark size={28} className="brightness-0 invert" />
            <span className="text-xl font-bold">Talent<span className="text-secondary">Accel</span></span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
            Building the teams that accelerate your business.
          </p>
          <div className="space-y-3">
            <a href="mailto:hello@talentaccel.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4" /> hello@talentaccel.com
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4" /> +91 123 456 7890
            </a>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Bangalore, India
            </div>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground/90">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} TalentAccel. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);
