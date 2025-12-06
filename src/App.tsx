// src/App.tsx
import './index.css';
import { Sidebar } from './components/Sidebar';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';

function App() {
  return (
    <div className="app-layout">
      
      <Sidebar />
      
      <main className="main-content">
        <About />
        
        <ProjectsSection />
      </main>
      
    </div>
  );
}

export default App;