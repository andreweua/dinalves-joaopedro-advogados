# Dinalves Silva | João Pedro - Advogados Associados

Plataforma web institucional e interativa desenvolvida para o escritório **Dinalves Silva | João Pedro - Advogados**, sediado no Centro de Três Pontas/MG.

O projeto une a tradição de mais de 5 décadas de prática forense à precisão jurídica contemporânea, oferecendo uma experiência moderna, acessível e em total conformidade com o Código de Ética da OAB.

---

## 🏛️ Sobre o Escritório e Titulares

- **Dr. Dinalves Silva** — **OAB/MG 30.961**  
  *Advogado Titular Fundador:* Mais de 50 anos de história ininterrupta e notório saber forense em Direito Cível e Trabalhista.

- **Dr. João Pedro da Silva Brisida** — **OAB/MG 238.897**  
  *Advogado Titular Associado:* Bacharel em Direito pela FATEPS, pós-graduado em Direito Trabalhista pela UNICESUMAR. Atuação estratégica e dinâmica em Direito Trabalhista, Cível, Família & Sucessões, Acidentes de Trânsito e Previdenciário (INSS).

### Sede Física & Contatos Oficiais
- **Endereço:** Rua Dr. Joaquim de Brito, 42 - Apto 201 - Centro, Três Pontas - MG, CEP: 37185-122
- **Horário de Atendimento:** Segunda a Sexta, das 09h00 às 11h00 e das 12h30 às 17h30
- **Canal Principal (WhatsApp):** [(35) 99971-6002](https://wa.me/5535999716002)
- **Linha Direta Dr. João Pedro:** [(35) 9875-2270](https://wa.me/553598752270)
- **Avaliação Google Maps:** 4.9 ★★★★★ (30 avaliações)

---

## 📂 Estrutura do Projeto

```text
dinalves-joaopedro-advogados/
│
├── index.html         # Landing Page institucional responsiva (Tailwind CSS)
├── changelog.html     # Changelog Interativo estilo Linear / Product Hunt (React + Shadcn UI)
├── CHANGELOG.md       # Histórico de lançamentos e versões no padrão Keep a Changelog
├── README.md          # Apresentação do projeto e documentação
│
└── changelog/         # Código-fonte React + Vite + Tailwind + Shadcn UI do componente
    ├── src/
    │   ├── components/
    │   │   ├── ChangelogTimeline.tsx  # Timeline vertical interativa
    │   │   └── ui/                    # Primitivas de UI (Badge, Button)
    │   ├── data/changelogData.ts      # Dados das versões e novidades
    │   ├── types/changelog.ts         # Tipagem TypeScript
    │   └── App.tsx                    # Aplicação de demonstração
    ├── package.json
    └── vite.config.ts
```

---

## 💻 Recursos e Tecnologias

- **Landing Page (`index.html`):**
  - Paleta nobre Navy profundo (`#0f172a`, `#1b2a47`) e Ouro/Âmbar (`#dfba73`, `#c5a059`).
  - Tipografias clássicas *Cinzel*, *Playfair Display* e *Inter*.
  - 5 seções didáticas de especialidades do Direito.
  - Roteamento inteligente de WhatsApp com mensagem formatada automaticamente.
  - Mapa interativo do Google Maps embutido no Centro de Três Pontas.
  - FAQ com acordeão em JavaScript e navegação mobile responsiva.

- **Changelog Interativo (`changelog.html`):**
  - Timeline vertical moderna no estilo Linear / Product Hunt.
  - Filtros interativos para alternar entre *Novidades*, *Melhorias* e *Correções*.
  - Badges coloridas (verde Emerald para novos recursos, azul para melhorias e vermelho para correções).
  - Cards com capturas de tela, legendas técnicas e efeito de colapso/expansão.

- **Conformidade Ética OAB:**
  - Estrita observância ao **Provimento nº 205/2021 do Conselho Federal da OAB** (caráter puramente informativo e sem mercantilização).

---

## 🚀 Como Executar Localmente

### 1. No Navegador (Imediato)
Abra diretamente o arquivo `index.html` ou `changelog.html` em qualquer navegador.

### 2. Com Servidor Local (Opcional)
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```
Acesse: `http://localhost:8000`

---

## 🌐 Hospedagem & Domínio Próprio

- **Endereço Atual no GitHub Pages:**  
  👉 [https://andreweua.github.io/dinalves-joaopedro-advogados/](https://andreweua.github.io/dinalves-joaopedro-advogados/)
- **Changelog Interativo:**  
  👉 [https://andreweua.github.io/dinalves-joaopedro-advogados/changelog.html](https://andreweua.github.io/dinalves-joaopedro-advogados/changelog.html)
- **Instruções de Apontamento DNS:**  
  Consulte o guia passo a passo em [`CONFIGURACAO_DOMINIO.md`](./CONFIGURACAO_DOMINIO.md) para configurar as entradas `A` e `CNAME` no Registro.br, Hostinger ou provedor de sua preferência.

---

## 🏢 Créditos & Desenvolvimento

**Desenvolvido por:**  
*PereiraLabs - Divisão de Tecnologia e IA* | *Louzada & Pereira - Soluções Digitais*  
Versão de Lançamento: [`v1.0.0`](./changelog.html)
