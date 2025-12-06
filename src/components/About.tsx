import './About.css';

export function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="greeting">Olá, eu sou Avya Alex👋</h2>
        
        <p className="description">
          Sou um <strong>Desenvolvedor Backend</strong> com sólida experiência na construção de <strong>APIs RESTful</strong> para sistemas de monitoramento e <strong>IoT</strong>.
        </p>

        <p className="description">
          Tenho domínio sobre o ciclo completo de desenvolvimento de uma aplicação servidora: desde a modelagem de dados complexos e relacionais até a implementação de serviços de notificação e geração de documentos.
        </p>

        <p className="description">
          Meu foco está na criação de códigos limpos, <strong>arquitetura em camadas</strong> (Controllers, Services, DTOs) e na garantia de qualidade através de <strong>testes automatizados</strong>.
        </p>
      </div>
    </section>
  );
}