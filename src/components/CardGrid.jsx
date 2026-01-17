import PokemonCard from "./PokemonCard";

function CardGrid({ pokemonList = [] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "36px",  
        padding: "50px 40px",
      }}
    >
       {pokemonList.map((pokemon) => (
        <PokemonCard
          key={`${pokemon.id}-${pokemon.name}`}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
}

export default CardGrid;
