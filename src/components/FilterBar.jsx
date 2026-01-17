import "../styles/filterBar.css";

const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function FilterBar({ selectedType, setSelectedType, search, setSearch }) {
  return (
    <div className="filter-bar">
      {/* 🔍 Search */}
      <div className="search-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* 🎨 Type Buttons */}
      <div className="type-buttons">
        <button
          className={`type-btn ${selectedType === "all" ? "active" : ""}`}
          onClick={() => setSelectedType("all")}
        >
          All
        </button>

        {pokemonTypes.map((type) => (
          <button
            key={type}
            className={`type-btn ${selectedType === type ? "active" : ""}`}
            style={{ backgroundColor: typeColors[type] }}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
