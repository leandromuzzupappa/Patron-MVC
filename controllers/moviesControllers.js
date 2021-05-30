const fs = require("fs");

// Leo y parseo el contenido de peliculas.json
const moviesJson = fs.readFileSync(
    __dirname + "/../database/movies.json",
    "utf-8"
);
const movies = JSON.parse(moviesJson);

const moviesControllers = {
    getAll: (req, res) => {
        return res.send(movies);
    },
    getOne: (req, res) => {
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
    },
    getDescription: (req, res) => {
        const id = req.params.id;

        const movie = movies.find((_movie) => _movie.id == id);

        // Validamos que movie exista
        if (!movie)
            return res.send(`La pelicula con id: ${id} no fue encontrada`);

        return res.send(movie.description);
    },
};

module.exports = moviesControllers;
