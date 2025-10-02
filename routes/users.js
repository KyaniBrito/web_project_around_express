const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

router.get("/", getUsers); // GET /users
router.get("/:userId", getUserById); // GET /users/:userId
router.post("/", createUser); // POST /users
router.patch("/me", updateProfile); // PATCH /users/me
router.patch("/me/avatar", updateAvatar); // PATCH /users/me/avatar

module.exports = router;
