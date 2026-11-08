# Guia Operacional Completo - PereiraLabs

**Divisão de Tecnologia e IA | Louzada & Pereira - Soluções Digitais**  
**Desenvolvedor:** Andrew Pereira  
**GitHub Oficial:** [https://github.com/andreweua](https://github.com/andreweua)  
**Repositório do Projeto:** [https://github.com/andreweua/dinalves-joaopedro-advogados](https://github.com/andreweua/dinalves-joaopedro-advogados)

---

## 📌 Sumário
1. [Visão Geral do Projeto](#1-visão-geral-do-projeto)
2. [Como Rodar o Projeto Localmente](#2-como-rodar-o-projeto-localmente)
3. [Como Subir para o GitHub (Passo a Passo)](#3-como-subir-para-o-github-passo-a-passo)
4. [Como Publicar na Internet Grátis (GitHub Pages)](#4-como-publicar-na-internet-grátis-github-pages)
5. [Skills e Padrões da PereiraLabs](#5-skills-e-padrões-da-pereiralabs)
6. [Estrutura de Arquivos](#6-estrutura-de-arquivos)

---

## 1. Visão Geral do Projeto

Landing page institucional de alta conversão e sofisticação jurídica para o escritório **Dinalves Silva | João Pedro - Advogados**, sediado em Três Pontas/MG.

### Dados Oficiais do Cliente:
- **Titulares:**
  - **Dr. Dinalves Silva** — OAB/MG 30.961 (Mais de 5 décadas de tradição)
  - **Dr. João Pedro da Silva Brisida** — OAB/MG 238.897 (Bacharel FATEPS / Pós-graduado UNICESUMAR)
- **Localização:** Rua Dr. Joaquim de Brito, 42 - Apto 201 - Centro, Três Pontas/MG
- **Horário de Atendimento:** Segunda a Sexta, 09:00 às 11:00 e 12:30 às 17:30
- **Canal Principal (WhatsApp):** `(35) 99971-6002`
- **Canal Secundário (Dr. João Pedro):** `(35) 9875-2270`
- **Avaliação Google Maps:** 4.9 ★★★★★ (30 avaliações)

---

## 2. Como Rodar o Projeto Localmente

### Opção 1: Abrir Diretamente no Navegador (Mais Rápido)
Dê um duplo clique no arquivo [`index.html`](./index.html) ou execute pelo terminal:
```powershell
Start-Process "index.html"
```

### Opção 2: Servidor Local com Python (Recomendado)
Se tiver Python instalado:
```bash
python -m http.server 8000
```
Depois abra seu navegador em: `http://localhost:8000`

### Opção 3: Servidor Local com Node.js / npx
```bash
npx serve .
```

---

## 3. Como Subir para o GitHub (Passo a Passo)

O repositório remoto já está configurado no projeto apontando para:
`https://github.com/andreweua/dinalves-joaopedro-advogados.git`

Para enviar o código para a sua conta:

### Passo 1: Criar o repositório no GitHub
1. Abra no navegador: **[https://github.com/new](https://github.com/new)**
2. Em **Repository name**, digite exatamente:
   ```text
   dinalves-joaopedro-advogados
   ```
3. Escolha **Public** ou **Private**.
4. **Não marque** as opções de README, .gitignore ou License.
5. Clique em **Create repository**.

### Passo 2: Enviar os arquivos pelo Terminal
Abra o PowerShell nesta pasta e execute:
```bash
git push -u origin main
```
*(Se for solicitada autenticação, faça o login no navegador ou use seu Personal Access Token do GitHub).*

---

## 4. Como Publicar na Internet Grátis (GitHub Pages)

Depois de ter dado o `git push`, seu site pode ficar no ar 24h por dia gratuitamente:

1. Acesse: `https://github.com/andreweua/dinalves-joaopedro-advogados/settings/pages`
2. Na seção **Build and deployment** > **Branch**:
   - Selecione a branch `main`.
   - Selecione a pasta `/ (root)`.
3. Clique em **Save**.
4. Em 1 a 2 minutos, o seu site estará publicado mundialmente no endereço:
   👉 **`https://andreweua.github.io/dinalves-joaopedro-advogados/`**

---

## 5. Skills e Padrões da PereiraLabs

A skill **`pereiralabs`** foi cadastrada globalmente no seu sistema (`~/.gemini/config/skills/pereiralabs/SKILL.md`) e no projeto (`.agents/skills/pereiralabs/SKILL.md`), garantindo que a IA sempre reconheça:

1. **Conta GitHub do Desenvolvedor:** [https://github.com/andreweua](https://github.com/andreweua)
2. **Padrão de Nomenclatura:** `https://github.com/andreweua/<nome-do-projeto>.git`
3. **Assinatura Obrigatória de Rodapé:**
   ```html
   Desenvolvido por: PereiraLabs - Divisão de Tecnologia e IA | Louzada & Pereira - Soluções Digitais. v1.0.0
   ```
4. **Código de Ética OAB:** Todo projeto advocatício deve atender ao Provimento nº 205/2021 do CFOAB (sobriedade, caráter informativo, sem mercantilização).

---

## 6. Estrutura de Arquivos

```
dinalves-joaopedro-advogados/
│
├── index.html                   # Landing Page completa, responsiva com Tailwind CSS
├── README.md                    # Documentação institucional para exibição no GitHub
├── CHANGELOG.md                 # Histórico completo de versões (v1.0.0)
├── PEREIRALABS_INSTRUCOES.md    # Este manual operacional
├── executar.bat                 # Script de execução rápida em 2 cliques
└── .agents/
    └── skills/
        └── pereiralabs/
            └── SKILL.md         # Skill do projeto com as diretrizes PereiraLabs
```
