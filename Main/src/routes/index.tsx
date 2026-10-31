import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stylist — Dressed with intention" },
      { name: "description", content: "Your wardrobe, styled by an AI editor and tried on in your own mirror." },
      { property: "og:title", content: "Stylist — Dressed with intention" },
      { property: "og:description", content: "Your wardrobe, styled by an AI editor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-6 md:grid-cols-2">
      <img src={hero} alt="Curated outfit flat lay" width={1600} height={1008} className="aspect-[4/5] w-full object-cover" />
      <div>
        <p className="eyebrow text-accent">Autumn / Winter Edit</p>
        <h1 className="mt-4 text-6xl leading-[0.95] md:text-8xl">Dressed with <em>intention.</em></h1>
        <p className="mt-6 max-w-sm text-muted-foreground">Your wardrobe, styled by an AI editor and tried on in your own mirror.</p>
        <div className="mt-10 flex gap-3">
          <Link to="/stylist" className="eyebrow rounded-full bg-primary px-8 py-5 text-primary-foreground">Style me</Link>
          <Link to="/wardrobe" className="eyebrow rounded-full border border-foreground px-8 py-5">My wardrobe</Link>
        </div>
      </div>
    </main>
  );
}
