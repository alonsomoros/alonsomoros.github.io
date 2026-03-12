import { FaMapMarkerAlt, FaTrophy, FaCalendarAlt } from 'react-icons/fa';
import type { CSSProperties } from 'react';
import { achievements } from '../data/achievements';
import heroBackground from '../assets/b1.jpg';

import './Achievements.css';

export default function Achievements() {
  const sortedAchievements = [...achievements].sort((a, b) => b.year - a.year);

  return (
    <div className="achievements-page">
      <div className="achievements-container">
        <header className="achievements-header">
          <h1>Logros</h1>
          <p>
            Aquí iré añadiendo hitos personales, deportivos, académicos y tecnológicos para documentar avances reales con contexto.
          </p>
        </header>

        <section className="achievements-grid">
          {sortedAchievements.map((item) => (
            <article
              key={item.id}
              className="achievement-card"
              style={{ '--achievement-bg-image': `url(${item.hoverImage ?? heroBackground})` } as CSSProperties}
            >
              <div className="achievement-top-row">
                <span className="achievement-year"><FaCalendarAlt /> {item.year}</span>
                <span className="achievement-category">{item.category}</span>
              </div>

              <h2>{item.title}</h2>

              <div className="achievement-meta">
                <p>{item.organization}</p>
                <p><FaMapMarkerAlt /> {item.location}</p>
              </div>

              <p className="achievement-milestone"><FaTrophy /> {item.milestone}</p>
              <p className="achievement-summary">{item.summary}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
