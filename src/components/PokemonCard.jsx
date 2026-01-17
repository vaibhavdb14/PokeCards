import "../styles/pokemonCard.css";

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

function PokemonCard({ pokemon }) {
  const primaryType = pokemon.types[0].type.name;
  const glowColor = typeColors[primaryType];

  return (
    <div
      className="pokemon-card"
      style={{ "--glow-color": glowColor }}
    >
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />

      <h3 className="pokemon-name">{pokemon.name}</h3>

      <div className="pokemon-types">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="pokemon-type"
            style={{ backgroundColor: typeColors[t.type.name] }}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
