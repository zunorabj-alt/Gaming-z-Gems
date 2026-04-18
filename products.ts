import diamonds from "@/assets/diamonds.png";
import subscription from "@/assets/subscription.png";
import levelup from "@/assets/levelup.png";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "topup" | "subscription" | "levelup";
};

export const formatAr = (n: number) => `${n.toLocaleString("fr-FR")} Ar`;

export const topUpProducts: Product[] = [
  { id: "ff-110", name: "110 💎", price: 4900, image: diamonds, category: "topup" },
  { id: "ff-231", name: "231 💎", price: 9600, image: diamonds, category: "topup" },
  { id: "ff-341", name: "341 💎", price: 13980, image: diamonds, category: "topup" },
  { id: "ff-462", name: "462 💎", price: 18600, image: diamonds, category: "topup" },
  { id: "ff-583", name: "583 💎", price: 23130, image: diamonds, category: "topup" },
  { id: "ff-693", name: "693 💎", price: 27980, image: diamonds, category: "topup" },
  { id: "ff-803", name: "803 💎", price: 32800, image: diamonds, category: "topup" },
  { id: "ff-924", name: "924 💎", price: 37300, image: diamonds, category: "topup" },
  { id: "ff-1188", name: "1188 💎", price: 46730, image: diamonds, category: "topup" },
  { id: "ff-1419", name: "1419 💎", price: 55700, image: diamonds, category: "topup" },
  { id: "ff-1650", name: "1650 💎", price: 65430, image: diamonds, category: "topup" },
  { id: "ff-2420", name: "2420 💎", price: 92730, image: diamonds, category: "topup" },
];

export const subscriptionProducts: Product[] = [
  { id: "ff-weekly", name: "Weekly Membership", price: 10500, image: subscription, category: "subscription" },
  { id: "ff-monthly", name: "Monthly Membership", price: 47000, image: subscription, category: "subscription" },
];

export const levelUpProducts: Product[] = [
  { id: "lvl-6", name: "Niveau 6 — 120 💎", price: 3400, image: levelup, category: "levelup" },
  { id: "lvl-10-25", name: "Niveau 10 à 25 — 200 💎", price: 4300, image: levelup, category: "levelup" },
  { id: "lvl-30", name: "Niveau 30 — 350 💎", price: 6000, image: levelup, category: "levelup" },
  { id: "lvl-full", name: "Full Pack — 1270 💎", price: 25000, image: levelup, category: "levelup" },
];
