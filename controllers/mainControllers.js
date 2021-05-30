const mainControllers = {
    home: (req, res) => {
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
    },
};

module.exports = mainControllers;
