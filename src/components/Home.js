import { useEffect, useState } from "react";

const homeSlides = [
  {
    image: "myselfpt.jpg",
    position: "top center",
    tag: "Hello!!",
    title: "Hi, I'm Haylie!",
    text: "I'm a Computer Science student at Pace University. Welcome to my portfolio, thanks for stopping by! Here's a little bit of who I am and what I do.",
    caption: "that's me :)",
    doodle: "✦",
  },
  {
    image: "orchestra_new.png",
    position: "center",
    tag: "Music",
    title: "Strings, harmony, and discipline.",
    text: "I've played in orchestra for years. Music taught me patience, practice, and how good things take time to build.",
    caption: "Fun fact: this photo is from the my local newspaper!",
    doodle: "♬",
  },
  {
    image: "hikephoto.jpg",
    position: "center",
    tag: "Hikes & Nature",
    title: "Out where the signal is bad.",
    text: "Trails, fresh air, and a break from screens. Nature is where I reset and think clearly.",
    caption: "Photo Creds: Mama Lau <3",
    doodle: "❀⸙",
  },
  {
    image: "ucsiphoto.png",
    position: "center",
    tag: "Tech",
    title: "Building, breaking, fixing.",
    text: "I'm drawn to web development and figuring out how things work — one bug at a time.",
    caption: "This photo is from my internship in Illinois~",
    doodle: "✎",
  },
  {
    image: "gaming.jpg",
    position: "center",
    tag: "Gaming",
    title: "Strategy, story, and good company.",
    text: "Whether it's solo campaigns or playing with friends, gaming is where problem-solving meets fun.",
    caption: "Tournament Night in the Esports Lounge 👾",
    doodle: "✪",
  },
  {
    image: "friendsphoto.jpg",
    position: "center",
    tag: "Friends",
    title: "My chosen family.",
    text: "Late nights, inside jokes, and the people who push me to be better. My friends keep me grounded.",
    caption: "Some of the squad 🤙",
    doodle: "◠‿◠",
  },
  {
    image: "familyphoto.jpg",
    position: "center",
    tag: "Family",
    title: "Where it all started.",
    text: "My family is my foundation — the people who shaped how I think, work, and care about what I do.",
    caption: "Home is where your people are.",
    doodle: "ღ",
  },
];

const highlights = [
  { icon: "🎓", label: "Pace University", value: "CS Student" },
  { icon: "📍", label: "Based in", value: "Connecticut" },
  { icon: "💻", label: "Currently learning", value: "React" },
  { icon: "✨", label: "Open to", value: "Internships & Learning Opportunities" },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate (pauses when paused or hovering)
  useEffect(() => {
    if (!isPlaying || isHovering) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === homeSlides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovering]);

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? homeSlides.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev === homeSlides.length - 1 ? 0 : prev + 1
    );
  };

  const current = homeSlides[currentIndex];

  return (
    <section id="home" className="hero-gallery">
      <div className="polaroid-hero">
        {/* Decorative doodles in the background */}
        <span className="doodle doodle-star" aria-hidden="true">✦</span>
        <span className="doodle doodle-squiggle" aria-hidden="true">~</span>
        <span className="doodle doodle-heart" aria-hidden="true">♡</span>

        {/* Left side: text + controls */}
        <div className="polaroid-intro">
          <span className="hero-tag">{current.tag}</span>
          <h1>{current.title}</h1>
          <p>{current.text}</p>

          {/* Media controls row */}
          <div className="polaroid-controls">
            <button
              className="polaroid-ctrl-btn"
              onClick={goPrev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              className="polaroid-ctrl-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause rotation" : "Play rotation"}
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>
            <button
              className="polaroid-ctrl-btn"
              onClick={goNext}
              aria-label="Next slide"
            >
              ›
            </button>
            <span className="polaroid-counter">
              {currentIndex + 1} / {homeSlides.length}
            </span>
          </div>

          {/* Slide indicator dots */}
          <div className="hero-dots">
            {homeSlides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === currentIndex ? "active" : ""} ${
                  i === 0 ? "intro-dot" : ""
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={
                  i === 0 ? "Go to intro" : `Go to slide ${i + 1}`
                }
              />
            ))}
          </div>
        </div>

        {/* Right side: polaroid stack */}
        <div
          className="polaroid-stack"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Decorative back polaroids */}
          <div className="polaroid polaroid-back-1" aria-hidden="true"></div>
          <div className="polaroid polaroid-back-2" aria-hidden="true"></div>

          {/* Active rotating polaroid (key forces re-render = new animation) */}
          <div className="polaroid polaroid-front" key={currentIndex}>
            {/* Washi tape across the top */}
            <span className="polaroid-tape" aria-hidden="true"></span>

            <div className="polaroid-photo">
              <img
                src={current.image}
                alt={current.tag}
                style={{ objectPosition: current.position }}
              />
            </div>

            <div className="polaroid-caption">
              <span className="caption-text">{current.caption}</span>
              <span className="caption-doodle">{current.doodle}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="highlights-strip">
        {highlights.map((h, i) => (
          <div className="highlight-card" key={i}>
            <span className="highlight-icon">{h.icon}</span>
            <div className="highlight-text">
              <span className="highlight-label">{h.label}</span>
              <span className="highlight-value">{h.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;