# API - Pesquisa Nacional Indígena

API REST desenvolvida em Node.js para gerenciamento de pesquisas nacionais, com foco em entrevistas indígenas e gerais. Sistema offline-first que permite coleta de dados mesmo sem conexão com internet.

## 🚀 Stack Tecnológica

- **Node.js** com **TypeScript**
- **Express** - Framework web
- **TypeORM** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **JWT** - Autenticação
- **AWS SDK** - Armazenamento de arquivos (S3)
- **Nodemailer** - Envio de emails
- **Celebrate** - Validação de dados
- **Swagger** - Documentação da API

## 📁 Estrutura do Projeto

```
src/
├── modules/              # Módulos de domínio
│   ├── users/           # Usuários e autenticação
│   ├── projects/        # Projetos de pesquisa
│   ├── persons/         # Pessoas entrevistadas
│   ├── households/      # Domicílios
│   ├── interviews/      # Entrevistas gerais
│   ├── discriminations/ # Discriminação, violência e saúde mental
│   └── indigenous/      # Entrevistas indígenas (v1 e v2)
│       ├── v1/          # Versão 1 da API
│       └── v2/          # Versão 2 da API (atual)
├── shared/              # Código compartilhado
│   ├── container/       # Injeção de dependências (TSyringe)
│   ├── errors/          # Tratamento de erros
│   ├── infra/           # Infraestrutura
│   │   ├── http/        # Rotas e servidor
│   │   └── typeorm/     # Configuração do TypeORM
│   └── utils/           # Utilitários
└── config/              # Configurações (auth, mail, upload)
```

## 🔧 Pré-requisitos

- Node.js (versão 12 ou superior)
- Yarn ou npm
- PostgreSQL (local ou Docker)
- Docker (opcional, para rodar PostgreSQL em container)

## ⚙️ Configuração do Ambiente

### 1. Instalar dependências

```bash
yarn install
```

### 2. Configurar banco de dados

#### Opção A: Docker (Recomendado)

```bash
docker run --name postgres-health -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
docker start postgres-health
```

#### Opção B: PostgreSQL local

Certifique-se de que o PostgreSQL está instalado e rodando na porta 5432.

### 3. Configurar TypeORM

Copie o arquivo de exemplo e ajuste as credenciais:

```bash
cp ormconfig.example.json ormconfig.json
```

Edite `ormconfig.json` com suas credenciais do banco:

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "sua-senha",
  "database": "nome-do-banco",
  "entities": [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./dist/shared/infra/typeorm/migrations"
  }
}
```

### 4. Criar arquivo .env

Crie um arquivo `.env` na raiz do projeto:

```env
APP_SECRET="sua-chave-secreta-para-jwt"
APP_WEB_URL=http://localhost:3000
APP_API_URL=http://localhost:3333

# Email (desenvolvimento)
MAIL_DRIVER=ethereal

# AWS (produção)
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

# Storage (desenvolvimento: disk | produção: s3)
STORAGE_DRIVER=disk
```

### 5. Executar migrações

```bash
yarn typeorm migration:run
```

## 🏃 Executando o Projeto

### Desenvolvimento

```bash
yarn dev:server
```

O servidor estará disponível em `http://localhost:3333`

### Produção

```bash
yarn build
yarn start
```

## 📚 Documentação da API

A documentação Swagger está disponível em:

```
http://localhost:3333/docs
```

## 🔐 Autenticação

A API utiliza JWT para autenticação. Todas as rotas (exceto login e recuperação de senha) requerem um token no header:

```
Authorization: Bearer <token>
```

## 📋 Principais Endpoints

### Autenticação
- `POST /sessions` - Login
- `POST /password/forgot` - Solicitar recuperação de senha
- `POST /password/reset` - Redefinir senha

### Entrevistas Indígenas (v2)
- `POST /indigenous-interviews/v2` - Criar entrevista básica
- `POST /indigenous-interviews/v2/demography` - Dados demográficos
- `POST /indigenous-interviews/v2/residence` - Dados de residência
- `POST /indigenous-interviews/v2/health-desease` - Saúde e doença
- `POST /indigenous-interviews/v2/nutrition` - Alimentação e nutrição
- `POST /indigenous-interviews/v2/support` - Apoio e proteção social
- `POST /indigenous-interviews/v2/handle-offline-data` - Processar dados offline
- `GET /indigenous-interviews/v2/page/:page/limit/:limit` - Listar entrevistas

### Entrevistas Gerais
- `POST /interviews` - Criar entrevista
- `GET /interviews` - Listar entrevistas
- `POST /interviews/handle-offline-data` - Processar dados offline

### Pessoas
- `POST /persons` - Criar pessoa
- `GET /persons` - Listar pessoas
- `PUT /persons/:id` - Atualizar pessoa

### Projetos
- `POST /projects` - Criar projeto
- `GET /projects` - Listar projetos

## 🏗️ Arquitetura

O projeto segue os princípios de **Domain-Driven Design (DDD)** e **Clean Architecture**:

- **Separação de responsabilidades**: Cada módulo é independente
- **Injeção de dependências**: Utiliza TSyringe para DI
- **Repositórios**: Abstração da camada de dados
- **Services**: Lógica de negócio isolada
- **DTOs**: Transferência de dados tipada
- **Validação**: Celebrate para validação de rotas

## 🔄 Funcionalidade Offline

A API suporta processamento de dados coletados offline:

1. O front-end armazena dados no localStorage quando offline
2. Quando online, os dados são enviados em lote via `handle-offline-data`
3. A API valida e persiste os dados no banco
4. Retorna status de sucesso/erro para cada registro

## 🧪 Testes

```bash
yarn test
```

## 📦 Deploy

### Infraestrutura de Produção

- **Back-end**: Digital Ocean
- **Banco de dados**: PostgreSQL (Digital Ocean)
- **Storage**: AWS S3 (avatares e arquivos)
- **Email**: AWS SES (recuperação de senha)

## 🔒 Segurança

- Autenticação JWT
- Validação de dados com Celebrate
- Controle de acesso por roles (Admin, Coordinator, Interviewer)
- Sanitização de inputs
- CORS configurado

## 📝 Scripts Disponíveis

- `yarn dev:server` - Inicia servidor em modo desenvolvimento
- `yarn build` - Compila TypeScript para JavaScript
- `yarn start` - Inicia servidor em produção
- `yarn typeorm` - Executa comandos do TypeORM
- `yarn test` - Executa testes

## 🤝 Contribuindo

1. Crie uma branch para sua feature
2. Faça commit das alterações
3. Abra um Pull Request

## 📄 Licença

Este projeto é privado e de uso interno.

