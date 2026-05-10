import { useEffect, useState } from "react";

function GitHubStats() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/hl24952p")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch profile");
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="github-stats">
        <p className="github-status">Loading GitHub profile...</p>
      </div>
    );
  }

  if (error || !user) {
    return null;
  }

  return (
    <div className="github-stats">
      <a className="github-stats-link" href={user.html_url} target="_blank" rel="noopener noreferrer">
        <img className="github-avatar" src={user.avatar_url} alt={`${user.login} avatar`} />
        <div className="github-stats-info">
          <h3 className="github-stats-name">{user.name || user.login}</h3>
          <p className="github-stats-handle">@{user.login}</p>
          {user.bio && <p className="github-stats-bio">{user.bio}</p>}
          <div className="github-stats-numbers">
            <div className="github-stat">
              <span className="github-stat-value">{user.public_repos}</span>
              <span className="github-stat-label">Repos</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{user.followers}</span>
              <span className="github-stat-label">Followers</span>
            </div>
            <div className="github-stat">
              <span className="github-stat-value">{user.following}</span>
              <span className="github-stat-label">Following</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default GitHubStats;