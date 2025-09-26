/*
  Warnings:

  - Added the required column `title` to the `Fragment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Fragment" ADD COLUMN     "title" TEXT NOT NULL;
