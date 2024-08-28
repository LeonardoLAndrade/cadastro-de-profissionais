const express = require("express");
const router = express.Router();
const ProfissionaisController = require("../controllers/profissionaisController.js");

router.get("/profissionais/", ProfissionaisController.SearchAll);
router.get("/profissionais/nextId", ProfissionaisController.GetNextProfId);
router.get(
  "/profissionais/supervisores",
  ProfissionaisController.GetSupervisores
);
router.get("/profissionais/:id", ProfissionaisController.SearchOne);
router.post("/cadastro", ProfissionaisController.Insert);

module.exports = router;
