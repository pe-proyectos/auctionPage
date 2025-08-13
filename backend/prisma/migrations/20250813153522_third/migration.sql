/*
  Warnings:

  - You are about to drop the `FichaCompra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."FichaCompra" DROP CONSTRAINT "FichaCompra_usuarioId_fkey";

-- DropTable
DROP TABLE "public"."FichaCompra";
