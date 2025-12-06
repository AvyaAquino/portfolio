export interface Project {
  id: number;
  title: string;
  description: string;
  summary: string;
  image: string;
  technologies: string[];
  repoLink: string;
  liveLink?: string;
  personalContributions: string[];
  hardSkills: string[];
  softSkills: string[]; 
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Farming - Automação Agrícola  ",
    description: "Solução web para automação de coleta e tratamento de dados agrícolas.",
    summary: "Projeto do API do primeiro semestre da FATEC em parceria com o grupo I9 do curso de Manufatura Avançada da Fatec SJC. O objetivo foi automatizar a coleta e o tratamento de dados, substituindo processos manuais por uma solução web eficiente, com dashboards e visualização dos dados em tempo real. A aplicação visa aumentar a eficiência da leitura e armazenamento de dados e oferecer uma interface acessível mesmo para usuários sem conhecimento técnico.",
    image: "/smart_farm.gif",
    technologies: ["Flask", "HTML", "CSS", "JavaScript", "MySQL"],
    repoLink: "https://github.com/BugBustersFatecSJC/Smart-farm", 
    personalContributions: [
      "Definição de requisitos e arquitetura da solução.",
      "Desenvolvimento Full Stack (Backend com Flask e Frontend).",
      "Desenvolvimento do sistema de conversão de Excel para MySQL.",
      "Criação de funções de gerenciamento de dados (ex: deletar dias).",
      "Atuação na resolução de conflitos de código no projeto."
    ],
    hardSkills: [
      "Desenvolvimento de APIs REST",
      "Manipulação de Dados",
      "Visualização de Dados",
      "Desenvolvimento Web (Frontend e Backend)",
      "Estruturação de banco de dados"
    ],
    softSkills: [
      "Gestão de Tempo e Organização",
      "Autonomia",
      "Adaptabilidade",
      "Resolução de Conflitos"
    ]
  },
 {
    id: 2,
    title: "Inv.Sort - Sistema de Controle de Estoque",
    description: "Sistema de gestão inteligente de inventário com controle de entradas, saídas e dashboards.",
    summary: "Trabalhei no segundo projeto API da FATEC SJC tendo como cliente interno um professor da Fatec SJC. O objetivo foi desenvolver um Sistema de Controle de Estoque focado em permitir uma gestão rápida e inteligente de seu inventário, análise de tendências, gerenciamento e cadastro de categorias e produtos, controle de entrada e saída. A aplicação visa facilitar o controle de estoque em tempo real, aumentando a eficiência do trabalho e reduzindo erros.",
    image: "/inv.sort.png",
    technologies: ["Express", "React", "Prisma", "MySQL", "Tailwind", "AWS"],
    repoLink: "https://github.com/BugBustersFatecSJC/inv.sort   ",
    personalContributions: [
      "Atuação ativa no desenvolvimento Full Stack (Backend e Frontend) e idealização do projeto.",
      "Participação na definição de User Stories.",
      "Criação do CRUD completo de produtos, categorias, unidades e fornecedores.",
      "Resolução de erros complexos de integração Backend e Banco de Dados.",
      "Criação de Middlewares para validação e segurança.",
      "Implementação da função de edição de imagem em    toda a aplicação."
    ],
    hardSkills: [
      "Desenvolvimento Web (Frontend e Backend)",
      "Versionamento de Código",
      "Controle de Acesso",
      "Estruturação e Ajuste do Banco de Dados"
    ],
    softSkills: [
      "Comunicação Eficaz",
      "Entrega de Resultados",
      "Proatividade",
      "Gestão de Tempo"
    ]
  },
  {
    id: 3,
    title: "Checkpoint - Sistema de Ponto Eletrônico",
    description: "Sistema completo de gestão de ponto, horas extras e notificações em tempo real.",
    summary: "Trabalhei no terceiro projeto API da FATEC SJC com o Parceiro Acadêmico Necto. O objetivo do projeto foi desenvolver um Sistema de Controle de Ponto Eletrônico para gerenciar colaboradores, férias, folgas e registro de ponto. O sistema permite enviar solicitações que notificam os gestores e oferece visualização de histórico, visando aumentar a eficiência por meio de uma interface simples e relatórios claros.",
    image: "/checkpoint.png",
    technologies: ["Vite", "Spring Boot", "React", "MongoDB", "MySQL", "AWS", "Tailwind"],
    repoLink: "https://github.com/FR0M-ZER0/checkpoint",
    personalContributions: [
      "Implementação completa do registro de marcação de ponto (Backend).",
      "Desenvolvimento de sistema dinâmico de checagem de saldo de horas extras.",
      "Estruturação e desenvolvimento do banco de dados não relacional (MongoDB).",
      "Implementação do sistema de notificações de horas extras em tempo real.",
      "Liderança técnica: auxílio na estrutura do repositório e boas práticas.",
      "Correção de erros críticos e organização de arquivos do projeto."
    ],
    hardSkills: [
      "Banco de Dados MongoDB e MySQL",
      "Desenvolvimento Backend (Java/Spring Boot)",
      "Comunicação em Tempo Real (Rotas/Notificações)",
      "Componentização e Boas Práticas",
      "Otimização de Desempenho"
    ],
    softSkills: [
      "Autonomia e Proatividade",
      "Liderança e Mentoria Técnica",
      "Trabalho em Equipe Colaborativo",
      "Comunicação Clara",
      "Resolução de Problemas"
    ]
  },
  {
    id: 4,
    title: "Nimbus - Estações Climáticas (Tecsus)",
    description: "Sistema de gerenciamento de estações meteorológicas com alertas e relatórios em tempo real.",
    summary: "Este projeto foi realizado para a Fatec junto à empresa Tecsus para simular um ambiente real de desenvolvimento utilizando a metodologia ágil. O objetivo era desenvolver um sistema para gerenciamento de estações meteorológicas (IoT/ESP32), gerenciamento de alertas com base em sensores e acompanhamento de eventos climáticos em tempo real.",
    image: "/nimbus.png",
    technologies: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Vitest"],
    repoLink: "https://github.com/FR0M-ZER0/Nimbus",
    personalContributions: [
      "Gestão de Estações (Core): CRUD completo com validações rigorosas e integridade referencial.",
      "Sistema de Alertas: Lógica de triggers e implementação do serviço de notificação por e-mail.",
      "Relatórios: Módulo de geração de históricos com filtros avançados e exportação em PDF.",
      "Engenharia de Dados: Modelagem PostgreSQL com Prisma, migrations e seeds.",
      "Qualidade: Suíte de testes unitários com Vitest e documentação da API com Swagger."
    ],
    hardSkills: [
      "Node.js & Express (APIs Escaláveis)",
      "PostgreSQL & Prisma (ORM)",
      "Testes Unitários (Vitest)",
      "Validação (Zod) e Segurança (Bcrypt)",
      "Documentação (Swagger)"
    ],
    softSkills: [
      "Visão Sistêmica",
      "Resolução de Problemas",
      "Autonomia Técnica",
      "Trabalho em Equipe Colaborativo",
      "Comunicação Clara"
    ]
  }
];