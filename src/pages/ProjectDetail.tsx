import { useParams, Link, Navigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaBook } from 'react-icons/fa';
import { projects } from '../data/projects';
import SkillTag from '../components/SkillTag';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="back-button">
          <FaArrowLeft /> Volver a proyectos
        </Link>

        <div className="project-hero">
          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p className="project-hero-description">{project.shortDescription}</p>
            <div className="project-hero-technologies">
              {project.technologies.map((tech, index) => (
                <SkillTag key={index} skill={tech} />
              ))}
            </div>
            <div className="project-links">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
                  <FaExternalLinkAlt /> Ver Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link github">
                  <FaGithub /> Ver Código
                </a>
              )}
              {project.docsUrl && (
                <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="project-link docs">
                  <FaBook /> Documentación
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-sections">
          <section className="project-section">
            <h2>El Problema y la Solución</h2>
            <div className="section-content">
              <div className="subsection">
                <h3>Problema</h3>
                <p>{project.problem}</p>
              </div>
              <div className="subsection">
                <h3>Solución</h3>
                <p>{project.solution}</p>
              </div>
            </div>
          </section>

          <section className="project-section">
            <h2>Mi Rol</h2>
            <p>{project.role}</p>
          </section>

          <section className="project-section">
            <h2>Logros Técnicos</h2>
            <ul className="achievements-list">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
