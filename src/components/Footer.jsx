import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">PokéCards</h3>

        <p className="footer-tagline">
          A modern Pokédex-style experience to explore Pokémon by type and evolution.
        </p>

        <div className="footer-links">
          <span>Pokédex</span>
          <span>Types</span>
          <span>About</span>
        </div>

        {/* 🔹 Credits Section */}
        <div className="footer-credits">
          <p>
            Pokémon data provided by{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>.
          </p>

          <p>
            Pokémon names, images, and related content are © Nintendo, Creatures Inc.,
            and GAME FREAK Inc.
          </p>

          <p>
            Designed & developed by <strong>Vaibhav Bodade</strong>.
          </p>

          <p className="ai-credit">
            UI architecture and development assistance by <strong>ChatGPT</strong>.
          </p>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} PokéCards. This is an unofficial, non-commercial fan project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
