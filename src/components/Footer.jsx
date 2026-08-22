function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <span>&lt;</span>Praveen<span>/&gt;</span>
            </a>

            <p>
              Building ideas into practical digital solutions.
            </p>

          </div>


          <div className="footer-links">

            <div className="footer-column">

              <h4>Navigate</h4>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>

            </div>


            <div className="footer-column">

              <h4>Connect</h4>

              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Praveen. All rights reserved.
          </p>

          <p>
            Designed & built with React.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;