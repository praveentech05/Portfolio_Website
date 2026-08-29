import Reveal from "./Reveal";

function Projects() {
  const projects = [
     {
      number: "01",
      title: "Task Management App",
      description:
        "A backend application built with Spring Boot and REST APIs, designed to demonstrate modern Java backend development.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      type: "Backend Application",
      github: "https://github.com/praveentech05/Task_Management_App"
    },

    {
      number: "02",
      title: "Student Management System",
      description:
        "A Java and SQL Console based application for managing student records with complete CRUD operations and database connectivity.",
      technologies: ["Java", "SQL", "JDBC"],
      type: "Java Application",
      github: "https://github.com/praveentech05/Student_Management_System"
    }
   
  ];

  return (
    <section className="projects section" id="projects">
      <div className="section-container">

        <div className="section-heading projects-heading">
          <p className="section-label">03 — PROJECTS</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p className="section-description">
            A selection of projects I've built while learning,
            experimenting and solving real-world problems.
          </p>
        </div>

        <Reveal>
        <div className="projects-list">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-type">
                  {project.type}
                </span>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

              <a
                href={project.github}
                className="project-link"
              >
                View Project
                <span>↗</span>
              </a>

            </article>
          ))}

        </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Projects;