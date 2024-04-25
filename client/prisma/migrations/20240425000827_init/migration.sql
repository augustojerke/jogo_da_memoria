-- CreateTable
CREATE TABLE "Ranking" (
    "id" SERIAL NOT NULL,
    "nome_jogador" VARCHAR(255) NOT NULL,
    "tempo" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ranking_pkey" PRIMARY KEY ("id")
);
