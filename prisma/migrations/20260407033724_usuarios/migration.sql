/*
  Warnings:

  - Added the required column `id_usuario` to the `Recetas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "creado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recetas" (
    "id_receta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "id_tipo" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    CONSTRAINT "Recetas_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "Tipo" ("id_tipo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recetas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recetas" ("id_receta", "id_tipo", "nombre") SELECT "id_receta", "id_tipo", "nombre" FROM "Recetas";
DROP TABLE "Recetas";
ALTER TABLE "new_Recetas" RENAME TO "Recetas";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
