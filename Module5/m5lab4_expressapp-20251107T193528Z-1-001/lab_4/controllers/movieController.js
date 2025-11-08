const movies = require("../models/movies");

// GET all movies
exports.getAllMovies = (req, res) => {
    res.json(movies);
};

// GET movie by ID
exports.getMovieById = (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(m => m.id === id);
    if (movie) res.json(movie);
    else res.status(404).json({ error: `Movie with ID ${id} not found` });
};

// POST 
exports.createMovie = (req, res) => {
    const newMovie = req.body;
    if (!newMovie.title || !newMovie.genre) {
        return res.status(400).json({ error: "Movie must have a title and genre" });
    }
    newMovie.id = movies.length + 1;
    movies.push(newMovie);
    res.status(201).json(newMovie);
};

// PUT 
exports.updateMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === id);
    if (index === -1) return res.status(404).json({ error: `Movie with ID ${id} not found` });

    movies[index] = { ...movies[index], ...req.body };
    res.json(movies[index]);
};

// DELETE 
exports.deleteMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex(m => m.id === id);
    if (index === -1) return res.status(404).json({ error: `Movie with ID ${id} not found` });

    const deleted = movies.splice(index, 1);
    res.json({ message: "Movie deleted", deleted });
};
