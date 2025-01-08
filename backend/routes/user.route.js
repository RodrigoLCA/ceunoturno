import express from "express";
import { NovoUsuario, ObterAstro, ObterUsuario } from "../controllers/user.controller.js";

const router = express.Router();

// POST /users
// teste apenas.
router.post('/', NovoUsuario);

// GET /users:id
// Obteremos informações sobre o usuario específico
router.get('/:id', ObterUsuario);

// GET /users/:id/stars
// Obteremos todos os astros do usuário específico
router.get('/:id/stars', ObterAstro);

// GET /users/:id/stars/:id
// Obteremos info de um astro do usuário específico.
router.get('/:id/stars:astro_id', ObterAstro);

export default router;