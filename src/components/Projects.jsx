
const projects = [
  {
    number: '01',
    category: 'CLOUD MIGRATION',
    title: 'Azure Cloud Migration',
    description:
      'Migrated legacy applications and supporting infrastructure from on-premises environments to Azure, including production and disaster recovery environments.',
    technologies: [
      'Azure',
      'Azure Front Door',
      'App Service',
      'Virtual Machines',
      'Azure SQL MI',
      'Terraform',
    ],
  },

  {
    number: '02',
    category: 'CONTAINERIZATION',
    title: 'AWS EKS Kubernetes Platform',
    description:
      'Built and supported a containerized microservices platform using Amazon EKS, Kubernetes, Terraform, Helm, and GitOps-based deployment.',
    technologies: [
      'AWS',
      'EKS',
      'Kubernetes',
      'Docker',
      'Helm',
      'Argo CD',
      'Terraform',
    ],
  },

  {
    number: '03',
    category: 'DEVOPS AUTOMATION',
    title: 'CI/CD Automation',
    description:
      'Designed and maintained CI/CD workflows for automated application builds, testing, packaging, and deployments across cloud environments.',
    technologies: [
      'GitLab',
      'Jenkins',
      'Docker',
      'SonarQube',
      'Git',
      'CI/CD',
    ],
  },

  {
    number: '04',
    category: 'INFRASTRUCTURE',
    title: 'Infrastructure as Code',
    description:
      'Automated cloud infrastructure provisioning using Terraform to create consistent, repeatable, and manageable environments.',
    technologies: [
      'Terraform',
      'AWS',
      'Azure',
      'Git',
      'Infrastructure as Code',
    ],
  },
]

function Projects() {
  return (
    <section className="projects">
      <div className="section-heading">
        <p>PROJECTS</p>
        <h2>Things I've Worked On</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects

