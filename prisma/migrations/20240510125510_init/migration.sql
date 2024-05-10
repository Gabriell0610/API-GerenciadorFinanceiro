-- CreateTable
CREATE TABLE "Sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date_purchase" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "value_purchase" REAL NOT NULL,
    "unity" REAL NOT NULL,
    "total_money_purchase" REAL NOT NULL,
    "date_sale" TEXT,
    "value_sale" REAL,
    "unity_sale" INTEGER,
    "total_money_sale" REAL,
    "profit" REAL
);
