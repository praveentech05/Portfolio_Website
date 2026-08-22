function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Praveen R
            <span>.</span>
          </h1>

          <h2>
            Aspiring Software Developer
          </h2>

          <p className="hero-description">
            I build modern, scalable and user-friendly applications
            that turn ideas into real-world digital solutions.
          </p>

          <div className="hero-buttons">

  <a href="#projects" className="primary-button">
    View My Work
  </a>

  <a href="/resume.pdf" className="secondary-button" download>
    Download Resume
  </a>

</div>

          <div className="hero-socials">
            <a href="https://github.com/praveentech05" aria-label="GitHub">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/praveen-r5" aria-label="LinkedIn">
              LinkedIn
            </a>

            <a href="mailto:praveen.projects05@gmail.com" aria-label="Email">
              Email
            </a>
          </div>

        </div>

        <div className="hero-visual">

          <div className="code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Praveen R"</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">"Software Developer"</span>,
              </p>

              <p className="code-indent">
                passion: <span className="code-green">"Building"</span>,
              </p>

              <p className="code-indent">
                coffee: <span className="code-orange">true</span>
              </p>

              <p>{"};"}</p>
            </div>

          </div>

        </div>

      </div>

      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;