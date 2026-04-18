import freefire from "@/assets/freefire.jpg";
import pubg from "@/assets/pubg.jpg";

export type GameId = "freefire" | "pubg";

export function GameSelector({ onSelect }: { onSelect: (g: GameId) => void }) {
  const games: { id: GameId; name: string; img: string; tag: string; available: boolean }[] = [
    { id: "freefire", name: "Free Fire", img: freefire, tag: "TOP UP DIAMANTS", available: true },
    { id: "pubg", name: "PUBG Mobile", img: pubg, tag: "BIENTÔT DISPONIBLE", available: false },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <p className="text-xs uppercase tracking-[0.3em] neon-text-green mb-2">Bienvenue chez</p>
        <h2 className="font-display text-4xl md:text-5xl font-black gradient-text">GAMING-Z GEMS</h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
          Recharge instantanée, prix en Ariary, livraison rapide. Choisissez votre jeu pour commencer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((g) => (
          <button
            key={g.id}
            onClick={() => g.available && onSelect(g.id)}
            disabled={!g.available}
            className="group relative h-56 rounded-2xl overflow-hidden border border-border card-hover disabled:opacity-60 disabled:cursor-not-allowed text-left"
          >
            <img src={g.img} alt={g.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-xs uppercase tracking-widest text-accent font-bold">{g.tag}</p>
              <h3 className="font-display text-3xl font-black text-white mt-1">{g.name}</h3>
            </div>
            {g.available && (
              <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-accent text-accent-foreground text-[10px] font-bold uppercase">
                Disponible
              </span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
