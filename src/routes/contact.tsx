import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cyris ZW" },
      { name: "description", content: "Get in touch with Cyris ZW. Email, phone, WhatsApp, or send us a message." },
      { property: "og:title", content: "Contact Cyris ZW" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"), email: fd.get("email"), message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div className="bg-gradient-mesh">
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20">
        <div className="text-center mb-14 animate-fade-up">
          <Badge variant="outline" className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">talk</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <ContactCard icon={Mail} title="Email" value="cyriszw@gmail.com" href="mailto:cyriszw@gmail.com" />
            <ContactCard icon={Phone} title="Phone" value="+263 779 641 178" href="tel:+263779641178" />
            <ContactCard icon={MessageCircle} title="WhatsApp" value="Chat with us" href="https://wa.me/263779641178" />
            <ContactCard icon={MapPin} title="Location" value="Harare, Zimbabwe" />
          </div>

          <Card className="lg:col-span-3 p-8 border-border shadow-soft">
            <h2 className="font-display font-semibold text-2xl mb-6">Send us a message</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input name="name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input name="email" type="email" required maxLength={255} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea name="message" rows={6} required maxLength={2000} placeholder="How can we help?" />
              </div>
              <Button type="submit" disabled={sending} className="w-full bg-gradient-primary h-12 shadow-glow">
                {sending ? "Sending..." : <>Send message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ContactCard({
  icon: Icon, title, value, href,
}: { icon: typeof Mail; title: string; value: string; href?: string }) {
  const inner = (
    <Card className="p-5 flex items-center gap-4 border-border hover:border-primary/40 hover:shadow-elevated transition-all">
      <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </Card>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}
