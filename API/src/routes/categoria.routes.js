const express = require("express");
const router = express.Router();
const categoriasController = require("../controllers/categorias.controller");
// Retrieve all categoriass
router.get("/", categoriasController.findAll);
// Create a new categorias
router.post("/", categoriasController.create);
// Retrieve a single categorias with id
router.get("/:id", categoriasController.findById);
// Update a categorias with id
router.put("/:id", categoriasController.update);
// Delete a categorias with id
router.delete("/:id", categoriasController.delete);
module.exports = router;
