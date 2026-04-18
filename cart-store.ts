import { useSyncExternalStore } from "react";
import type { Product } from "./products";

export type CartItem = Product & { qty: number };

let items: CartItem[] = [];
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((l) => l());

export const cartStore = {
  add(product: Product) {
    const existing = items.find((i) => i.id === product.id);
    if (existing) {
      items = items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
    } else {
      items = [...items, { ...product, qty: 1 }];
    }
    emit();
  },
  remove(id: string) {
    items = items.filter((i) => i.id !== id);
    emit();
  },
  setQty(id: string, qty: number) {
    if (qty <= 0) return cartStore.remove(id);
    items = items.map((i) => (i.id === id ? { ...i, qty } : i));
    emit();
  },
  clear() {
    items = [];
    emit();
  },
  getSnapshot() {
    return items;
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export const useCart = () =>
  useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    () => [] as CartItem[],
  );
