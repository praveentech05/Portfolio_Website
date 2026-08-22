import Reveal from "./Reveal";

function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites designed to create a strong online presence for individuals, businesses and organizations.",
      tags: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      number: "02",
      title: "Web Applications",
      description:
        "Interactive and scalable web applications built to solve real business and organizational problems.",
      tags: ["React", "Java", "Spring Boot", "SQL"]
    },
    {
      number: "03",
      title: "Android Applications",
      description:
        "Practical Android applications focused on usability, performance and solving real-world requirements.",
      tags: ["Android", "Java", "APIs"]
    },
    {
      number: "04",
      title: "Custom Solutions",
      description:
        "Software solutions tailored to specific requirements, from idea and design to development and deployment.",
      tags: ["Planning", "Development", "Deployment"]
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">04 — SERVICES</p>

          <h2>
            What I can
            <span> build.</span>
          </h2>

          <p className="section-description">
            I combine development skills and problem-solving to turn
            ideas into practical digital solutions.
          </p>
        </div>

        <Reveal>
        <div className="services-grid">

          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-top">
                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>
              </div>

              <div className="service-content">

                <h3>{service.title}</h3>

                <p>{service.description}</p>

              </div>

              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Services;