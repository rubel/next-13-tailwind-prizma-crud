-- CreateTable
CREATE TABLE "names" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "createdat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" DATETIME NOT NULL
);
