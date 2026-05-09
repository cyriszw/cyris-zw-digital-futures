import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Award,
  Code2,
  Layout,
  Zap,
  Sparkles,
  Check,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import heroImg from "@/assets/hero-ai.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyris ZW — AI-Powered Digital Solutions for Modern Businesses" },
      {
        name: "description",
        content:
          "We build AI-powered websites, mobile apps, software systems, branding and automation for Zimbabwean businesses.",
      },
      { property: "og:title", content: "Cyris ZW — AI-Powered Digital Solutions" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Globe, title: "Website Development", desc: "Lightning-fast, SEO-ready websites that convert visitors into customers." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native-feel iOS and Android apps built with modern frameworks." },
  { icon: Brain, title: "AI Business Systems", desc: "Custom AI tools — chatbots, recommenders, automation pipelines." },
  { icon: Palette, title: "Graphic Design", desc: "Visual identities and digital assets that look stunning everywhere." },
  { icon: Award, title: "Branding & Logos", desc: "Memorable brand systems built to scale with your business." },
  { icon: Code2, title: "Software Development", desc: "Custom business systems engineered for reliability and speed." },
  { icon: Layout, title: "UI / UX Design", desc: "Interfaces that feel obvious, beautiful, and effortless to use." },
  { icon: Zap, title: "Business Automation", desc: "Replace repetitive work with smart workflows and AI agents." },
];

const portfolio = [
  { title: "FinFlow Dashboard", category: "Web App", color: "from-blue-500/20 to-indigo-500/20" },
  { title: "Harare Eats", category: "Mobile App", color: "from-cyan-500/20 to-blue-500/20" },
  { title: "Nova Brand", category: "Branding", color: "from-indigo-500/20 to-blue-600/20" },
  { title: "AutoBook AI", category: "AI System", color: "from-sky-500/20 to-blue-500/20" },
  { title: "Pulse Commerce", category: "E-commerce", color: "from-blue-600/20 to-indigo-600/20" },
  { title: "Visionary Agency", category: "Website", color: "from-blue-400/20 to-cyan-500/20" },
];

const testimonials = [
  { name: "Tendai M.", role: "CEO, Brightline Logistics", quote: "Cyris ZW rebuilt our internal system and tripled our team's efficiency. The AI automations alone paid for the project." },
  { name: "Rumbi K.", role: "Founder, Hue Studio", quote: "Stunning brand work, fast turnaround and a team that genuinely cares. They feel like a partner, not a vendor." },
  { name: "Daniel N.", role: "Director, Apex Realty", quote: "Our new website looks world-class and ranks on the first page of Google. Best investment we've made this year." },
];

const pricing = [
  {
    name: "Starter",
    price: "$350",
    desc: "Perfect for small businesses launching their first online presence.",
    features: ["Up to 5 pages", "Mobile responsive", "Basic SEO", "Contact form", "1 month support"],
  },
  {
    name: "Growth",
    price: "$850",
    desc: "For ambitious brands ready to scale with custom features.",
    features: ["Up to 12 pages", "CMS / Blog", "Advanced SEO", "Booking or payments", "AI chatbot", "3 months support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored systems, automations and apps built around your operations.",
    features: ["Custom system / app", "AI integrations", "Admin dashboard", "API integrations", "Priority support"],
  },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most websites launch in 2–3 weeks. Mobile apps and custom systems usually take 4–10 weeks depending on scope." },
  { q: "Do you work with businesses outside Zimbabwe?", a: "Yes — we work remotely with clients across Africa and globally." },
  { q: "Can you maintain my project after launch?", a: "Absolutely. We offer monthly care plans covering updates, hosting, and improvements." },
  { q: "What makes Cyris ZW different?", a: "We combine creative design with AI-driven engineering — delivering smarter products faster and more affordably." },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-mesh">
        <div className="absolute inset-0 bg-gradient-soft opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-up">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5">
              <Sparkles className="h-3 w-3 mr-1.5" /> AI-Powered Digital Studio
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              AI-Powered <br />
              <span className="text-gradient">Digital Solutions</span> <br />
              for Modern Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build websites, apps, systems, and digital experiences that help
              businesses grow — faster, smarter, and more affordably.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gradient-primary shadow-glow hover:opacity-90 h-12 px-7">
                <Link to="/request">
                  Request a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div><span className="text-2xl font-bold text-foreground block">50+</span>Projects shipped</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="text-2xl font-bold text-foreground block">98%</span>Client retention</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="text-2xl font-bold text-foreground block">24/7</span>AI-powered support</div>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Abstract AI neural network illustration"
              width={1536}
              height={1152}
              className="relative rounded-3xl shadow-elevated w-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4">About Cyris ZW</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Helping businesses modernize through{" "}
              <span className="text-gradient">AI-powered software</span> and creative design.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Cyris ZW is a Zimbabwean technology company building the next generation
              of digital products. We combine artificial intelligence, clean design,
              and modern engineering to ship work that performs.
            </p>
            <p>
              From websites that convert, to apps that scale, to automation that frees
              your team — we deliver world-class quality at prices made for local businesses.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {["Innovation", "Speed", "Clean design", "Modern tech"].map((v) => (
                <div key={v} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need to <span className="text-gradient">build & grow</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              One team, eight specialties — all powered by AI.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Card
                key={s.title}
                className="group p-6 border-border hover:border-primary/40 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-shadow">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Badge variant="outline" className="mb-4">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Recent <span className="text-gradient">work</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A selection of recent projects across web, mobile, branding and AI.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolio.map((p) => (
            <div
              key={p.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-foreground/80 via-foreground/0 to-transparent text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs uppercase tracking-wider opacity-80">{p.category}</span>
                <h3 className="font-display font-semibold text-xl mt-1">{p.title}</h3>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-background/80 text-foreground border-0 backdrop-blur">{p.category}</Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Loved by <span className="text-gradient">growing teams</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-8 border-border bg-card hover:shadow-elevated transition-shadow">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-1 my-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Pay once. No surprises. Designed for local businesses.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <Card
              key={p.name}
              className={`p-8 relative transition-all duration-300 ${
                p.highlight
                  ? "border-primary shadow-glow scale-[1.02] bg-gradient-to-b from-primary/5 to-transparent"
                  : "border-border hover:shadow-elevated"
              }`}
            >
              {p.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary border-0">
                  Most popular
                </Badge>
              )}
              <h3 className="font-display font-semibold text-xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                {p.price !== "Custom" && <span className="text-sm text-muted-foreground">/ project</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className={`mt-8 w-full ${p.highlight ? "bg-gradient-primary" : ""}`} variant={p.highlight ? "default" : "outline"}>
                <Link to="/request">Get started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-soft">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently asked <span className="text-gradient">questions</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA + Newsletter */}
      <section className="py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-primary-foreground shadow-glow">
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build something great?
              </h2>
              <p className="mt-3 text-primary-foreground/80 max-w-md">
                Tell us about your project — we'll respond within 24 hours with a free roadmap.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-6 h-12 px-7">
                <Link to="/request">Request a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-background/10 backdrop-blur rounded-2xl p-6 border border-primary-foreground/20">
              <h3 className="font-display font-semibold text-xl">Stay in the loop</h3>
              <p className="text-sm text-primary-foreground/70 mt-1">Monthly insights on AI, design and tech for local businesses.</p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => { e.preventDefault(); (e.currentTarget as HTMLFormElement).reset(); }}
              >
                <Input
                  type="email"
                  required
                  placeholder="you@business.com"
                  className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button type="submit" variant="secondary">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
