# ⚔️ Grand Chase Classic Wiki

Uma aplicação web moderna, interativa e responsiva criada para ser o catálogo definitivo de informações sobre o universo de **Grand Chase Classic**. Este projeto reúne dados sobre personagens, classes, mapas, monstros e eventos em uma interface inspirada na identidade visual do próprio jogo.

Desenvolvido como projeto de portfólio com foco em boas práticas de componentização, roteamento e consumo de dados.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as melhores ferramentas do ecossistema Front-End atual:

- **[React](https://react.dev/)** - Biblioteca principal para construção da interface.
- **[Vite](https://vitejs.dev/)** - Ferramenta de build extremamente rápida.
- **[Tailwind CSS (v3)](https://tailwindcss.com/)** - Framework CSS utilitário para estilização ágil e responsiva, com temas customizados.
- **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas para navegação fluida em Single Page Application (SPA).
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones leves e customizáveis.

## 📂 Arquitetura de Dados

Em vez de depender de um banco de dados externo neste primeiro momento, a aplicação simula o consumo de uma API utilizando **arquivos JSON estáticos**. Os dados são separados por domínios e interligados por IDs (simulando chaves estrangeiras), garantindo escalabilidade e fácil manutenção:

- `characters.json`: Informações completas dos heróis e suas classes.
- `continents.json`: Divisão global das regiões de Ernas.
- `maps.json`: Missões, níveis recomendados e chefes vinculados aos continentes.
- `events.json`: Dungeons temporárias e desafios épicos.

## 🛠️ Como executar o projeto localmente

Se você deseja clonar o repositório e rodar a aplicação na sua máquina, siga os passos abaixo.

### Pré-requisitos
- Ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada).
- Ter o gerenciador de pacotes `npm` (que já vem junto com a instalação do Node).

### Passo a passo

1. **Clone o repositório:**
   Abra o seu terminal e execute o comando abaixo para clonar o projeto na sua máquina:
   ```bash
   git clone [https://github.com/SEU-USUARIO/myChaser---WIKI-.git](https://github.com/Vinicius-Brandao21/myChaser---WIKI-.git)
   
   cd myChaser---WIKI-

   npm install

   npm run dev

   ```
2. **Abra o link:**
   O terminal exibirá um link local. Segure Ctrl (ou Cmd no Mac) e clique no link, ou abra seu navegador e acesse: