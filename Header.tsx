import { Moon, Sun, Facebook } from "lucide-react";
import { useTheme } from "@/lib/theme";
import logo from "@/assets/logo.png";

export function Header({ onCartOpen, cartCount }: { onCartOpen: () => void; cartCount: number }) {
  const { theme, toggle } = useTheme();

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-surface-elevated flex items-center justify-center overflow-hidden ring-2 ring-primary/40 shadow-[0_0_15px_oklch(0.62_0.25_25/0.4)]">
              <img src={logo} alt="Gaming-Z Gems" width={44} height={44} className="object-cover" />
            </div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold gradient-text">Gaming-Z Gems</h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Top-up Shop</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative w-14 h-8 rounded-full bg-secondary border border-border flex items-center px-1 transition-colors"
            >
              <span
                className={`absolute w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent transition-transform duration-300 flex items-center justify-center ${
                  theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
              >
                {theme === "dark" ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-white" />}
              </span>
            </button>
          </div>
        </div>
      </header>

      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook contact"
        className="fixed bottom-5 left-5 z-30 w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Facebook size={22} fill="white" />
      </a>

      <button
        onClick={onCartOpen}
        aria-label="Open cart"
        className="fixed bottom-5 right-5 z-30 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-[var(--shadow-neon-red)] hover:scale-110 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 22a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-6 h-6 px-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center ring-2 ring-background animate-pulse-neon">
            {cartCount}
          </span>
        )}
      </button>
    </>
  );
}
