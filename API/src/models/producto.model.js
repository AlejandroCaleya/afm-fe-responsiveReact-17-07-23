"use strictfabricante";
var dbConn = require("../../config/db.config");
//Producto object create
var Producto = function (producto) {
	this.id = producto.id;
	this.nombre = producto.nombre;
	this.categoria = producto.categoria;
	this.precio = producto.precio;
	this.stock = producto.stock;
	this.fabricante = producto.fabricante;
};
Producto.create = function (newProd, result) {
	dbConn.query("INSERT INTO productos set ?", newProd, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};
Producto.findById = function (id, result) {
	dbConn.query("Select * from productos where id = ? ", id, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			result(null, res);
		}
	});
};
Producto.findAll = function (result) {
	dbConn.query("Select * from productos", function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			console.log("productos : ", res);
			result(null, res);
		}
	});
};
Producto.update = function (id, producto, result) {
	dbConn.query(
		"UPDATE productos SET id= ? ,nombre= ? , categoria= ? ,precio= ? ,stock= ? ,fabricante= ?  WHERE id = ?",
		[producto.id, producto.nombre, producto.categoria, producto.precio, producto.stock, producto.fabricante, id],
		function (err, res) {
			if (err) {
				console.log("error: ", err);
				result(null, err);
			} else {
				result(null, res);
			}
		}
	);
};
Producto.delete = function (id, result) {
	dbConn.query("DELETE FROM productos WHERE id = ?", [id], function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			result(null, res);
		}
	});
};
module.exports = Producto;
