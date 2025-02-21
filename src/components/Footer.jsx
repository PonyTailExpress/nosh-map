import gitHubLogo from "../assets/gitHubLogo.png";

function Footer() {
  return (
    <footer className="Footer">
      <p>&copy; {new Date().getFullYear()} Nosh Map. All rights reserved.</p>
      <p>Curate your path to noshville</p>
      <a
        href="https://github.com/PonyTailExpress/nosh-map"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={gitHubLogo}
          alt="GitHub Logo"
          style={{ width: "50px", height: "auto" }}
        />
      </a>
    </footer>
  );
}

export default Footer;
