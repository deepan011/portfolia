const experiences = [
  {
    company: 'Presidio',
    role: 'Cloud / DevOps Engineer',
    period: 'August 2026 – Present',
    description:
      'Working on cloud and DevOps environments with a focus on infrastructure automation, CI/CD, containerization, cloud services, and deployment workflows across AWS and Azure.',
    responsibilities: [
      'Working with AWS and Azure cloud environments for infrastructure and application deployment.',
      'Working with Terraform for Infrastructure as Code and repeatable cloud infrastructure provisioning.',
      'Building and maintaining CI/CD pipelines for automated application build, test, and deployment workflows.',
      'Working with Docker and Kubernetes for containerized applications and deployment environments.',
      'Managing and troubleshooting cloud infrastructure, deployments, and application environments.',
      'Working with Git-based development and deployment workflows across DevOps environments.',
      'Supporting monitoring, logging, and operational troubleshooting for cloud-hosted applications.',
    ],
    technologies: [
      'AWS',
      'Azure',
      'Terraform',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'Git',
      'Linux',
      'Cloud Monitoring',
    ],
  },

  {
    company: 'Bright River India Private Limited',
    role: 'Junior DevOps Engineer',
    period: 'May 2025 – July 2026',
    description:
      'Worked on cloud infrastructure, CI/CD automation, cloud migration, containerization, monitoring, and DevOps tooling across Azure and DigitalOcean environments.',
    responsibilities: [
      'Worked on migration of applications and databases from on-premises infrastructure to Azure.',
      'Provisioned and configured Azure infrastructure including App Services, Virtual Machines, Azure SQL Managed Instance, and networking components.',
      'Built and maintained GitLab CI/CD pipelines for application build, testing, and deployment.',
      'Worked with Docker, Kubernetes, Helm, Terraform, and Argo CD for containerized workloads and infrastructure automation.',
      'Implemented monitoring and observability using Azure Monitor, Application Insights, Grafana, Prometheus, Site24x7, and Uptime Kuma.',
      'Supported DigitalOcean infrastructure for applications such as Metabase and n8n.',
    ],
    technologies: [
      'Azure',
      'GitLab CI/CD',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'Grafana',
      'Prometheus',
    ],
  },

  {
    company: 'Bizongo - Smart Paddle Technology Pvt Ltd',
    role: 'DevOps Engineer',
    period: 'July 2024 – March 2025',
    description:
      'Worked on AWS cloud infrastructure, Kubernetes, CI/CD automation, Infrastructure as Code, and deployment automation for microservices-based applications.',
    responsibilities: [
      'Automated AWS EKS cluster and infrastructure provisioning using Terraform and Jenkins.',
      'Developed CI/CD pipelines for microservices and implemented parallel build logic to reduce build time.',
      'Worked with Kubernetes and Helm for production application deployments.',
      'Implemented Argo CD App-of-Apps for GitOps-based application delivery.',
      'Built optimized container images using multi-stage Dockerfiles and Jib.',
      'Worked with AWS services including EC2, S3, CloudFront, Lambda, Route53, RDS, IAM, VPC, and Load Balancers.',
      'Troubleshot CI/CD pipeline, Kubernetes, infrastructure, and application build issues.',
    ],
    technologies: [
      'AWS',
      'EKS',
      'Terraform',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Helm',
      'Argo CD',
    ],
  },
]


function Experience() {
  return (
    <section className="experience">
      <div className="section-heading">
        <p>EXPERIENCE</p>
        <h2>My DevOps Journey</h2>
      </div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div className="experience-item" key={experience.company}>
            <div className="timeline-marker">
              <span>{index + 1}</span>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <p className="experience-period">
                    {experience.period}
                  </p>

                  <h3>{experience.role}</h3>

                  <h4>{experience.company}</h4>
                </div>
              </div>

              <p className="experience-description">
                {experience.description}
              </p>

              <ul className="experience-list">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>

              <div className="experience-tech">
                {experience.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience