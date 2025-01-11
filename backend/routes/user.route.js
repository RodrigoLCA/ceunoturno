import express from "express";
import { ObterAstro, ObterUsuario, UserSetBlock } from "../controllers/user.controller.js";

const router = express.Router();

// POST /users
// teste apenas.
//router.post('/', NovoUsuario);

// POST /users/block
// Rota para bloquear usuario
// (ADMIN APENAS)
router.post('/:id/block', UserSetBlock);

// em breve /users/unblock
// de acordo com API (aguardando sprint)
// será direcionado para a mesma rota.
// o tratamento será feito no método UserSetBlock
// (ADMIN APENAS)

// GET /users:id
// Obteremos informações sobre o usuario específico
router.get('/:id', ObterUsuario);

// GET /users/:id/stars
// Obteremos todos os astros do usuário específico
router.get('/:id/stars', ObterAstro);

// GET /users/:id/stars/:id
// Obteremos info de um astro do usuário específico.
router.get('/:id/stars/:astro_id', ObterAstro);

export default router;