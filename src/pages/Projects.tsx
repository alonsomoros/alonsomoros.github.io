import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import SkillTag from '../components/SkillTag';
import './Projects.css';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map(project => project.category)));
    return ['Todos', ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'Todos' || project.category === activeCategory;
      const query = search.trim().toLowerCase();
      const matchesSearch = !query
        || project.title.toLowerCase().includes(query)
        || project.shortDescription.toLowerCase().includes(query)
        || project.technologies.some(tech => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h1>Mis Proyectos</h1>
        <p className="projects-intro">
          Aquí puedes ver algunos de los proyectos en los que he trabajado. Cada uno representa un desafío único y una oportunidad de aprendizaje.
        </p>

        <section className="projects-toolbar" aria-label="Filtros de proyectos">
          <div className="projects-toolbar-top">
            <span className="project-count">Mostrando {filteredProjects.length} proyecto(s)</span>
            <input
              type="search"
              placeholder="Buscar por nombre, descripción o tecnología"
              className="projects-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
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
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
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

        {filteredProjects.length === 0 && (
          <p className="projects-empty-state">
            No hay resultados con esos filtros. Prueba con otra categoría o texto de búsqueda.
          </p>
        )}
      </div>
    </div>
  );
}
