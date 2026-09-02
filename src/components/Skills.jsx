const skills = [
  {
    category: 'Cloud',
    items: [
      {
        name: 'AWS',
        icon: 'devicon-amazonwebservices-plain-wordmark',
      },
      {
        name: 'Azure',
        icon: 'devicon-azure-plain',
      },
      {
        name: 'DigitalOcean',
        icon: 'devicon-digitalocean-plain',
      },
    ],
  },
  {
    category: 'DevOps & CI/CD',
    items: [
      {
        name: 'Jenkins',
        icon: 'devicon-jenkins-line',
      },
      {
        name: 'GitLab',
        icon: 'devicon-gitlab-plain',
      },
      {
        name: 'GitHub',
        icon: 'devicon-github-original',
      },
      {
        name: 'Argo CD',
        icon: 'devicon-argocd-plain',
      },
    ],
  },
  {
    category: 'Containers & Orchestration',
    items: [
      {
        name: 'Docker',
        icon: 'devicon-docker-plain',
      },
      {
        name: 'Kubernetes',
        icon: 'devicon-kubernetes-plain',
      },
      {
        name: 'Helm',
        icon: 'devicon-helm-original',
      },
    ],
  },
  {
    category: 'Infrastructure & Monitoring',
    items: [
      {
        name: 'Terraform',
        icon: 'devicon-terraform-plain',
      },
      {
        name: 'Linux',
        icon: 'devicon-linux-plain',
      },
      {
        name: 'Prometheus',
        icon: 'devicon-prometheus-original',
      },
      {
        name: 'Grafana',
        icon: 'devicon-grafana-plain',
      },
    ],
  },
]

function Skills() {
  return (
    <section className="skills">
      <div className="section-heading">
        <p>TECHNICAL SKILLS</p>
        <h2>Tools I Work With</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skill-items">
              {group.items.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

