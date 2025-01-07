import express from "express";
import { getStar, createStar } from "../controllers/star.controller.js";

const router = express.Router();

router.get('/', getStar);
router.post('/create', createStar);

export default router;