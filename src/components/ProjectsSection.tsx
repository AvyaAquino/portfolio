import { useState } from 'react';
import { projects } from '../data/projects.ts';
import { ProjectCard } from './ProjectCard.tsx'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import './ProjectsSection.css';

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="projects-section">
      <h2 className="section-title">Meus <span className="highlight">Projetos</span></h2>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={prevProject} aria-label="Projeto anterior">
          <ChevronLeft size={32} />
        </button>

        <div className="card-wrapper">
            <ProjectCard project={projects[currentIndex]} />
        </div>

        <button className="nav-button next" onClick={nextProject} aria-label="Próximo projeto">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="indicators">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}