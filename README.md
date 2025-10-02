# Tripleten web_project_around_express

Projeto desenvolvido como parte do curso de Desenvolvimento Web da TripleTen - Sprint 16.

## Descrição

**Web Project Around Express** é uma API RESTful construída com Node.js, Express e MondoDB, onde o usuário pode:

- Consultar uma lista de usuários cadastrados;
- Consultar uma lista de cards disponíveis;
- Consultar dados de um usuário específico pelo ID;
- Criar novos usuários e cards;
- Atualizar perfil e avatar de usuário;
- Curtir e descurtir cards;
- Deletar cards pelo ID;
- Receber mensagens de erro padronizadas para requisições inválidas ou IDs não encontrados.

## Tecnologias e práticas aplicadas

- Node.js + Express
- MongoDB + Mongoose
- JavaScript ES6+
- Modularização de código com Express Router
- Tratamento de erros padronizado (400, 404, 500)
- Validação de dados com Mongoose e express-validator
- Uso de Express middleware para simular autenticação temporária
- Estrutura de projeto organizada em pastas (controllers, models, routes)
- Respostas padronizadas em JSON
- Boas práticas de API RESTful

## Funcionalidades

### Usuários

- [x] GET /users → retorna todos os usuários
- [x] GET /users/:userId → retorna um usuário específico ou erro 404 caso não exista
- [x] POST /users → cria um novo usuário com os campos `name`, `about` e `avatar`
- [x] PATCH /users/me → atualiza o perfil do usuário (nome e sobre)
- [x] PATCH /users/me/avatar → atualiza o avatar do usuário

### Cards

- [x] GET /cards → retorna todos os cards
- [x] POST /cards → cria um novo card com os campos `name` e `link` (usa `_id` do usuário como owner)
- [x] DELETE /cards/:cardId → remove um card pelo ID
- [x] PUT /cards/:cardId/likes → adiciona um like do usuário ao card
- [x] DELETE /cards/:cardId/likes → remove um like do usuário do card

Desenvolvido por **Kyani Brito** durante o curso de Desenvolvimento Web na [TripleTen](https://tripleten.com/).
