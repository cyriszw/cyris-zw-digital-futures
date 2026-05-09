import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Cyris ZW" },
      { name: "description", content: "Transparent pricing for websites, apps, branding and AI systems." },
      { property: "og:title", content: "Pricing — Cyris ZW" },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Starter", price: "$350", desc: "Launch a polished online presence.",
    features: ["Up to 5 pages", "Mobile responsive", "Basic SEO", "Contact form", "1 month support"] },
  { name: "Growth", price: "$850", desc: "Scale with custom features.", highlight: true,
    features: ["Up to 12 pages", "CMS / Blog", "Advanced SEO", "Booking or payments", "AI chatbot", "3 months support"] },
  { name: "Enterprise", price: "Custom", desc: "Built around your operations.",
    features: ["Custom system / app", "AI integrations", "Admin dashboard", "API integrations", "Priority support"] },
];

function PricingPage() {
  return (
    <div className="bg-gradient-mesh">
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Pay once. No surprises. Designed for local businesses.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((p) => (
            <Card key={p.name} className={`p-8 relative transition-all duration-300 ${p.highlight ? "border-primary shadow-glow scale-[1.02] bg-gradient-to-b from-primary/5 to-transparent" : "border-border hover:shadow-elevated"}`}>
              {p.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary border-0">Most popular</Badge>}
              <h3 className="font-display font-semibold text-xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                {p.price !== "Custom" && <span className="text-sm text-muted-foreground">/ project</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>{f}</span>
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
    </div>
  );
}
