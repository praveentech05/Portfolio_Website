import Reveal from "./Reveal";

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "HTML", "CSS"]
    },
    {
      category: "Frontend",
      items: ["ReactJS", "Responsive Design", "UI/UX Development"]
    },
    {
      category: "Backend",
      items: ["Spring Boot", "REST APIs", "JDBC"]
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"]
    },
    {
      category: "Currently Learning",
      items: ["Full Stack Development", "Advanced React","Backend Development with Spring Boot"]
    }
  ];

  return (
    <section className="skills section" id="skills">
      <Reveal>
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">02 — SKILLS</p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

          <p className="section-description">
            A growing toolkit of technologies I use to build modern
            applications and solve real-world problems.
          </p>
        </div>

        
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
       

      </div>
       </Reveal>
    </section>
  );
}

export default Skills;