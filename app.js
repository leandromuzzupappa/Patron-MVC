const express = require("express");
const fs = require("fs");

// Ejecuto Express
const app = express();

// Creo servidor
app.listen(3000, () =>
    console.log("Servidor corriendo en http://localhost:3000")
);

// Rutas
const mainRoutes = require("./routes/mainRoutes");
const moviesRoutes = require("./routes/moviesRoutes");

app.use("/", mainRoutes);
app.use("/movies", moviesRoutes);

//-> 404
app.get("*", function (req, res) {
    res.send("Oh no! Estas perdido? <a href='/'>Ir al inicio</a>");
});
