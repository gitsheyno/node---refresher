/*
  Warnings:

  - You are about to drop the column `aaset` on the `Update` table. All the data in the column will be lost.
  - You are about to drop the column `descriprtion` on the `UpdatePoint` table. All the data in the column will be lost.
  - Added the required column `description` to the `UpdatePoint` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Update" DROP COLUMN "aaset",
ADD COLUMN     "asset" TEXT;


-- AlterTable
ALTER TABLE "UpdatePoint" DROP COLUMN "descriprtion",
ADD COLUMN     "description" TEXT NOT NULL;
