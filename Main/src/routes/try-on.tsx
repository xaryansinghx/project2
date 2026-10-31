import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/try-on")({
  head: () => ({ meta: [
    { title: "Try on — Stylist" },
    { name: "description", content: "See your outfit on you before you get dressed." },
    { property: "og:title", content: "Try on — Stylist" },
    { property: "og:description", content: "See your outfit on you before you get dressed." },
  ] }),
  component: TryOn,
});

function TryOn() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow text-accent">Coming soon</p>
      <h1 className="mt-4 text-6xl">Try on</h1>
      <p className="mt-4 text-muted-foreground">See your outfit on you before you get dressed.</p>
    </main>
  );
}
