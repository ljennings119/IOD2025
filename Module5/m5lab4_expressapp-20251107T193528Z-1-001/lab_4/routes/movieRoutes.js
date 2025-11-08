const express = require("express");
const router = express.Router();
let movies = require('../models/movies');

// Get all
router.get('/', (req, res) => res.json(movies));

// Get by id
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let movie = movies.find(m => m.id === id);
    if (movie) res.json(movie);
    else res.status(404).json({ error: 'Movie not found' });
});

// Create
router.post('/', (req, res) => {
    let newMovie = req.body;
    if (!newMovie.title || !newMovie.genre)
        return res.status(400).json({ error: 'Movie must have title and genre' });

    newMovie.id = movies.length + 1;
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// Update
router.put('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let index = movies.findIndex(m => m.id === id);
    if (index === -1)
        return res.status(404).json({ error: 'Movie not found' });

    movies[index] = { ...movies[index], ...req.body };
    res.json(movies[index]);
});

// Delete
router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let index = movies.findIndex(m => m.id === id);
    if (index === -1)
        return res.status(404).json({ error: 'Movie not found' });

    const deleted = movies.splice(index, 1);
    res.json({ message: 'Movie deleted', deleted });
});

module.exports = router;
