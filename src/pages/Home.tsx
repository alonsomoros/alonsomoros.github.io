import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bgImage from '../assets/b1.jpg';
import cvEs from '../assets/cv_es.pdf';
import cvEn from '../assets/cv_en.pdf';
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
            <p className="subtitle">Desarrollador Full-Stack</p>
            
            <div className="cv-dropdown-container">
              <button className="btn cv-btn" onClick={() => setShowCvMenu(!showCvMenu)}>
                <FaDownload /> Descargar CV <FaChevronDown className={`chevron ${showCvMenu ? 'rotate' : ''}`} />
              </button>
              {showCvMenu && (
                <div className="cv-menu">
                  <a href={cvEs} download="Alonso_Moros_CV_ES.pdf" className="cv-menu-item" onClick={() => setShowCvMenu(false)}>
                    Español
                  </a>
                  <a href={cvEn} download="Alonso_Moros_CV_EN.pdf" className="cv-menu-item" onClick={() => setShowCvMenu(false)}>
                    English
                  </a>
                </div>
              )}
            </div>

            <div className="social-icons">
              <a href="mailto:alonsomorosvillalba@gmail.com" className="social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/alonsomoros" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/alonso-moros-villalba-301904275/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/aalonn_11_mv/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>

            <Link to="/projects" className="cta-button">
              Ver mis proyectos
            </Link>
          </header>
        </div>
      </div>
    </div>
  );
}
