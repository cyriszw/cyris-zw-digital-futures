import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Smartphone, Brain, Palette, Award, Code2, Layout, Zap, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cyris ZW" },
      { name: "description", content: "Websites, mobile apps, AI systems, branding, software, automation and more." },
      { property: "og:title", content: "Services — Cyris ZW" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Globe, title: "Website Development", desc: "Conversion-focused websites built for speed, SEO and beauty." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feel iOS & Android apps your customers will love." },
  { icon: Brain, title: "AI Business Systems", desc: "Custom AI tools — chatbots, recommenders, intelligent automation." },
  { icon: Palette, title: "Graphic Design", desc: "Visuals and marketing assets that look stunning everywhere." },
  { icon: Award, title: "Branding & Logos", desc: "Memorable brand identities engineered to scale with you." },
  { icon: Code2, title: "Software Development", desc: "Custom internal systems built for reliability and speed." },
  { icon: Layout, title: "UI / UX Design", desc: "Interfaces that feel obvious, beautiful, and effortless." },
  { icon: Zap, title: "Business Automation", desc: "Replace repetitive work with smart workflows and AI agents." },
];

function ServicesPage() {
  return (
    <div className="bg-gradient-mesh">
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4">What we do</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Services built for <span className="text-gradient">modern businesses</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            From a brand-new website to a fully automated AI system — we've got you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="group p-6 border-border bg-card hover:border-primary/40 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gradient-primary shadow-glow h-12 px-7">
            <Link to="/request">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
