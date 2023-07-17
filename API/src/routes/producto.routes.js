const express = require("express");
const router = express.Router();
const productoController = require("../controllers/producto.controller");
// Retrieve all productos
router.get("/", productoController.findAll);
// Create a new producto
router.post("/", productoController.create);
// Retrieve a single producto with id
router.get("/:id", productoController.findById);
// Update a producto with id
router.put("/:id", productoController.update);
// Delete a producto with id
router.delete("/:id", productoController.delete);
module.exports = router;
