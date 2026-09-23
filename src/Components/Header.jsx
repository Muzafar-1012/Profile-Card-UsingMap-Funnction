
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        <div className="logo">
          <span className="logo-icon">&lt;/&gt;</span>
          <span>DevProfiles</span>
        </div>

        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#profiles">Profiles</a>
          <a href="#about">About</a>
        </nav>

        <button className="header-btn">
          Explore
        </button>

      </div>
    </header>
  );
}

export default Header;

