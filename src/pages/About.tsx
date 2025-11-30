import SkillTag from '../components/SkillTag';
import './About.css';

export default function About() {
  const hardSkills = {
    'Frontend': ['React', 'HTML', 'CSS', 'TypeScript', 'JavaScript'],
    'Backend': ['Java', 'Spring Boot', 'Python', 'Node.js', 'Express'],
    'BBDD': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    'DevOps': ['Git', 'Docker', 'Azure', 'CI/CD', 'Metodologías Ágiles']
  };

  const softSkills = [
    {
      name: 'Resolución de Problemas',
      description: 'Capacidad para analizar situaciones complejas y encontrar soluciones efectivas y creativas.'
    },
    {
      name: 'Trabajo en Equipo',
      description: 'Colaboración efectiva con equipos multidisciplinarios, compartiendo conocimientos y aprendiendo de otros.'
    },
    {
      name: 'Comunicación',
      description: 'Habilidad para explicar conceptos técnicos de manera clara tanto a equipos técnicos como no técnicos.'
    },
    {
      name: 'Adaptabilidad',
      description: 'Flexibilidad para aprender nuevas tecnologías y adaptarse rápidamente a cambios en proyectos.'
    },
    {
      name: 'Gestión del Tiempo',
      description: 'Organización efectiva de tareas y prioridades para cumplir con deadlines sin comprometer la calidad.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-intro">
          <h1>Sobre mí</h1>
          <div className="about-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
              perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
              ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi 
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel 
              illum qui dolorem eum fugiat quo voluptas nulla pariatur.
            </p>
          </div>
        </section>

        <section className="soft-skills">
          <h2>Soft Skills</h2>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="hard-skills">
          <h2>Hard Skills</h2>
          <div className="hard-skills-categories">
            {Object.entries(hardSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h3>{category}</h3>
                <div className="skill-tags">
                  {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
