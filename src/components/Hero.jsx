
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-status">
          <span className="status-dot"></span>
          Available for Cloud & DevOps Opportunities
        </div>

        <p className="hero-label">CLOUD / DEVOPS ENGINEER</p>

        <h1>
          Hi, I'm
          <span>Deepan Sivaprakasam</span>
        </h1>

        <p className="hero-description">
          Cloud & DevOps Engineer focused on building reliable cloud
          infrastructure, automating deployments, and working with modern
          DevOps technologies across AWS and Azure.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="primary-button">
            View Projects
            <span>↗</span>
          </Link>

          <Link to="/contact" className="secondary-button">
            Let's Connect
          </Link>
        </div>

        <div className="hero-stack">
          <span>AWS</span>
          <span>Azure</span>
          <span>Terraform</span>
          <span>Kubernetes</span>
          <span>Docker</span>
        </div>
      </div>

      <div className="hero-tech">
        <div className="tech-orbit">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="tech-card tech-aws">
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
            <span>AWS</span>
          </div>

          <div className="tech-card tech-azure">
            <i className="devicon-azure-plain"></i>
            <span>Azure</span>
          </div>

          <div className="tech-card tech-terraform">
            <i className="devicon-terraform-plain"></i>
            <span>Terraform</span>
          </div>

          <div className="tech-card tech-kubernetes">
            <i className="devicon-kubernetes-plain"></i>
            <span>Kubernetes</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="scroll-line"></span>
      </div>
    </section>
  )
}

export default Hero

