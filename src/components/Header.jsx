import Navbar from "./Navbar";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <Navbar />

      <div className="header-content">
        <h1>Pokémon Cards</h1>
        <p>Explore Pokémon across generations, types, and evolutions.</p>
      </div>
    </header>
  );
}

export default Header;
