import { FaCodeBranch, FaExternalLinkAlt, FaGithub, FaMedal } from 'react-icons/fa';
import SkillTag from '../components/SkillTag';
import { hackathons } from '../data/hackathons';
import './Hackathons.css';

export default function Hackathons() {
  const sortedHackathons = [...hackathons].sort((a, b) => b.year - a.year);

  return (
    <div className="hackathons-page">
      <div className="hackathons-container">
        <header className="hackathons-header">
          <h1>Hackatones</h1>
          <p>
            Espacio para documentar cada hackatón en la que participo: qué construimos, con qué stack y qué aprendí en cada reto.
          </p>

          <div className="hackathon-metrics">
            <div className="metric-card">
              <span className="metric-value">{sortedHackathons.length}</span>
              <span className="metric-label">Participaciones</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">{new Set(sortedHackathons.map(h => h.location)).size}</span>
              <span className="metric-label">Ubicaciones</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">{new Set(sortedHackathons.flatMap(h => h.stack)).size}</span>
              <span className="metric-label">Tecnologías usadas</span>
            </div>
          </div>
        </header>

        <section className="hackathons-grid">
          {sortedHackathons.map((hackathon) => (
            <article key={hackathon.id} className="hackathon-card">
              <div className="hackathon-top-row">
                <span className="hackathon-year">{hackathon.year}</span>
                <span className="hackathon-theme">{hackathon.theme}</span>
              </div>

              <h2>{hackathon.name}</h2>
              <p className="hackathon-project-name">
                <FaCodeBranch /> {hackathon.projectName}
              </p>

              <div className="hackathon-details">
                <p><strong  style={{ color: 'var(--primary-color)' }}>Rol:</strong> {hackathon.role}</p>
                <p><strong style={{ color: 'var(--primary-color)' }}>Ubicación:</strong> {hackathon.location}</p>
                <p className="hackathon-achievement" style={{ color: '#ebb645da' }}>
                  <FaMedal /> {hackathon.achievement}
                </p>
              </div>

              <p className="hackathon-summary">{hackathon.summary}</p>

              <div className="hackathon-stack">
                {hackathon.stack.map((tech) => (
                  <SkillTag key={tech} skill={tech} />
                ))}
              </div>

              <div className="hackathon-links">
                {hackathon.repoUrl && (
                  <a href={hackathon.repoUrl} target="_blank" rel="noopener noreferrer" className="hackathon-link">
                    <FaGithub /> Repositorio
                  </a>
                )}
                {hackathon.demoUrl && (
                  <a href={hackathon.demoUrl} target="_blank" rel="noopener noreferrer" className="hackathon-link secondary">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {hackathon.demoUrl2 && (
                  <a href={hackathon.demoUrl2} target="_blank" rel="noopener noreferrer" className="hackathon-link secondary">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
