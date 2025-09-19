const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const usersPath = path.join(__dirname, "../data/users.json");

// GET /users → retorna todos os usuários
router.get("/", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao ler arquivo de usuários" });
    }
    const users = JSON.parse(data);
    return res.json(users);
  });
});

// GET /users/:id → retorna um usuário específico
router.get("/:id", (req, res) => {
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao ler arquivo de usuários" });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);

    if (!user) {
      return res.status(404).json({ message: "ID do usuário não encontrado" });
    }

    return res.json(user);
  });
});

module.exports = router;
