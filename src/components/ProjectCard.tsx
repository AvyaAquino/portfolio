// src/components/ProjectCard.tsx
import type { Project } from '../data/projects';
import './ProjectCard.css'; 
import { Github, ListChecks, Cpu, Brain, BookOpen } from 'lucide-react'; 

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card-container">
      
      <div className="card-image-wrapper">
        <div 
          className="card-image-blur-bg" 
          style={{ backgroundImage: `url(${project.image})` }} 
        />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="card-image" 
        />
      </div>

      <div className="card-details-content">
        <h2 className="card-title">{project.title}</h2>
        
        <div className="tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="detail-section">
          <h3><BookOpen size={20} /> Sobre o Projeto</h3>
          <p>{project.summary}</p>
        </div>

        <div className="detail-section">
          <h3><ListChecks size={20} /> Minhas Contribuições</h3>
          <ul className="detail-list">
            {project.personalContributions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        
        <div className="skills-container">
            <div className="detail-section skill-box">
            <h3><Cpu size={20} /> Hard Skills</h3>
            <div className="skill-tags-wrapper">
                {project.hardSkills.map((skill, index) => (
                <span key={index} className="skill-badge hard">{skill}</span>
                ))}
            </div>
            </div>

            <div className="detail-section skill-box">
            <h3><Brain size={20} /> Soft Skills</h3>
            <div className="skill-tags-wrapper">
                {project.softSkills.map((skill, index) => (
                <span key={index} className="skill-badge soft">{skill}</span>
                ))}
            </div>
            </div>
        </div>
        
        <div className="card-actions">
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <Github size={18} style={{marginRight: '8px'}}/> GitHub
          </a>
        </div>

      </div>
    </div>
  );
}