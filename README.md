## To do List do App

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
- Os dados deverão ser armazenados no local storage do usuário
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
