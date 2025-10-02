const express = require("express");
const router = express.Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

router.get("/", getCards); // GET /cards
router.post("/", createCard); // POST /cards
router.delete("/:cardId", deleteCard); // DELETE /cards/:cardId
router.put("/:cardId/likes", likeCard); // PUT /cards/:cardId/likes
router.delete("/:cardId/likes", dislikeCard); // DELETE /cards/:cardId/likes

module.exports = router;
