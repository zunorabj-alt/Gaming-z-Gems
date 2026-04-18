import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { GameSelector, type GameId } from "@/components/GameSelector";
import { ShopFreeFire } from "@/components/ShopFreeFire";
import { CartDrawer } from "@/components/CartDrawer";
import { OrderForm } from "@/components/OrderForm";
import { cartStore, useCart } from "@/lib/cart-store";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gaming-Z Gems — Top-up Free Fire & PUBG Madagascar" },
      { name: "description", content: "Recharge Free Fire diamants, abonnements weekly/monthly et level up. Prix en Ariary, livraison instantanée." },
      { property: "og:title", content: "Gaming-Z Gems — Top-up Gaming" },
      { property: "og:description", content: "Recharge Free Fire & PUBG, prix en Ariary, livraison instantanée." },
    ],
  }),
  component: Index,
});

function Index() {
  const [game, setGame] = useState<GameId | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState<Product | "all" | null>(null);
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  const handleAdd = (p: Product) => {
    cartStore.add(p);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen pb-24">
      <Header onCartOpen={() => setCartOpen(true)} cartCount={count} />

      {!game ? (
        <GameSelector onSelect={setGame} />
      ) : game === "freefire" ? (
        <ShopFreeFire
          onBack={() => setGame(null)}
          onAdd={handleAdd}
          onBuy={(p) => setCheckout(p)}
        />
      ) : null}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={(t) => {
          setCartOpen(false);
          setCheckout(t);
        }}
      />

      {checkout && (
        <OrderForm
          target={checkout}
          items={items}
          onClose={() => setCheckout(null)}
        />
      )}

      <footer className="text-center py-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gaming-Z Gems · Top-up gaming Madagascar
      </footer>
    </div>
  );
}
