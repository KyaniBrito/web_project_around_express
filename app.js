const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Web Project Around Express API",
      version: "1.0.0",
      description: "API RESTful para gerenciamento de usuários e cards",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose
  .connect("mongodb://localhost:27017/aroundb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado com sucesso!"))
  .catch((err) => console.error("Erro ao conectar no MongoDB:", err));

const { PORT = 3000 } = process.env;

app.use(express.json());

app.use((req, res, next) => {
  req.user = { _id: "68dec7deecb00110a40494b5" }; // substitua pelo seu ID de teste
  next();
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`O App está escutando na porta ${PORT}`);
});
