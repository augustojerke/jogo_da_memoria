import { Response, Request } from "express";
import { RankingService } from "./Services/RankingServices";

class RankingController{

    async IncluirRanking(req: Request, res: Response){
        const {nome_jogador, tempo} = req.body;
        const service = new RankingService();
        res.json(await service.IncluirRanking({nome_jogador, tempo}))
    }
    
    async ListarRanking(req: Request, res: Response){
        const service = new RankingService();
        res.json(await service.ListarRanking())
    }  

}

export { RankingController }