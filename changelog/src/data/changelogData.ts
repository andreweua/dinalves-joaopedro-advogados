import { Release } from '../types/changelog';

export const changelogData: Release[] = [
  {
    version: 'v1.0.0',
    title: 'Lançamento Oficial (Initial Release)',
    date: '07 de Novembro de 2026',
    isLatest: true,
    summary: 'Apresentamos a primeira versão estável da plataforma institucional com arquitetura moderna, design nobre em alta performance e integração direta de atendimento.',
    bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    items: [
      {
        id: '1-1',
        type: 'novo',
        title: 'Arquitetura Base & Landing Page de Alta Performance',
        description: 'Construção da fundação completa com Tailwind CSS, estruturação modular em componentes leves e tempo de carregamento inferior a 1.2s no Google PageSpeed.',
        previewImage: {
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
          alt: 'Interface responsiva e métricas',
          caption: 'Visualização da interface adaptável com nota 4.9 no Google Maps e Top Bar integrada'
        },
        metrics: [
          { label: 'Tempo de Carregamento', value: '0.8s' },
          { label: 'SEO Score', value: '98/100' }
        ]
      },
      {
        id: '1-2',
        type: 'novo',
        title: 'Roteamento Inteligente de WhatsApp Multicanal',
        description: 'Canal primário centralizado no número oficial (35) 99971-6002 e rota direta de atendimento para o Dr. João Pedro (35) 9875-2270 com formatação automática de mensagens e áreas de interesse.',
      },
      {
        id: '1-3',
        type: 'novo',
        title: '5 Cards Didáticos de Especialidades Forenses',
        description: 'Mapeamento visual e acessível para Direito Trabalhista, Direito Cível, Família & Sucessões, Acidentes de Trânsito e Previdenciário/INSS com fluxos de dúvidas instantâneas.',
        previewImage: {
          src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop',
          alt: 'Seções didáticas do Direito',
          caption: 'Cards com linguagem simplificada para fácil compreensão do cidadão'
        }
      },
      {
        id: '1-4',
        type: 'melhoria',
        title: 'Interface Responsiva & Glassmorphism Sofisticado',
        description: 'Paleta cromática navy e gold/âmbar com suporte dinâmico a dispositivos móveis, transições fluidas e menu retrátil otimizado para navegação táctil.',
      },
      {
        id: '1-5',
        type: 'melhoria',
        title: 'Conformidade Ética com o Provimento nº 205/2021 da OAB',
        description: 'Adequação rigorosa de toda a cópia textual para caráter estritamente informativo, eliminando qualquer aspecto mercantilista e resguardando o sigilo profissional.',
      },
      {
        id: '1-6',
        type: 'correcao',
        title: 'Padronização Nominal e Inscrição OAB',
        description: 'Ajuste ortográfico da titularidade do Dr. João Pedro da Silva Brisida e retificação de sua inscrição profissional para OAB/MG 238.897 em todos os pontos da aplicação.',
      }
    ]
  },
  {
    version: 'v0.9.5-beta',
    title: 'Homologação Pré-Lançamento & QA',
    date: '02 de Novembro de 2026',
    isLatest: false,
    summary: 'Sessão de testes de carga, validação de campos do formulário e responsividade em múltiplos navegadores.',
    items: [
      {
        id: '095-1',
        type: 'melhoria',
        title: 'Otimização de Assets e Fontes Google Web',
        description: 'Pré-conexão DNS aos servidores do Google Fonts para Cinzel, Playfair Display e Inter, reduzindo CLS a zero.',
      },
      {
        id: '095-2',
        type: 'correcao',
        title: 'Correção de Visualização do Iframe do Google Maps',
        description: 'Resolução de estouro de largura em telas compactas (iPhone SE e telas menores que 360px).',
      },
      {
        id: '095-3',
        type: 'correcao',
        title: 'Tratamento de Caracteres Especiais na URL do WhatsApp',
        description: 'Codificação segura com encodeURIComponent para evitar quebras em mensagens com acentuação ou quebras de linha.',
      }
    ]
  }
];
