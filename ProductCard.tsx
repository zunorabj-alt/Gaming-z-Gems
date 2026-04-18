import type { Product } from "@/lib/products";
import { formatAr } from "@/lib/products";
import { ShoppingCart } from "lucide-react";

export function ProductCard({
  product,
  onAdd,
  onBuy,
}: {
  product: Product;
  onAdd: (p: Product) => void;
  onBuy: (p: Product) => void;
}) {
  return (
    <div className="card-hover relative rounded-2xl bg-[var(--gradient-card)] border border-border p-4 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
      <div className="w-20 h-20 mb-2 flex items-center justify-center">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-contain animate-float" />
      </div>
      <p className="font-display font-bold text-sm leading-tight text-foreground min-h-10 flex items-center">
        {product.name}
      </p>
      <p className="neon-text-green font-bold text-base mt-1">{formatAr(product.price)}</p>
      <div className="grid grid-cols-2 gap-1.5 w-full mt-3">
        <button
          onClick={() => onAdd(product)}
          className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-secondary text-secondary-foreground text-xs font-bold hover:bg-secondary/70 transition-colors"
        >
          <ShoppingCart size={12} /> Panier
        </button>
        <button
          onClick={() => onBuy(product)}
          className="py-2 px-2 rounded-lg bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-xs font-bold hover:shadow-[var(--shadow-neon-red)] transition-shadow"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
