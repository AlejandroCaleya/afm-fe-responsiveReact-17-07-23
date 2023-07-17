const express = require("express");
const bodyParser = require("body-parser");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
	res.send("Hello World");
});
// Require producto routes
const productoRoutes = require("./src/routes/producto.routes");
// using as middleware
app.use("/api/v1/productos", productoRoutes);
// Require fabricante routes
const fabricanteRoutes = require("./src/routes/fabricante.routes");
// using as middleware
app.use("/api/v1/fabricantes", fabricanteRoutes);
// Require categoria routes
const categoriaRoutes = require("./src/routes/categoria.routes");
// using as middleware
app.use("/api/v1/categorias", categoriaRoutes);
// listen for requests
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
