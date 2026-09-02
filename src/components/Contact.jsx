function Contact() {
  return (
    <section className="contact">
      <div className="section-heading">
        <p>CONTACT</p>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-intro">
          <h3>Have a project or opportunity?</h3>

          <p>
            I'm interested in cloud, DevOps, automation, infrastructure,
            and technology. Feel free to reach out if you'd like to
            connect or discuss an opportunity.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:deepansivaprakasam01@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <span>✉</span>
            </div>

            <div>
              <p>Email</p>
              <h3>deepansivaprakasam01@gmail.com</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://github.com/deepan011"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <i className="devicon-github-original"></i>
            </div>

            <div>
              <p>GitHub</p>
              <h3>github.com/deepan011</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>

          <a
            href="https://linkedin.com/deepan-s"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <i className="devicon-linkedin-plain"></i>
            </div>

            <div>
              <p>LinkedIn</p>
              <h3>linkedin.com/deepan-s</h3>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <p>© 2026 Deepan S. Built with React.</p>
      </div>
    </section>
  )
}

export default Contact

