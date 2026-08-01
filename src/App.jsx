const features = [
  { title: 'Document Chat', icon: '📄', text: 'Ask questions across PDFs, notes, wikis, and knowledge bases with grounded retrieval.' },
  { title: 'Vision AI', icon: '🖼️', text: 'Understand images, diagrams, screenshots, and scanned materials with multimodal reasoning.' },
  { title: 'Speech-to-Text', icon: '🎤', text: 'Transcribe meetings, interviews, and audio streams into searchable text instantly.' },
  { title: 'Text-to-Speech', icon: '🔊', text: 'Turn reports, summaries, or AI answers into natural voice experiences.' },
  { title: 'Web Search', icon: '🌐', text: 'Bridge internal knowledge with live web sources for up-to-date answers.' },
  { title: 'Dashboard', icon: '📊', text: 'Monitor usage, task progress, knowledge health, and AI performance in one view.' },
  { title: 'Data Analysis', icon: '📈', text: 'Inspect spreadsheets, databases, and structured data with AI-assisted analysis.' },
  { title: 'Report Generator', icon: '📝', text: 'Create polished reports, briefs, and summaries from gathered evidence.' },
  { title: 'Email Generator', icon: '📧', text: 'Draft email responses, campaigns, and outreach content in your brand voice.' },
  { title: 'SQL Generator', icon: '💻', text: 'Translate business questions into SQL queries and curated dataset views.' },
  { title: 'Knowledge Graph', icon: '🧠', text: 'Connect entities, documents, and workflows into a navigable knowledge map.' },
  { title: 'Multi-Agent System', icon: '🤖', text: 'Coordinate specialists for research, writing, analysis, and execution tasks.' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="nav">
          <div className="brand">OmniMindAI</div>
          <div className="nav-links">
            <a href="#features">Capabilities</a>
            <a href="#workflow">Workflow</a>
            <a href="#launch">Launch</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">One intelligent workspace for every data modality</p>
            <h1>Understand text, PDFs, images, audio, video, spreadsheets, databases, and websites in one place.</h1>
            <p className="hero-copy">
              OmniMindAI combines retrieval, multimodal understanding, analytics, and specialist agents to help teams move from raw input to actionable insight.
            </p>
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
      </header>

      <main>
        <section id="features" className="section">
          <div className="section-heading">
            <p className="eyebrow">Platform capabilities</p>
            <h2>Everything your AI team needs to reason over complex information</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="section workflow">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>From ingestion to insight, orchestrated by agents</h2>
          </div>

          <div className="workflow-grid">
            <div className="workflow-card">
              <h3>1. Ingest</h3>
              <p>Bring in documents, media, spreadsheets, and live web context.</p>
            </div>
            <div className="workflow-card">
              <h3>2. Reason</h3>
              <p>Use specialized agents to summarize, analyze, and generate outputs.</p>
            </div>
            <div className="workflow-card">
              <h3>3. Deliver</h3>
              <p>Publish dashboards, reports, SQL, and communications from a single workspace.</p>
            </div>
          </div>
        </section>

        <section id="launch" className="section launch-card">
          <h2>Ready to launch your AI command center?</h2>
          <p>Start with a secure, modular platform that can grow from a single use case to a full enterprise workflow.</p>
          <a className="btn primary" href="mailto:hello@omnimindai.dev">Book a demo</a>
        </section>
      </main>
    </div>
  );
}

export default App;
