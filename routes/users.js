const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateProfile,
  updateAvatar,
} = require("../controllers/users");

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

router.get("/", getUsers);

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Retorna um usuário pelo ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */

router.get("/:userId", getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - about
 *               - avatar
 *             properties:
 *               name:
 *                 type: string
 *               about:
 *                 type: string
 *               avatar:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */

router.post("/", createUser);

/**
 * @swagger
 * /users/me:
 *   patch:
 *     summary: Atualiza o perfil do usuário (name e about)
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               about:
 *                 type: string
 *     responses:
 *       200:
 *         description: Perfil atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Usuário não encontrado
 */

router.patch("/me", updateProfile);

/**
 * @swagger
 * /users/me/avatar:
 *   patch:
 *     summary: Atualiza o avatar do usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *     responses:
 *       200:
 *         description: Avatar atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Usuário não encontrado
 */

router.patch("/me/avatar", updateAvatar);

module.exports = router;
