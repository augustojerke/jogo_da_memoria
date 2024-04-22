import { Router, Request, Response } from "express";
import { RankingController } from "./Controllers/RankingController";

const router = Router();

router.get('/teste', new RankingController().teste)

export {router};