import SkillTag from '../components/SkillTag';
import './About.css';

export default function About() {
  const hardSkills = {
    'Frontend': ['React', 'HTML', 'CSS', 'JavaScript'],
    'Backend': ['Java', 'Spring Boot', 'Python'],
    'BBDD': ['PostgreSQL', 'MySQL', 'MongoDB', 'H2'],
    'DevOps': ['Git', 'Docker', 'Azure', 'CI/CD', 'Metodologías Ágiles']
  };

  const softSkills = [
    {
      name: 'Resolución de Problemas',
      description: 'Considero ser capaz de analizar situaciones complejas y encontrar soluciones efectivas y creativas.'
    },
    {
      name: 'Trabajo en Equipo',
      description: 'He compartido experiencias con muchos compañeros y participado en muchos eventos de los cuáles era primordial esta "skill".'
    },
    {
      name: 'Liderazgo',
      description: 'Junto con el "Trabajo en Equipo", al ser entrenador y haber participado en algunas Hackatones, he demostrado liderazgo en mis proyectos '
    },
    {
      name: 'Comunicación',
      description: 'Me considero capaz de explicar conceptos técnicos de manera clara tanto a equipos técnicos como no técnicos.'
    },
    {
      name: 'Adaptabilidad',
      description: 'Creo que tengo una buena flexibilidad para aprender nuevas tecnologías y adaptarse rápidamente a cambios en proyectos.'
    },
    {
      name: 'Gestión del Tiempo',
      description: 'Tengo una buena organización efectiva de tareas y prioridades para cumplir con deadlines sin comprometer la calidad.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-intro">
          <h1>Sobre mí</h1>
          <div className="about-description">
            <p>
              Soy un desarrollador curioso y con hambre de conocimiento, actualmente tengo muchos proyectos en mente que iré actualizando en este portfolio cuando pueda.
              Mi objetivo es crear, investigar y trastear lo máximo que pueda con todo lo que encuentre para seguir aprendiendo y creciendo.
              Es por eso que he participado en Hackatones (véase mi LinkedIn) y proyectos de código abierto para aprender y mejorar mis habilidades.
            </p>
            <p>
              Me gusta el desarrollo de software, especialmente el backend y el análisis de datos. He tenido experiencias con manejo de varias bases de datos como PostgreSQL, MySQL y MongoDB.
              He trabajado con tecnologías como Java, Spring Boot y React. Y cosas más concretas como Liquibase o JPA. He trabajado con varias metodologías ágiles como Scrum y Kanban.
              Y por lo menos todos los días uso Bash y Git para gestionar mis proyectos.
            </p>
            <p>
              Otras de mis ambiciones es la arquitectura software, el análisis de proyectos y el análisis de código.
              He participado en varios proyectos y mejorado su cobertura con test unitarios y de integración, y en varios niveles de la arquitectura.
              También he usado tecnologías como JUnit, Mockito, Jacoco y SonarQube para mejorar la calidad del código.
            </p>
            <p>
              Por último, un poco sobre mí, me gusta el deporte, la música, las novelas scifi y la naturaleza.
              Tengo un perro llamado Obi y he sido entrenador de baloncesto durante 3 años, llegando a ser campeones de nuestra liga.
              Y toco el piano de forma autodidacta en mis ratos libres.
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
