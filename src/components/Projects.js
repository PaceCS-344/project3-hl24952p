import GitHubProjects from "./GitHubProjects";

const projects = [
  {
    title: "React Portfolio",
    description:
      "This site! A single-page portfolio built in React, featuring a theme toggle, rotating polaroid hero, accordion experience section, and animated skill cards.",
    tags: ["React", "JavaScript", "CSS"],
    note: "Personal project",
  },
  {
    title: "Bank System",
    description:
      "Console-based banking application supporting accounts, transactions, and balance tracking. Focused on clean class design and user input handling.",
    tags: ["Java", "OOP"],
    note: "Class project",
  },
  {
    title: "Community Group Website",
    description:
      "Group project where I served as primary liaison between the team and a community partner. Coordinated communication and deliverables through the development process.",
    tags: ["Teamwork", "Web", "Communication"],
    link: "https://hl24952p.github.io/Commuters-Community-Website/",
    linkLabel: "View Live Site →",
    note: "Group project",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-description">
        A few things I've built while learning. More on the way.
      </p>

      <div className="project-gallery">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-header">
              <h3>{p.title}</h3>
              {p.note && <span className="project-note">{p.note}</span>}
            </div>

            <p className="project-description">{p.description}</p>

            <div className="project-tags">
              {p.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.linkLabel || "View on GitHub →"}
                </a>
              )}
              {p.repoLink && (
                <a className="project-link project-link-secondary" href={p.repoLink} target="_blank" rel="noopener noreferrer">
                  {p.repoLinkLabel || "View Repo →"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <GitHubProjects />
    </section>
  );
}

export default Projects;