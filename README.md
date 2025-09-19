# Tripleten web_project_around_express

Projeto desenvolvido como parte do curso de Desenvolvimento Web da TripleTen - Sprint 15.

## Descrição

**Web Project Around Express** é uma API RESTful construída com Node.js e Express, onde o usuário pode:

- Consultar uma lista de usuários cadastrados;
- Consultar uma lista de cards disponíveis;
- Consultar dados de um usuário específico pelo ID;
- Receber mensagens de erro padronizadas para requisições inválidas ou IDs não encontrados.

## Tecnologias e práticas aplicadas

- Node.js + Express
- JavaScript ES6+
- Modularização de código com Express Router
- Leitura de arquivos JSON com fs e path
- Tratamento de erros de leitura e requisições inválidas
- Boas práticas de API RESTful
- Estrutura de projeto organizada em pastas (routes, data)
- Respostas padronizadas em JSON
- Uso de linter (ESLint) com guia de estilo Airbnb

## Funcionalidades

- [x] GET /users → retorna todos os usuários
- [x] GET /cards → retorna todos os cards
- [x] GET /users/:id → retorna um usuário específico ou erro 404 caso não exista
- [x] Tratamento de rotas inválidas → retorna status 404 com mensagem "A solicitação não foi encontrada"

Desenvolvido por **Kyani Brito** durante o curso de Desenvolvimento Web na [TripleTen](https://tripleten.com/).
