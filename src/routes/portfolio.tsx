import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Cyris ZW" },
      { name: "description", content: "Recent web, mobile, branding and AI projects by Cyris ZW." },
      { property: "og:title", content: "Portfolio — Cyris ZW" },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "FinFlow Dashboard", category: "Web App", color: "from-blue-500/30 to-indigo-500/30" },
  { title: "Harare Eats", category: "Mobile App", color: "from-cyan-500/30 to-blue-500/30" },
  { title: "Nova Brand", category: "Branding", color: "from-indigo-500/30 to-blue-600/30" },
  { title: "AutoBook AI", category: "AI System", color: "from-sky-500/30 to-blue-500/30" },
  { title: "Pulse Commerce", category: "E-commerce", color: "from-blue-600/30 to-indigo-600/30" },
  { title: "Visionary Agency", category: "Website", color: "from-blue-400/30 to-cyan-500/30" },
  { title: "Riverstone Realty", category: "Website", color: "from-indigo-400/30 to-blue-500/30" },
  { title: "Glow Cosmetics", category: "Branding", color: "from-blue-500/30 to-sky-400/30" },
  { title: "MediTrack", category: "Software", color: "from-cyan-400/30 to-blue-600/30" },
];

function PortfolioPage() {
  return (
    <div className="bg-gradient-mesh">
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected <span className="text-gradient">work</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            A snapshot of recent projects across web, mobile, branding and AI.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
              <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-background/80 text-foreground border-0 backdrop-blur">{p.category}</Badge>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent text-background opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                <p className="text-sm opacity-80">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
