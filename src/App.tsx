import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Hackathons from './pages/Hackathons';
import Achievements from './pages/Achievements';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>

          <footer className="footer">
            <p>&copy; 2024 Alonso Moros. Todos los derechos reservados.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;