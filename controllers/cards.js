const Card = require("../models/card");

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(() => res.status(500).send({ message: "Erro ao buscar cards" }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === "ValidationError")
        return res
          .status(400)
          .send({ message: "Dados inválidos ao criar card" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(() => new Error("NotFound"))
    .then((card) => res.send({ message: "Card removido", card }))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Card não encontrado" });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID inválido" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // adiciona se não existir
    { new: true }
  )
    .orFail(() => new Error("NotFound"))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Card não encontrado" });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID inválido" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};

module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // remove _id do array
    { new: true }
  )
    .orFail(() => new Error("NotFound"))
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.message === "NotFound")
        return res.status(404).send({ message: "Card não encontrado" });
      if (err.name === "CastError")
        return res.status(400).send({ message: "ID inválido" });
      return res.status(500).send({ message: "Erro no servidor" });
    });
};
