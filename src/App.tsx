import './index.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>
          Hola, soy <span className="nombreDestacado">Alonso Moros</span>
        </h1>
        <p className="subtitle">Desarrollador Full-Stack</p>
      </header>

      <main className="main">
        <section className="about">
          <h2>Sobre mí</h2>
          <p>
            Soy un chaval con grandes ambiciones y una curiosidad innata que me motiva a estar aprendiendo todo el rato.<br />
            Así que si te llama la atención puedes ver un poco de lo que he hecho.
          </p>
        </section>

        <section className="skills">
          <h2>Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, TypeScript, HTML, CSS</p>
            </div>
            <div className="skill-card">
              <h3>Herramientas</h3>
              <p>Vite, Git, npm, VS Code</p>
            </div>
            <div className="skill-card">
              <h3>Diseño</h3>
              <p>UI/UX, Responsive Design</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Contacto</h2>
          <div className="contact-buttons">
            <a href="mailto:alonsomorosvillalba@gmail.com" className="btn">Email</a>
            <a href="https://github.com/alonsomoros" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/alonso-moros-villalba-301904275/" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Alonso Moros. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default App