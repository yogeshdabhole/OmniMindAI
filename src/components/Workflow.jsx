import { useAppContext } from '../contexts/AppContext';

export default function Workflow() {
  const { workflowSteps } = useAppContext();

  return (
    <section id="workflow" className="section workflow">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2>From ingestion to insight, orchestrated by agents</h2>
      </div>

      <div className="workflow-grid">
        {workflowSteps.map((step) => (
          <div key={step.title} className="workflow-card">
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
