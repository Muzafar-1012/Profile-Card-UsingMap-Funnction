
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>
            <span>&lt;/&gt;</span> DevProfiles
          </h2>

          <p>
            Discover talented developers, designers,
            and technology professionals.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#profiles">Profiles</a>
          <a href="#about">About</a>
        </div>

        <div className="footer-copy">
          <p>
            © 2026 DevProfiles. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

