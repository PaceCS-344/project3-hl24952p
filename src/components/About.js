import GitHubStats from "./GitHubStats";

const aboutItems = [
  {
    number: "01",
    title: "Student & Problem Solver",
    text: "I’m a Computer Science student building technical skills while exploring how technology connects with people, communication, and real-world problem solving."
  },
  {
    number: "02",
    title: "Creative & Curious",
    text: "Outside of tech, I’ve always been drawn to creative spaces like music, gaming, and design. Creativity helps shape how I think, learn, and approach challenges."
  },
  {
    number: "03",
    title: "Teamwork & Community",
    text: "I value collaboration, adaptability, and working with others. Whether through class projects, work, or gaming, I enjoy environments where people solve problems together."
  }
];

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <p className="about-intro">
        I’m still figuring out exactly where I want to go long-term, but I know
        I’m drawn to work that lets me learn, connect with people, and solve
        real problems in thoughtful ways.
      </p>

      <div className="about-list">
        {aboutItems.map((item, index) => (
          <div className="about-feature" key={index}>
            <div className="about-number">{item.number}</div>
            <div className="about-feature-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <GitHubStats />
    </section>
  );
}

export default About;