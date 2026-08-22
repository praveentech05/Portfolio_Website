function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          <span>&lt;</span>Praveen<span>/&gt;</span>
        </a>

        <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#education">Education</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>

      </div>
    </header>
  );
}

export default Navbar;