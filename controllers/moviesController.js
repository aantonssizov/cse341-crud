const moviesModel = require("../models/moviesModel");
const moviesCont = {};

moviesCont.getAll = async (req, res) => {
  const movies = await moviesModel.getAllMovies();
  res.json(movies);
};

moviesCont.getById = async (req, res) => {
  const id = req.params.id;
  const movie = await moviesModel.getMovieById(id);

  if (!movie) res.status(404).send("Not found.");
  else res.json(movie);
};

moviesCont.addNew = async (req, res) => {
  const {
    title,
    director,
    publishYear,
    runtimeMinutes,
    genre,
    linkToBuy,
    isBanned,
  } = req.body;

  const result = await moviesModel.addNewMovie(
    title,
    director,
    publishYear,
    runtimeMinutes,
    genre,
    linkToBuy,
    isBanned,
  );

  if (result) res.sendStatus(200);
  else res.status(400).send("Error adding the new movie.");
};

moviesCont.update = async (req, res) => {
  const id = req.params.id;
  const movieUpdate = req.body;
  const result = await moviesModel.updateMovie(id, movieUpdate);

  if (result) res.sendStatus(200);
  else res.status(400).send("Error updating the movie.");
};

moviesCont.delete = async (req, res) => {
  const id = req.params.id;
  const result = await moviesModel.deleteMovie(id);

  if (result) res.sendStatus(200);
  else res.status(400).send("Error updating the movie.");
};

module.exports = moviesCont;
