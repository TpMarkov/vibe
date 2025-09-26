/*
  Warnings:

  - Changed the type of `type` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."MessageType" AS ENUM ('RESULT', 'ERROR');

-- AlterTable
ALTER TABLE "public"."Message" DROP COLUMN "type",
ADD COLUMN     "type" "public"."MessageType" NOT NULL;

-- DropEnum
DROP TYPE "public"."MessageRoleType";
