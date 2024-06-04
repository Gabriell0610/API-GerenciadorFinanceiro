/*
  Warnings:

  - You are about to drop the column `date_sale` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `profit` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `total_money_sale` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `unity_sale` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `value_sale` on the `Sales` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_purchase" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "value_purchase" REAL NOT NULL,
    "unity" REAL NOT NULL,
    "total_money_purchase" REAL NOT NULL
);
INSERT INTO "new_Sales" ("coin", "date_purchase", "id", "total_money_purchase", "unity", "value_purchase") SELECT "coin", "date_purchase", "id", "total_money_purchase", "unity", "value_purchase" FROM "Sales";
DROP TABLE "Sales";
ALTER TABLE "new_Sales" RENAME TO "Sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
