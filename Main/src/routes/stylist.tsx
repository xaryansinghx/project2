import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stylist")({
  head: () => ({ meta: [
    { title: "Your stylist — Stylist" },
    { name: "description", content: "Tell the AI editor the occasion and get a complete look." },
    { property: "og:title", content: "Your stylist — Stylist" },
    { property: "og:description", content: "Tell the AI editor the occasion and get a complete look." },
  ] }),
  component: Stylist,
});

function Stylist() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow text-accent">Coming soon</p>
      <h1 className="mt-4 text-6xl">Your stylist</h1>
      <p className="mt-4 text-muted-foreground">Tell the AI editor the occasion and get a complete look.</p>
    </main>
  );
}
