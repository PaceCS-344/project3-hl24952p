import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: "☕" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Python", icon: "🐍" },
      { name: "SQL", icon: "🗄️" },
      { name: "PHP", icon: "🐘" },
      { name: "HTML/CSS", icon: "🎨" },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "Git/GitHub", icon: "🌱" },
      { name: "VS Code", icon: "💻" },
      { name: "MariaDB", icon: "🐬" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", icon: "💬" },
      { name: "Adaptability", icon: "🌀" },
      { name: "Collaboration", icon: "🤝" },
      { name: "Problem Solving", icon: "🧩" },
    ],
  },
];

function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Build a flat list to compute global card index for staggered animation
  let cardIndex = 0;

  return (
    <section
      id="skills"
      className="skills-section"
      ref={sectionRef}
    >
      <h2 className="section-title">Skills</h2>
      <p className="section-description">
        What I work with, what I'm learning, and how I show up.
      </p>

      {skillGroups.map((group, groupIndex) => (
        <div className="skill-group" key={groupIndex}>
          <h3
            className={`skill-group-title ${isVisible ? "fade-in" : ""}`}
            style={{ animationDelay: `${groupIndex * 150}ms` }}
          >
            {group.category}
          </h3>
          <div className="skill-card-container">
            {group.items.map((skill) => {
              const delay = cardIndex * 80;
              cardIndex++;
              return (
                <div
                  className={`skill-card ${isVisible ? "fade-in" : ""}`}
                  key={skill.name}
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;