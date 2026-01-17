import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import PokedexInfo from "./components/PokedexInfo";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";

const LIMIT = 20;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const offsetRef = useRef(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemon();
    // eslint-disable-next-line
  }, []);

  // 🔹 Load Pokémon batch
  async function loadPokemon() {
    try {
      setLoading(true);

      const currentOffset = offsetRef.current;

      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${currentOffset}`,
      );
      const data = await res.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        }),
      );

      setPokemonList((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const newOnes = detailedPokemon.filter((p) => !existingIds.has(p.id));
        return [...prev, ...newOnes];
      });

      // ✅ update offset safely
      offsetRef.current += LIMIT;
    } catch (err) {
      console.error("Failed to load Pokémon:", err);
    } finally {
      setLoading(false);
    }
  }

  // 🔍 Search filter
  const searchedPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase()),
  );

  // 🎨 Type filter
  const filteredPokemon =
    selectedType === "all"
      ? searchedPokemon
      : searchedPokemon.filter((pokemon) =>
          pokemon.types.some((t) => t.type.name === selectedType),
        );

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <FilterBar
          search={search}
          setSearch={setSearch}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <CardGrid pokemonList={filteredPokemon} />

        {/* 🔽 LOAD MORE BUTTON */}
        <div style={{ textAlign: "center", margin: "40px 0" }}>
          <button
            className="load-more-btn"
            onClick={loadPokemon}
            disabled={loading}
            style={{
              padding: "12px 28px",
              fontSize: "0.95rem",
              borderRadius: "20px",
            }}
          >
            {loading ? "Loading..." : "Load More Pokémon"}
          </button>
        </div>

        <PokedexInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
