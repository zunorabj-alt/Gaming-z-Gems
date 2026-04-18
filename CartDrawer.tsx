import { X, Trash2, Plus, Minus } from "lucide-react";
import { cartStore, useCart } from "@/lib/cart-store";
import { formatAr, type Product } from "@/lib/products";

export function CartDrawer({
  open,
  onClose,
  onCheckout,
}: {
  open: boolean;
  onClose: () => void;
  onCheckout: (p: Product | "all") => void;
}) {
  const items = useCart();
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md h-full bg-surface border-l border-border flex flex-col animate-fly-in">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-display text-xl font-bold gradient-text">Mon Panier</h2>
          <button onClick={onClose} aria-label="Close" className="p-2 rounded-lg hover:bg-secondary">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">Panier vide 🎮</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                <img src={it.image} alt="" className="w-12 h-12 object-contain" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm truncate">{it.name}</p>
                  <p className="text-xs neon-text-green">{formatAr(it.price)}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => cartStore.setQty(it.id, it.qty - 1)} className="w-7 h-7 rounded bg-secondary flex items-center justify-center"><Minus size={12} /></button>
                  <span className="font-bold w-6 text-center text-sm">{it.qty}</span>
                  <button onClick={() => cartStore.setQty(it.id, it.qty + 1)} className="w-7 h-7 rounded bg-secondary flex items-center justify-center"><Plus size={12} /></button>
                  <button onClick={() => cartStore.remove(it.id)} className="w-7 h-7 rounded bg-destructive/20 text-destructive flex items-center justify-center ml-1"><Trash2 size={12} /></button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-2xl font-display font-bold gradient-text">{formatAr(total)}</span>
            </div>
            <button
              onClick={() => onCheckout("all")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wider shadow-[var(--shadow-neon-red)] hover:opacity-90 transition-opacity"
            >
              Commander
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
