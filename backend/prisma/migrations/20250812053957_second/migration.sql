/*
  Warnings:

  - You are about to drop the `puja` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."puja" DROP CONSTRAINT "puja_publicacionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."puja" DROP CONSTRAINT "puja_usuarioId_fkey";

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "fichas" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "public"."puja";

-- CreateTable
CREATE TABLE "public"."Puja" (
    "id" SERIAL NOT NULL,
    "fichasUsadas" INTEGER NOT NULL DEFAULT 1,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "publicacionId" INTEGER NOT NULL,

    CONSTRAINT "Puja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FichaCompra" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "FichaCompra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Puja" ADD CONSTRAINT "Puja_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Puja" ADD CONSTRAINT "Puja_publicacionId_fkey" FOREIGN KEY ("publicacionId") REFERENCES "public"."Publicacion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FichaCompra" ADD CONSTRAINT "FichaCompra_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
