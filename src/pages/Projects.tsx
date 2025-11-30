import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import SkillTag from '../components/SkillTag';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1>Mis Proyectos</h1>
        <p className="projects-intro">
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprendizaje.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id} 
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>Ver detalles →</span>
                </div>
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <SkillTag key={index} skill={tech} />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
