import Reveal from "./Reveal";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  setStatus("Sending...");

  emailjs
    .sendForm(
      "service_qp3o5cq",
      "template_gywqnma",
      form,
      {
        publicKey: "49gRTppWDqsaKsDP9",
      }
    )
    .then(
      () => {
        setStatus("Message sent successfully! I'll get back to you soon.");
        form.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Please try again.");
      }
    );
};
  return (
    <section className="contact section" id="contact">
      <div className="section-container">

        <div className="contact-heading">
          <p className="section-label">07 — CONTACT</p>

          <h2>
            Let's build something
            <span> together.</span>
          </h2>

          <p>
            Have an idea, project or opportunity in mind?
            I'd love to hear about it.
          </p>
        </div>

        <Reveal>
          <div className="contact-grid">

            {/* Contact Information */}

            <div className="contact-info">

              <div className="contact-intro">
                <h3>Get in touch</h3>

                <p>
                  Whether you have a project idea, want to collaborate,
                  or simply want to say hello, feel free to reach out.
                </p>
              </div>

              <div className="contact-details">

                <a
                  href="mailto:praveen.projects05@gmail.com"
                  className="contact-detail"
                >
                  <span className="contact-detail-label">
                    Email
                  </span>

                  <span className="contact-detail-value">
                    praveen.projects05@gmail.com
                  </span>
                </a>

                <a
                  href="https://github.com/praveentech05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail-label">
                    GitHub
                  </span>

                  <span className="contact-detail-value">
                    github.com/praveentech05
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/praveen-r5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail-label">
                    LinkedIn
                  </span>

                  <span className="contact-detail-value">
                    linkedin.com/in/praveen-r5
                  </span>
                </a>

              </div>

            </div>


            {/* Contact Form */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your idea or project..."
                  required
                ></textarea>
              </div>


              {status && (
                <p className="form-status">
                  {status}
                </p>
              )}


              <button
                type="submit"
                className="submit-button"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message"}
                {!sending && <span>↗</span>}
              </button>

            </form>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default Contact;