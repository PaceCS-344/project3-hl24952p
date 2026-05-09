import { useState } from "react";

const workExperience = [
  {
    title: "IT Assistant Intern",
    company: "Unique Computing Solutions Inc.",
    location: "Frankfort, IL",
    dates: "June 2025 – August 2025",
    bullets: [
      "Staged company devices for clients.",
      "Acted as liaison for a mass Windows 11 update across the organization.",
    ],
  },
  {
    title: "Server",
    company: "South Norwalk Boat Club & Silvermine Golf Club",
    location: "Norwalk, CT",
    dates: "March 2024 – August 2024",
    bullets: [
      "Provided customer service in a fast-paced environment.",
      "Developed strong communication, teamwork, and multitasking skills.",
    ],
  },
  {
    title: "Librarian Assistant",
    company: "Norwalk Public Library",
    location: "Norwalk, CT",
    dates: "July 2023 – August 2023",
    bullets: [
      "Shadowed and assisted librarians, gaining experience in library science.",
      "Helped visitors locate resources and navigate library systems.",
    ],
  },
];

const leadershipExperience = [
  {
    title: "Martial Arts Instructor's Assistant",
    company: "Volunteer",
    location: "",
    dates: "June 2016 – August 2024",
    bullets: [
      "Assissted in mentoring and training students over 8 years.",
      "Built leadership and communication skills with students of all ages.",
    ],
  },
  {
    title: "Co-Founder, School Quartets",
    company: "",
    location: "",
    dates: "January 2017 – June 2024",
    bullets: [
      "Organized and led self-managed string quartets for 7+ years.",
      "Coordinated rehearsals, performances, and group logistics.",
    ],
  },
  {
    title: "Co-Leader, Community Website Project",
    company: "",
    location: "",
    dates: "",
    bullets: [
      "Served as primary liaison between the project team and community partner.",
      "Coordinated communication and deliverables through development.",
    ],
  },
];

function AccordionItem(props) {
  const { item, itemKey, openKey, setOpenKey } = props;
  const isOpen = openKey === itemKey;

  return (
    <div className="accordion-item">
      <button
        className="accordion-title"
        onClick={() => setOpenKey(isOpen ? null : itemKey)}
        aria-expanded={isOpen}
      >
        <div className="accordion-title-text">
          <span className="accordion-role">{item.title}</span>
          {item.company ? (
            <span className="accordion-company">
              {item.company}
              {item.location ? " · " + item.location : ""}
            </span>
          ) : null}
        </div>
        <div className="accordion-meta">
          {item.dates ? (
            <span className="accordion-dates">{item.dates}</span>
          ) : null}
          <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
        </div>
      </button>

      {isOpen ? (
        <div className="accordion-content">
          <ul>
            {item.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function Experience() {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section id="experience" className="accordion-section">
      <h2 className="section-title">Experience</h2>
      <p className="section-description">
        A mix of work, leadership, and the things that have shaped how I show up.
      </p>

      <div className="resume-link-wrapper">
        <a className="resume-link" href="/Resume - Haylie Lau.docx" target="Resume - Haylie Lau.docx" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>

      <div className="experience-group">
        <h3 className="experience-group-title">Work Experience</h3>
        <div className="accordion">
          {workExperience.map((item, i) => (
            <AccordionItem
              key={"work-" + i}
              item={item}
              itemKey={"work-" + i}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          ))}
        </div>
      </div>

      <div className="experience-group">
        <h3 className="experience-group-title">Leadership & Volunteer</h3>
        <div className="accordion">
          {leadershipExperience.map((item, i) => (
            <AccordionItem
              key={"lead-" + i}
              item={item}
              itemKey={"lead-" + i}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;