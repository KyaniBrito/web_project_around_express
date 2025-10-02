const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send({ message: "Erro ao buscar usuários" }));
};

module.exports.getUserById = (req, res) => {
  User.findById(req.params.userId)
    .orFail(() => new Error("NotFound"))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Usuário não encontrado" });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID inválido" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === "ValidationError")
        return res
          .status(400)
          .send({ message: "Dados inválidos ao criar usuário" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .orFail(() => new Error("NotFound"))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Usuário não encontrado" });
      if (err.name === "ValidationError" || err.name === "CastError")
        return res.status(400).send({ message: "Dados inválidos" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .orFail(() => new Error("NotFound"))
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Usuário não encontrado" });
      if (err.name === "ValidationError" || err.name === "CastError")
        return res.status(400).send({ message: "Dados inválidos" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};
