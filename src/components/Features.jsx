import { useAppContext } from '../contexts/AppContext';

export default function Features() {
  const { features } = useAppContext();

  return (
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
  );
}
