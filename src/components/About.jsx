import Reveal from "./Reveal";


function About() {
  return (
    <section className="about section" id="about">
      <Reveal>
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>
            Turning ideas into
            <span> digital solutions.</span>
          </h2>
        </div>

        
          <div className="about-grid">

          <div className="about-text">
            <p>
              I'm Praveen, a developer passionate about building useful,
              modern and reliable software applications.
            </p>

            <p>
              I enjoy working with Java, Spring Boot, React and databases
              to create applications that solve real-world problems.
            </p>

            <p>
              I'm continuously improving my development skills by building
              projects, exploring new technologies and turning ideas into
              working products.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects →
            </a>
          </div>
          
          
        
          <div className="about-stats">

            <div className="stat-card">
              <span className="stat-number">01</span>
              <span className="stat-title">Developer</span>
              <p>Focused on building practical software solutions.</p>
            </div>

            <div className="stat-card">
              <span className="stat-number">02</span>
              <span className="stat-title">Problem Solver</span>
              <p>Turning problems into simple and useful applications.</p>
            </div>

            <div className="stat-card">
              <span className="stat-number">03</span>
              <span className="stat-title">Continuous Learner</span>
              <p>Always learning and experimenting with new technologies.</p>
            </div>

            <div className="stat-card">
              <span className="stat-number">04</span>
              <span className="stat-title">Builder</span>
              <p>Building projects that move ideas from concept to reality.</p>
            </div>

          </div>
        

        </div>
      
      </div>
      </Reveal>
      
      
    </section>
  );
}

export default About;