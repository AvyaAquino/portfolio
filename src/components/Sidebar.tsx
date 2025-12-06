// src/components/Sidebar.tsx
import './Sidebar.css';
import { Github, Linkedin, Mail } from 'lucide-react'; 

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-area">
        <div className="profile-photo-wrapper">
          <img src="/profile.jpg" alt="Avya Alex" className="profile-photo" />
        </div>
        
        <h1 className="profile-name">Avya Alex</h1>
        <p className="profile-title">Desenvolvedor Full Stack</p>
      </div>

      <div className="social-links-container">
        <p className="social-label">Contato</p>
        <div className="social-icons">
          <a href="https://github.com/AvyaAquino" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-btn">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/avya-candido-598b5228a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-btn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:avyaaquino@gmail.com" aria-label="Email" className="social-btn">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
    </aside>
  );
}