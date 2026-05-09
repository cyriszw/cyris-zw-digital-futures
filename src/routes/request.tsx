import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2, ArrowRight, Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Request a Project — Cyris ZW" },
      { name: "description", content: "Tell us about your project — websites, apps, AI systems, branding and more." },
      { property: "og:title", content: "Request a Project — Cyris ZW" },
    ],
  }),
  component: RequestPage,
});

const PROJECT_TYPES = ["Website", "Mobile App", "Graphic Design", "Software System", "Branding", "Other"] as const;
const STYLES = ["Minimalist", "Corporate", "Modern", "Luxury", "Creative"] as const;
const FEATURES = [
  "Online payments", "Booking system", "AI chatbot", "Admin dashboard",
  "E-commerce", "Contact forms", "Blog", "Portfolio", "User accounts", "Analytics",
];
const BUDGETS = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000 – $15,000", "$15,000+"];

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  project_type: z.enum(PROJECT_TYPES, { message: "Choose a project type" }),
  color_scheme: z.string().trim().max(120).optional().or(z.literal("")),
  website_style: z.string().trim().max(60).optional().or(z.literal("")),
  page_count: z.string().trim().max(40).optional().or(z.literal("")),
  features: z.array(z.string()).optional(),
  budget_range: z.string().trim().max(60).optional().or(z.literal("")),
  deadline: z.string().trim().max(60).optional().or(z.literal("")),
  description: z.string().trim().min(20, "Please describe your project in at least 20 characters").max(4000),
});

function RequestPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [features, setFeatures] = useState<string[]>([]);
  const [projectType, setProjectType] = useState<string>("");
  const [style, setStyle] = useState<string>("");
  const [budget, setBudget] = useState<string>("");

  const isWebsite = projectType === "Website";

  const toggleFeature = (f: string) =>
    setFeatures((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      full_name: String(fd.get("full_name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      project_type: projectType,
      color_scheme: String(fd.get("color_scheme") || ""),
      website_style: style,
      page_count: String(fd.get("page_count") || ""),
      features,
      budget_range: budget,
      deadline: String(fd.get("deadline") || ""),
      description: String(fd.get("description") || ""),
    };

    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("project_requests").insert({
      ...parsed.data,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      color_scheme: parsed.data.color_scheme || null,
      website_style: parsed.data.website_style || null,
      page_count: parsed.data.page_count || null,
      budget_range: parsed.data.budget_range || null,
      deadline: parsed.data.deadline || null,
      features: parsed.data.features ?? [],
    });
    setSubmitting(false);

    if (error) {
      toast.error("Couldn't submit your request. Please try again.");
      return;
    }
    setSubmitted(true);
    form.reset();
    setFeatures([]); setProjectType(""); setStyle(""); setBudget("");
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <Card className="max-w-lg p-10 text-center border-border shadow-elevated animate-fade-up">
          <div className="h-16 w-16 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-6">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Request received!</h1>
          <p className="mt-3 text-muted-foreground">
            Thanks for reaching out. Our team will get back to you within 24 hours
            with a free roadmap and quote.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <Button asChild variant="outline"><Link to="/">Back home</Link></Button>
            <Button onClick={() => setSubmitted(false)} className="bg-gradient-primary">Submit another</Button>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <div className="bg-gradient-mesh">
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-20">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5">
            <Sparkles className="h-3 w-3 mr-1.5" /> Project Request
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tell us about <span className="text-gradient">your project</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            The more detail you share, the more accurate your custom quote and roadmap will be.
          </p>
        </div>

        <Card className="p-8 md:p-10 border-border shadow-soft bg-card">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="font-display font-semibold text-lg mb-4">Your details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name *"><Input name="full_name" required maxLength={100} /></Field>
                <Field label="Email Address *"><Input name="email" type="email" required maxLength={255} /></Field>
                <Field label="Phone Number"><Input name="phone" type="tel" maxLength={40} /></Field>
                <Field label="Company Name"><Input name="company" maxLength={120} /></Field>
              </div>
            </div>

            {/* Project type */}
            <div>
              <h2 className="font-display font-semibold text-lg mb-4">Project</h2>
              <Field label="Type of Project *">
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger><SelectValue placeholder="Select a project type" /></SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            {/* Website-specific */}
            {isWebsite && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 animate-fade-in space-y-4">
                <h3 className="font-display font-semibold">Website specifics</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Preferred color scheme">
                    <Input name="color_scheme" placeholder="e.g. White & navy blue" maxLength={120} />
                  </Field>
                  <Field label="Website style">
                    <Select value={style} onValueChange={setStyle}>
                      <SelectTrigger><SelectValue placeholder="Pick a style" /></SelectTrigger>
                      <SelectContent>
                        {STYLES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field label="Number of pages">
                    <Input name="page_count" placeholder="e.g. 5–8 pages" maxLength={40} />
                  </Field>
                </div>
                <div>
                  <Label className="mb-3 block">Features needed</Label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {FEATURES.map((f) => (
                      <label key={f} className="flex items-center gap-2 p-2 rounded-lg hover:bg-background/60 cursor-pointer text-sm">
                        <Checkbox checked={features.includes(f)} onCheckedChange={() => toggleFeature(f)} />
                        <span>{f}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Budget & deadline */}
            <div>
              <h2 className="font-display font-semibold text-lg mb-4">Budget & timeline</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Budget range">
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger><SelectValue placeholder="Select a range" /></SelectTrigger>
                    <SelectContent>
                      {BUDGETS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Project deadline">
                  <Input name="deadline" placeholder="e.g. 4 weeks, by 30 June" maxLength={60} />
                </Field>
              </div>
            </div>

            {/* Description */}
            <Field label="Describe your project in detail *">
              <Textarea name="description" required rows={6} maxLength={4000}
                placeholder="Goals, target audience, inspirations, must-have features..." />
            </Field>

            {/* File upload (visual only) */}
            <Field label="Inspirations or logo (optional)">
              <label className="flex flex-col items-center justify-center gap-2 p-8 border-2 border-dashed border-border rounded-xl hover:border-primary/40 transition-colors cursor-pointer text-muted-foreground hover:text-foreground">
                <Upload className="h-6 w-6" />
                <span className="text-sm">Drag a file here or click to browse</span>
                <span className="text-xs">(For larger files, please email cyriszw@gmail.com)</span>
                <input type="file" className="hidden" />
              </label>
            </Field>

            <Button type="submit" disabled={submitting} size="lg" className="w-full bg-gradient-primary shadow-glow h-12">
              {submitting ? "Submitting..." : <>Submit Project Request <ArrowRight className="ml-2 h-4 w-4" /></>}
            </Button>
          </form>
        </Card>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      {children}
    </div>
  );
}
