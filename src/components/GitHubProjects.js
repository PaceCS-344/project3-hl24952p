import { useEffect, useState } from "react";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/hl24952p/repos?sort=updated&per_page=20")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch repos");
        return response.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Filter repos based on the search term (case-insensitive, checks name/language/description)
  const filteredRepos = repos.filter((repo) => {
    const term = searchTerm.toLowerCase();
    if (!term) return true;
    const name = (repo.name || "").toLowerCase();
    const language = (repo.language || "").toLowerCase();
    const description = (repo.description || "").toLowerCase();
    return name.includes(term) || language.includes(term) || description.includes(term);
  });

  return (
    <div className="github-section">
      <div className="github-section-divider"></div>
      <h3 className="github-section-title">Everything on GitHub</h3>
      <p className="github-section-description">Live from my GitHub</p>

      {!loading && !error && repos.length > 0 && (
        <div className="github-search-wrapper">
          <input
            type="text"
            className="github-search"
            placeholder="Search repos by name, language, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button className="github-search-clear" onClick={() => setSearchTerm("")} aria-label="Clear search">×</button>
          )}
        </div>
      )}

      {loading && <p className="github-status">Loading repos...</p>}
      {error && <p className="github-status">Could not load repos right now.</p>}

      {!loading && !error && filteredRepos.length === 0 && searchTerm && (
        <p className="github-status">No repos match "{searchTerm}".</p>
      )}

      {!loading && !error && filteredRepos.length > 0 && (
        <div className="github-grid">
          {filteredRepos.map((repo) => (
            <a key={repo.id} className="github-card" href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div className="github-card-top">
                <span className="github-card-name">{repo.name}</span>
                {repo.fork ? <span className="github-fork-badge">fork</span> : null}
              </div>
              <div className="github-card-bottom">
                {repo.language ? <span className="github-language">{repo.language}</span> : <span className="github-language-empty">—</span>}
                <span className="github-stars">★ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubProjects;