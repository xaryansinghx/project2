import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wardrobe")({
  head: () => ({ meta: [
    { title: "My wardrobe — Stylist" },
    { name: "description", content: "Every piece you own, catalogued in one place." },
    { property: "og:title", content: "My wardrobe — Stylist" },
    { property: "og:description", content: "Every piece you own, catalogued in one place." },
  ] }),
  component: Wardrobe,
});

function Wardrobe() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow text-accent">Coming soon</p>
      <h1 className="mt-4 text-6xl">My wardrobe</h1>
      <p className="mt-4 text-muted-foreground">Every piece you own, catalogued in one place.</p>
    </main>
  );
}
