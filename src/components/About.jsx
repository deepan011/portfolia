function About() {
  return (
    <section id="about" className="about">
      <div className="section-heading">
        <p>ABOUT ME</p>
        <h2>Cloud & DevOps Engineer</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Cloud & DevOps Engineer with 2 years of experience working
            across AWS and Azure environments.
          </p>

          <p>
            My experience includes CI/CD automation, Infrastructure as Code,
            containerization, Kubernetes, cloud migrations, monitoring, and
            cloud infrastructure management.
          </p>

          <p>
            I enjoy automating repetitive processes, improving deployment
            workflows, and building reliable and scalable cloud environments.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>

          <div className="highlight-card">
            <h3>AWS</h3>
            <p>Cloud Platform</p>
          </div>

          <div className="highlight-card">
            <h3>Azure</h3>
            <p>Cloud Platform</p>
          </div>

          <div className="highlight-card">
            <h3>IaC</h3>
            <p>Terraform</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About