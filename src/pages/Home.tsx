import { FaGithub, FaLinkedin, FaDownload, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgImage from '../assets/b1.jpg';
import cvEs from '../assets/CV_Alonso_Moros_Español.pdf';
import cvEn from '../assets/CV_Alonso_Moros_English.pdf';
import './Home.css';

export default function Home() {
  const [showCvMenu, setShowCvMenu] = useState(false);

  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay">
          <header className="header">
            <h1>
              Hola, soy <span className="nombreDestacado">Alonso Moros</span>
            </h1>
            <p className="subtitle">Ingeniero de Software y Desarrollador Full-Stack</p>

            <div className="cv-dropdown-container">
              <button className="btn cv-btn" onClick={() => setShowCvMenu(!showCvMenu)}>
                <FaDownload /> Descargar CV <FaChevronDown className={`chevron ${showCvMenu ? 'rotate' : ''}`} />
              </button>
              {showCvMenu && (
                <div className="cv-menu">
                  <a href={cvEs} download="CV_Alonso_Moros_Español.pdf" className="cv-menu-item" onClick={() => setShowCvMenu(false)}>
                    Español
                  </a>
                  <a href={cvEn} download="CV_Alonso_Moros_English.pdf" className="cv-menu-item" onClick={() => setShowCvMenu(false)}>
                    English
                  </a>
                </div>
              )}
            </div>

            <div className="social-icons">
              <a href="https://github.com/alonsomoros" className="social-icon github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/alonso-moros-villalba-301904275/" className="social-icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/34625375615" className="social-icon whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>

            <div className="contact">
              <a href="mailto:alonsomorosvillalba@gmail.com">alonsomorosvillalba@gmail.com</a>
              <a href="tel:+34625375615">+34 625 375 615</a>
            </div>

            <div className="cta-buttons">
              <Link to="/about" className="cta-button cta-primary">
                Sobre mí
              </Link>
              <Link to="/projects" className="cta-button cta-secondary">
                Ver Proyectos
              </Link>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}
