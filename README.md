# Dinalves Silva | João Pedro - Advogados Associados

Landing Page institucional de alta performance desenvolvida pela **PereiraLabs - Divisão de Tecnologia e IA** para o escritório **Dinalves Silva | João Pedro - Advogados**, sediado em Três Pontas/MG.

- **Desenvolvedor:** Andrew Pereira
- **GitHub Oficial:** [https://github.com/andreweua](https://github.com/andreweua)
- **Repositório:** [https://github.com/andreweua/dinalves-joaopedro-advogados](https://github.com/andreweua/dinalves-joaopedro-advogados)
- **Manual de Operação:** Consulte [PEREIRALABS_INSTRUCOES.md](./PEREIRALABS_INSTRUCOES.md)

---

## 🏛️ Sobre o Cliente e Titulares

O escritório une a autoridade de mais de cinco décadas de prática forense à precisão técnica e agilidade contemporânea:
- **Dr. Dinalves Silva** — **OAB/MG 30.961**: Mais de 50 anos de história ininterrupta na advocacia mineira, notório saber em Direito Cível e Trabalhista.
- **Dr. João Pedro da Silva Brisida** — **OAB/MG 238.897**: Bacharel em Direito pela FATEPS, pós-graduado em Direito Trabalhista pela UNICESUMAR, atuação combativa em Direito Trabalhista, Cível, Família, Acidentes e Previdenciário.

### Sede Física e Contatos Oficiais
- **Endereço**: Rua Dr. Joaquim de Brito, 42 - Apto 201 - Centro, Três Pontas/MG - CEP: 37185-122
- **Horário de Atendimento**: Segunda a Sexta, das 09h00 às 11h00 e das 12h30 às 17h30
- **Canal Principal (WhatsApp/Ligações)**: [(35) 99971-6002](https://wa.me/5535999716002)
- **Segunda Opção (Dr. João Pedro)**: [(35) 9875-2270](https://wa.me/553598752270)
- **Reputação no Google Maps**: Avaliação 4.9 ★★★★★ (30 avaliações)

---

## 💻 Tecnologias Empregadas

- **HTML5 Semântico**: Arquitetura acessível e otimizada para SEO local em Três Pontas e Sul de Minas.
- **Tailwind CSS**: Estilização com paleta nobre Navy (`#0f172a`, `#1b2a47`, `#090d1a`), Gold/Âmbar (`#dfba73`, `#c5a059`) e fundo suave em `slate-50`.
- **Google Fonts**: Tipografias clássicas e elegantes (*Cinzel*, *Playfair Display* e *Inter*).
- **Vanilla JavaScript**: Acordeão interativo de FAQ, menu mobile e redirecionamento de formulário para a API do WhatsApp.
- **Google Maps Embed**: Localização geográfica precisa no centro de Três Pontas.
- **Provimento nº 205/2021 do CFOAB**: Respeito irrestrito às normas de publicidade jurídica e sobriedade institucional da OAB.

---

## 📂 Estrutura de Arquivos

```
dinalves-joaopedro-advogados/
│
├── index.html                   # Landing Page oficial com design aprovado
├── changelog.html               # Changelog Interativo estilo Linear / Product Hunt (React + Shadcn UI)
├── README.md                    # Documentação institucional para exibição no GitHub
├── CHANGELOG.md                 # Histórico completo de versões em Markdown (v1.0.0)
├── PEREIRALABS_INSTRUCOES.md    # Manual operacional completo de execução e deploy
├── executar.bat                 # Script de execução rápida para Windows
│
├── changelog/                   # Projeto Componentizado React + Vite + Tailwind + Shadcn UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChangelogTimeline.tsx  # Componente Timeline Interativo
│   │   │   └── ui/                    # Primitivas de UI (Badge, Button, Accordion)
│   │   ├── data/changelogData.ts      # Dados mockados da v1.0.0
│   │   ├── types/changelog.ts         # Tipagem TypeScript
│   │   └── App.tsx                    # Aplicação de demonstração
│   ├── package.json
│   └── vite.config.ts
│
└── .agents/
    └── skills/
        └── pereiralabs/
            └── SKILL.md         # Skill do projeto com as diretrizes PereiraLabs
```

---

## 🚀 Como Executar Localmente

Você pode:
1. Dar um duplo clique no arquivo `executar.bat` (Windows).
2. Ou abrir diretamente o arquivo `index.html` em seu navegador.
3. Ou rodar um servidor HTTP local:
   ```bash
   python -m http.server 8000
   ```
   Acesse: `http://localhost:8000`

---

## 🏢 Créditos & Assinatura

**Desenvolvido por:**  
*PereiraLabs - Divisão de Tecnologia e IA* | *Louzada & Pereira - Soluções Digitais*  
Versão: [`v1.0.0`](./CHANGELOG.md)
