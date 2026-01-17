import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        PokéCards
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Pokédex</li>
        <li>Types</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
