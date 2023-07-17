const express = require("express");
const router = express.Router();
const fabricantesController = require("../controllers/fabricantes.controller");
// Retrieve all fabricantess
router.get("/", fabricantesController.findAll);
// Create a new fabricantes
router.post("/", fabricantesController.create);
// Retrieve a single fabricantes with id
router.get("/:id", fabricantesController.findById);
// Update a fabricantes with id
router.put("/:id", fabricantesController.update);
// Delete a fabricantes with id
router.delete("/:id", fabricantesController.delete);
module.exports = router;
