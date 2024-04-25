import { Router, Request, Response } from "express";
import { RankingController } from "./Controllers/RankingController";

const router = Router();

router.post('/ranking', new RankingController().IncluirRanking)
router.get('/ranking', new RankingController().ListarRanking)

export {router};