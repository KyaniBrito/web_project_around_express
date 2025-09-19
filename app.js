const express = require("express");
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const app = express();

const { PORT = 3000 } = process.env;

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "A solicitação não foi encontrada" });
});

app.listen(PORT, () => {
  console.log(`O App está escutando na porta ${PORT}`);
});
