import { Response, Request } from "express";

class RankingController{
    async teste(req: Request, res: Response){
        return res.send("vamo gremio")
    }
}

export { RankingController }