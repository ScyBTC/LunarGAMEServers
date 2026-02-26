import { games } from "@/data/mock";

interface FilterBarProps {
  activeFilter: string | null;
  onFilterChange: (slug: string | null) => void;
}

const FilterBar = ({ activeFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        onClick={() => onFilterChange(null)}
        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
          activeFilter === null
            ? "bg-primary/10 text-primary border-primary/30"
            : "bg-secondary text-muted-foreground border-border hover:border-primary/20 hover:text-foreground"
        }`}
      >
        All Games
      </button>
      {games.map((game) => (
        <button
          key={game.slug}
          onClick={() => onFilterChange(game.slug)}
          className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
            activeFilter === game.slug
              ? "bg-primary/10 text-primary border-primary/30"
              : "bg-secondary text-muted-foreground border-border hover:border-primary/20 hover:text-foreground"
          }`}
        >
          {game.name}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
