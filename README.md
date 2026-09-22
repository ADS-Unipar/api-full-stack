# App Full Stack

Aplicacao full stack para gerenciamento de tarefas, organizada em dois projetos:

- `backend`: API REST feita com Node.js, Express, Sequelize e SQLite.
- `frontend`: interface web feita com React, Vite, Tailwind CSS e Axios.

## Pre-requisitos

- Node.js 18 ou superior
- npm

## Como executar

### Backend

Em um terminal:

```bash
cd backend
npm install
npm start
```

A API sera executada em `http://localhost:3000` por padrao. A porta pode ser alterada pela variavel `PORT`. O banco SQLite sera criado em `database.sqlite`; para alterar o caminho, use a variavel `DB`.

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

O Vite exibira no terminal o endereco local da aplicacao, normalmente `http://localhost:5173`.

## Funcionalidades

- Criar tarefas com titulo e descricao.
- Listar tarefas cadastradas.
- Pesquisar tarefas.
- Alterar o status de uma tarefa.
- Excluir tarefas.

## API de tarefas

Com o backend em execucao, a rota base e `http://localhost:3000/tasks`:

| Metodo | Rota | Descricao |
| --- | --- | --- |
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/:id` | Busca uma tarefa por ID |
| `POST` | `/tasks` | Cria uma tarefa |
| `PUT` | `/tasks/:id` | Atualiza uma tarefa |
| `PATCH` | `/tasks/:id/status` | Altera o status da tarefa |
| `DELETE` | `/tasks/:id` | Remove uma tarefa |

## Scripts

### Backend

- `npm start`: inicia a API com Nodemon.

### Frontend

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versao de producao.
- `npm run lint`: executa o ESLint.
- `npm run preview`: visualiza a build de producao localmente.

## Estrutura

```text
.
├── backend/
│   ├── config/          # Configuracao do banco
│   ├── middlewares/     # Middlewares da API
│   └── tasks/           # Controller, modelo, rotas e validacao
└── frontend/
    └── src/
        ├── components/  # Componentes da interface
        ├── hooks/       # Hooks de tarefas
        ├── pages/       # Paginas
        └── utils/       # Cliente da API
```