-- CreateTable
CREATE TABLE "Tipo" (
    "id_tipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Recetas" (
    "id_receta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "id_tipo" INTEGER NOT NULL,
    CONSTRAINT "Recetas_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "Tipo" ("id_tipo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Detalle" (
    "id_detalle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_receta" INTEGER NOT NULL,
    "detalle" TEXT NOT NULL,
    CONSTRAINT "Detalle_id_receta_fkey" FOREIGN KEY ("id_receta") REFERENCES "Recetas" ("id_receta") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredientes" (
    "id_ingrediente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Unidades" (
    "id_unidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "unidad" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TieneIng" (
    "id_tieneing" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_receta" INTEGER NOT NULL,
    "id_ingrediente" INTEGER NOT NULL,
    "cantidad" REAL NOT NULL,
    "id_unidad" INTEGER NOT NULL,
    CONSTRAINT "TieneIng_id_receta_fkey" FOREIGN KEY ("id_receta") REFERENCES "Recetas" ("id_receta") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TieneIng_id_ingrediente_fkey" FOREIGN KEY ("id_ingrediente") REFERENCES "Ingredientes" ("id_ingrediente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TieneIng_id_unidad_fkey" FOREIGN KEY ("id_unidad") REFERENCES "Unidades" ("id_unidad") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PlanComidas" (
    "id_plan" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fecha" DATETIME NOT NULL,
    "momento" TEXT NOT NULL,
    "id_receta" INTEGER NOT NULL,
    CONSTRAINT "PlanComidas_id_receta_fkey" FOREIGN KEY ("id_receta") REFERENCES "Recetas" ("id_receta") ON DELETE RESTRICT ON UPDATE CASCADE
);
