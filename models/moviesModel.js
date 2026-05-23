const { ObjectId } = require("mongodb");
const connectToDb = require("../database/connection");

const getMoviesCollection = async () => {
  try {
    const db = await connectToDb;
    const collection = await db.collection("movies");

    return collection;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllMovies = async () => {
  try {
    const moviesCollection = await getMoviesCollection();
    const movies = await moviesCollection.find({}).toArray();

    return movies;
  } catch (error) {
    throw new Error(error);
  }
};

const getMovieById = async (id) => {
  try {
    const moviesCollection = await getMoviesCollection();
    const movie = await moviesCollection.findOne({ _id: new ObjectId(id) });

    return movie;
  } catch (error) {
    throw new Error(error);
  }
};

const addNewMovie = async (
  title,
  director,
  publishYear,
  runtimeMinutes,
  genre,
  linkToBuy,
  isBanned,
) => {
  try {
    const moviesCollection = await getMoviesCollection();
    const insertResult = await moviesCollection.insertOne({
      title,
      director,
      publishYear,
      runtimeMinutes,
      genre,
      linkToBuy,
      isBanned,
    });

    return insertResult.acknowledged;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMovie = async (id, data) => {
  try {
    const moviesCollection = await getMoviesCollection();
    const result = await moviesCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: data,
      },
    );

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMovie = async (id) => {
  try {
    const moviesCollection = await getMoviesCollection();
    const result = await moviesCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateMovie,
  deleteMovie,
};
