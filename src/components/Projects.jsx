import Reveal from "./Reveal";

function Projects() {
  const projects = [

    {
      number: "01",
      title: "Inventory Management System",
      description: [
        "Developed a full-stack inventory management application using React.js, Node.js, Express.js, and MongoDB.",
        "Designed and implemented RESTful APIs for product CRUD operations and inventory data management.",
        "Implemented product search, category filtering, and low-stock detection/highlighting for efficient inventory tracking.",
        "Built a responsive frontend with input validation and error handling to provide a reliable user experience.",
      ],
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB"],
      type: "Full-Stack Application",
      github: "https://github.com/praveentech05/inventory-management-system"
    },

    {
      number: "02",
      title: "Task Management REST API",
      description: [
        "Developed RESTful APIs for task management system handling CRUD operations.", 
        "Implemented backend using Spring Boot and JPA for database interaction.",
        "Designed clean layered architecture (Controller, Service, Repository) for maintainability and scalability.",
        "Tested APIs using Postman and ensured proper error handling and validation.",
      ],

      technologies: ["Java", "Spring Boot", "MySQL"],
      type: "Backend Application",
      github: "https://github.com/praveentech05/Task_Management_REST_API"
    },

    {
      number: "03",
      title: "Student Management System",
      description: [
        "Developed a console-based application to manage student records using Java and SQL JDBC.",
        "Implemented CRUD operations with efficient database handling and error management.",
        "Applied object-oriented programming concepts for modular design and maintainability.",
        "Improved data retrieval performance using optimized queries.",
      ],
      technologies: ["Java", "SQL", "JDBC"],
      type: "Java Application",
      github: "https://github.com/praveentech05/Student_Management_System"
    }

  ];

  return (
    <section className="projects section" id="projects">
      <Reveal>
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

                {/* <p>{project.description}</p> */}

                <p>{project.description.map((desc) => (
                  <span key={desc}>{desc}</span>
                ))}</p>

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
        

      </div>
      </Reveal>
    </section>
  );
}

export default Projects;