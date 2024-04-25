import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface Ranking {
   nome_jogador: string,
   tempo: Date
}

class RankingService{

   async IncluirRanking(items: Ranking){
      return await prisma.ranking.create({
         data:{
            tempo: items.tempo,
            nome_jogador: items.nome_jogador
         }
      })
   }

   async ListarRanking(){
      return await prisma.ranking.findMany({
         take: 10,
         orderBy:{
            tempo: 'asc'
         }
      }) 
   }

}

export { RankingService }