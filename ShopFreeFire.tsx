import { ArrowLeft, HelpCircle } from "lucide-react";
import { topUpProducts, subscriptionProducts, levelUpProducts, type Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ShopFreeFire({
  onBack,
  onAdd,
  onBuy,
}: {
  onBack: () => void;
  onAdd: (p: Product) => void;
  onBuy: (p: Product) => void;
}) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6 animate-fade-in">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft size={16} /> Retour aux jeux
      </button>

      <Block title="🔥 Top Up Free Fire" subtitle="Diamants instantanés" products={topUpProducts} onAdd={onAdd} onBuy={onBuy} />
      <Block title="📦 Abonnements" subtitle="Weekly & Monthly" products={subscriptionProducts} onAdd={onAdd} onBuy={onBuy} cols={2} />
      <Block title="⚡ Level Up" subtitle="Boost de niveau garanti" products={levelUpProducts} onAdd={onAdd} onBuy={onBuy} />

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-5 z-30 w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-[var(--shadow-neon-green)] hover:scale-110 transition-transform"
        aria-label="Aide"
      >
        <HelpCircle size={20} />
      </a>
    </section>
  );
}

function Block({
  title,
  subtitle,
  products,
  onAdd,
  onBuy,
  cols,
}: {
  title: string;
  subtitle: string;
  products: Product[];
  onAdd: (p: Product) => void;
  onBuy: (p: Product) => void;
  cols?: number;
}) {
  return (
    <div className="mb-10">
      <div className="mb-4">
        <h3 className="font-display text-2xl font-bold gradient-text">{title}</h3>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{subtitle}</p>
      </div>
      <div className={`grid gap-3 ${cols === 2 ? "grid-cols-2 md:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"}`}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} onBuy={onBuy} />
        ))}
      </div>
    </div>
  );
}
