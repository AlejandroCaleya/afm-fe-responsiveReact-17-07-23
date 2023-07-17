"use strictcategoria";
var dbConn = require("../../config/db.config");
//Categoria object create
var Categoria = function (categoria) {
	this.id = categoria.id;
	this.nombre = categoria.nombre;
};
Categoria.create = function (newCat, result) {
	dbConn.query("INSERT INTO categorias set ?", newCat, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			console.log(res.insertId);
			result(null, res.insertId);
		}
	});
};
Categoria.findById = function (id, result) {
	dbConn.query("Select * from categorias where id = ? ", id, function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(err, null);
		} else {
			result(null, res);
		}
	});
};
Categoria.findAll = function (result) {
	dbConn.query("Select * from categorias", function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			console.log("categorias : ", res);
			result(null, res);
		}
	});
};
Categoria.update = function (id, categoria, result) {
	dbConn.query("UPDATE categorias SET id= ? ,nombre= ?  WHERE id = ?", [categoria.id, categoria.nombre, id], function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			result(null, res);
		}
	});
};
Categoria.delete = function (id, result) {
	dbConn.query("DELETE FROM categorias WHERE id = ?", [id], function (err, res) {
		if (err) {
			console.log("error: ", err);
			result(null, err);
		} else {
			result(null, res);
		}
	});
};
module.exports = Categoria;
