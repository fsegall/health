
# Montando o ambiente de desenvolvimento do servidor

## Prerequisitos de software

### - Nodejs e Yarn
No Linux você pode instalar ambos com o snap:
https://snapcraft.io/node

Se preferir poder mudar a versão do Nodejs pode instalar via nvm:
https://tecadmin.net/install-nodejs-with-nvm/ e depois o Yarn, seguindo as orientações da instalação no link:
https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable


* Erro comum no Linux:
Nota: O Ubuntu 17.04 vem com o cmdtest instalado por padrão. Se você está recebendo erros ao instalar o yarn, você pode querer executar sudo apt remove cmdtest primeiro. Consulte isso para obter mais informações.
Fonte: https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable

### - Instalar o docker para rodar um container com o banco de dados Postgresql
https://docs.docker.com/get-docker/

- Após a instalação do docker criar um container com o postgres rodando:
```docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres```

- Dar start no container:
```docker start some-postgres```

Erro comum no Linux de endereço em uso caso já exista um serviço postgresql rodando na sua máquina na porta 5432:
Error response from daemon: driver failed programming external connectivity on endpoint gostack11_postgres (ec60f9a1bffb15bf8e9ade1ef64c12bdf19bad95bc4f24e09f01b745b461bbb5): Error starting userland proxy: listen tcp 0.0.0.0:5432: bind: address already in use
Error: failed to start containers: gostack11_postgres

- Solução (encerrar o postgres):
```sudo systemctl stop postgresql```

### Instalar o Dbeaver ou outro software com GUI para gerenciar o banco postgres (caso não queira fazer tudo pela cli):
https://dbeaver.io/download/

## Para rodar o projeto

- Abrir o Dbeaver e criar uma conexão com o Postgres
- Menu Superior - Database > New Database Connection
- Escolher PostgreSQL e colocar a senha criada. **Ir para aba PostgreSQL e checar a opção "Show All Databases" antes de apertar o finish.**
- Clicar com o botão direito do mouse na conexão criada e escolher a opção Create > Database
- Dar um nome para o Banco de dados.

### Colocar esse nome do Banco de dados e a senha criada anteriormente no comando docker run no arquivo ormconfig.json:
```
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "aqui",
  "database": "aqui",
  "entities": [
    "./src/modules/**/infra/typeorm/entities/*.ts"
  ],
  "migrations": [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
```

## Criar um arquivo com o nome .env na raiz do projeto com o seguinte conteúdo:

```
APP_SECRET="Uma string qualquer"
APP_WEB_URL=http://localhost:3000
APP_API_URL=http://localhost:3333

MAIL_DRIVER=ethereal // para testar o envio de emails em ambiente de desenvolvimento

AWS_ACCESS_KEY_ID= // Só usado em ambiente de produção
AWS_SECRET_ACCESS_KEY= // Só usado em ambiente de produção

STORAGE_DRIVER=disk // Para salvar arquivos no seu disco em ambiente de desenvolvimento (a imagem do avatar do usuário)
```



Comandos no diretório raiz (onde está o arquivo package.json):

- ```yarn install``` para instalar as dependências do projeto
- ```yarn typeorm migration:run``` para criar as tabelas no banco postgres usando o pacote Typeorm
- ```yarn dev:server``` para rodar o servidor

Se tudo der certo você deverá ver a mensagem: **Server started on Port 3333!**

# To do List do App

### Backend

Recuperação de senha
Atualização do perfil
Atualização da Pessoa entrevistada
Atualização do Household
Atualização de endereço
Rotas de recuperação de dados por id
Incluir campo número de identidade para o entrevistador e entrevistado

**RN**

- O entrevistador não poderá incluir dois entrevistados com o mesmo número de documento de identidade
- O entrevistador não poderá entrevistar ele mesmo

### Frontend

#### Criar UI do formulário na tela de pesquisa

**RF**

- O entrevistador poderá preencher os dados de uma pessoa entrevistada
- O entrevistador receberá um email de confirmação com os dados da pessoa entrevista
- Os entrevistadores devem receber uma notificação sempre que um entrevistado for incluído na pesquisa.
- O entrevistador poderá visualizar as notificações não lidas.

**RNF**

- O localstorage deverá garantir que os campos do formulário não sejam deletados com a atualização da página
- O localstorage deverá armazenar os dados dos entrevistados
- As notificações serão armazenadas no MongoDB
- As notificações usarão Socket.io para envio em tempo real

**RN**

- A notificação deverá ter um status de lida ou não lida para controle do entrevistador.

#### Profile do Entrevistador

**RF**

- O entrevistador poderá ver e atualizar os seus dados via formulário

#### Dashboard com recuperação de dados dos entrevistados

**RF**

- Listar todos os entrevistados por ordem alfabética com paginação
- Listar entrevistados por entrevistador
- Listar entrevistados por data com datepicker para mostrar o dia selecionado
- O entrevistador poderá atualizar os dados de uma pessoa entrevistada por ele
- O usuário poderá fazer download de arquivos csv com os dados consolidados dos pesquisados

**RN**

- Uma pessoa só poderá ser atualizada pela pessoa que a entrevistou.
- A listagem dos entrevistados deverá ser armazenada em cache.

### yarn dev:server
