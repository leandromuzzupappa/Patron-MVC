const express = require("express");
const fs = require("fs");

// Ejecuto Express
const app = express();

// Creo servidor
app.listen(3000, () =>
    console.log("Servidor corriendo en http://localhost:3000")
);

// Leo y parseo el contenido de peliculas.json
const moviesJson = fs.readFileSync(
    __dirname + "/database/movies.json",
    "utf-8"
);
const movies = JSON.parse(moviesJson);

// Rutas
//-> Inicio
app.get("/", function (req, res) {
    res.send(`
        <h1>Películas</h1>
        <ul>
            <li>
                Listado de peliculas --> <strong>/movies</strong>
            </li>
            <li>
                Detalle de la pelicula --> <strong>/movies/id</strong>
            </li>
        </ul>
    `);
});

//-> Peliculas
app.get("/movies", function (req, res) {
    res.send(movies);
});

//-> Detalle pelicula
app.get("/movies/:id", function (req, res) {
    const id = req.params.id;

    const movie = movies.find((_movie) => _movie.id == id);

    // Valido que haya encontrado una pelicula
    if (!movie) {
        return res.send(
            `No se encontro una pelicula para el id(${id}) buscado`
        );
    }

    return res.send(`
        <h1>${movie.title}</h1>
        <p>${movie.description}</p>
        <ul>
            <li>Directores: <strong>${movie.directors}</strong></li>
            <li>Fecha de lanzamiento: <strong>${movie.releaseDate}</strong></li>
            <li>Duración: <strong>${movie.length}</strong></li>
        </ul>
    `);
});

//-> 404
app.get("*", function (req, res) {
    res.send("Oh no! Estas perdido? <a href='/'>Ir al inicio</a>");
});
