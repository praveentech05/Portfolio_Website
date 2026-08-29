import Reveal from "./Reveal";

function Journey() {
  const milestones = [
    {
      number: "01",
      title: "Started Programming",
      description:
        "Began my programming journey and developed an interest in building software solutions."
    },
    {
      number: "02",
      title: "Java & SQL",
      description:
        "Learned Java fundamentals, object-oriented programming and SQL, then started building database-driven applications."
    },
    {
      number: "03",
      title: "Built Real Projects",
      description:
        "Applied what I learned by building projects such as the Student Management System with Java, JDBC and SQL."
    },
    {
      number: "04",
      title: "Spring Boot",
      description:
        "Moved toward backend development with Java and Spring Boot, learning REST APIs and modern application architecture."
    },
    {
      number: "05",
      title: "React & Full Stack",
      description:
        "Started learning React and combining frontend and backend technologies to build complete web applications."
    },
    {
      number: "06",
      title: "Building the Future",
      description:
        "Continuing to build projects, improve my skills and work toward creating real-world digital solutions through Sankalp Technovation."
    }
  ];

  return (
    <section className="journey-section section" id="journey">
      <Reveal>
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">06 — JOURNEY</p>

          <h2>
            From learning
            <span> to building.</span>
          </h2>

          <p className="section-description">
            Every project, technology and challenge is another step
            in my journey as a developer.
          </p>
        </div>

        
        <div className="journey-track">

          {milestones.map((milestone) => (
            <div
              className="journey-milestone"
              key={milestone.number}
            >

              <div className="milestone-number">
                {milestone.number}
              </div>

              <div className="milestone-dot"></div>

              <div className="milestone-content">

                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>

              </div>

            </div>
          ))}

        </div>
        

      </div>
      </Reveal>
    </section>
  );
}

export default Journey;