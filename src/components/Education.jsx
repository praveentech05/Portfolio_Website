import Reveal from "./Reveal";

function Education() {
  const education = [
    {
      year: "2025 — Present",
      degree: "Master's Degree (MCA)",
      institution: "REVA University, Bengaluru",
      CGPA: "9.41/10",
      description:
        "Currently pursuing my master's degree while developing my technical skills and building practical software projects."
    },
    {
      year: "2022 — 2025",
      degree: "Bachelor's Degree (BCA)",
      institution: "Seshadripuram College, Tumakuru",
      CGPA: "8.99/10",
      description:
        "Completed my bachelor's degree with an interest in technology and computer science."
    },
    {
      year: "2020 — 2022",
      degree: "PUC (PCMB)",
      institution: "The Master's PU College, Tumakuru",
      CGPA: "9.16/10",
      description:
        "Completed higher secondary education with a focus on science and mathematics, laying the foundation for my interest in technology."
    },
    {
      year: "2019 — 2020",
      degree: "SSLC",
      institution: "Sri Ranga Vidya Mandira, Tumakuru",
      CGPA: "9.68/10",
      description:
        "Completed my SSLC with a strong foundation in science and mathematics."
    }
  ];

  return (
    <section className="education section" id="education">
      <Reveal>
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">05 — EDUCATION</p>

          <h2>
            My academic
            <span> background.</span>
          </h2>

          <p className="section-description">
            My academic journey and the foundation that helped me
            develop an interest in technology and software development.
          </p>
        </div>

        
        <div className="education-list">

          {education.map((item, index) => (
            <div className="education-item" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-line">
                <span></span>
              </div>

              <div className="education-content">

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>

              </div>

            </div>
          ))}

        </div>
        

      </div>
      </Reveal>
    </section>
  );
}

export default Education;