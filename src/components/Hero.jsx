import { useAppContext } from '../contexts/AppContext';

export default function Hero() {
  const { heroCopy } = useAppContext();

  return (
    <div className="hero-content">
      <div>
        <p className="eyebrow">{heroCopy.eyebrow}</p>
        <h1>{heroCopy.title}</h1>
        <p className="hero-copy">{heroCopy.description}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#launch">Start building</a>
          <a className="btn secondary" href="#features">Explore features</a>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-top">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <div className="card-body">
          <h3>Project Workspace</h3>
          <ul>
            <li>🔒 Authenticated team access</li>
            <li>📂 Shared project workspaces</li>
            <li>📦 Docker-ready deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
