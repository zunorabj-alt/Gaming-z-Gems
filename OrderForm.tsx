import { useState, type FormEvent } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { formatAr, type Product } from "@/lib/products";
import { cartStore, type CartItem } from "@/lib/cart-store";

const FORMSPREE = "https://formspree.io/f/xbdqglgd";

const genOrderId = () => `GZG-${Math.floor(1000 + Math.random() * 9000)}`;

export function OrderForm({
  target,
  items,
  onClose,
}: {
  target: Product | "all";
  items: CartItem[];
  onClose: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const lines =
    target === "all"
      ? items.map((i) => `${i.qty}× ${i.name} (${formatAr(i.price)})`).join(" | ")
      : `${target.name} (${formatAr(target.price)})`;
  const total =
    target === "all"
      ? items.reduce((s, i) => s + i.price * i.qty, 0)
      : target.price;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const orderId = genOrderId();
    data.append("Order_ID", orderId);
    data.append("Produit", lines);
    data.append("Total", formatAr(total));

    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSuccess(orderId);
        if (target === "all") cartStore.clear();
      } else {
        alert("Erreur d'envoi. Réessayez.");
      }
    } catch {
      alert("Erreur réseau.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-md bg-surface border border-border rounded-2xl shadow-2xl animate-fly-in overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 p-2 rounded-lg hover:bg-secondary z-10">
          <X size={18} />
        </button>

        {success ? (
          <div className="p-8 text-center">
            <CheckCircle2 size={64} className="mx-auto neon-text-green mb-4" />
            <h3 className="font-display text-2xl font-bold gradient-text">Commande envoyée !</h3>
            <p className="text-muted-foreground mt-2">Numéro de commande</p>
            <p className="font-display text-xl font-bold neon-text-red mt-1">{success}</p>
            <p className="text-xs text-muted-foreground mt-4">Vous recevrez bientôt une confirmation par email.</p>
            <button onClick={onClose} className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold">
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6 space-y-3">
            <h3 className="font-display text-xl font-bold gradient-text">Finaliser la commande</h3>
            <div className="rounded-lg bg-card p-3 border border-border">
              <p className="text-xs text-muted-foreground">Produit</p>
              <p className="font-bold text-sm">{lines}</p>
              <p className="text-xs text-muted-foreground mt-2">Total</p>
              <p className="font-display text-lg font-bold neon-text-green">{formatAr(total)}</p>
            </div>

            <Field name="UID" label="UID joueur" placeholder="123456789" required />
            <Field name="Pseudo" label="Pseudo" placeholder="Votre pseudo en jeu" required />
            <Field name="Email" label="Email" type="email" placeholder="email@exemple.com" required />
            <Field name="Reference" label="Référence paiement" placeholder="Ref MVola / Orange Money" required />

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold uppercase tracking-wider shadow-[var(--shadow-neon-red)] disabled:opacity-50"
            >
              {submitting ? "Envoi..." : "Envoyer la commande"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ name, label, ...rest }: { name: string; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{label}</span>
      <input
        name={name}
        {...rest}
        className="mt-1 w-full px-3 py-2.5 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-all text-sm"
      />
    </label>
  );
}
