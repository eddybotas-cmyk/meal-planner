/*
  Warnings:

  - A unique constraint covering the columns `[fecha,momento]` on the table `PlanComidas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PlanComidas_fecha_momento_key" ON "PlanComidas"("fecha", "momento");
