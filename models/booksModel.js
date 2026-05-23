const { ObjectId } = require("mongodb");
const connectToDb = require("../database/connection");

const getBooksCollection = async () => {
  try {
    const db = await connectToDb;
    const collection = await db.collection("books");

    return collection;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllBooks = async () => {
  try {
    const booksCollection = await getBooksCollection();
    const books = await booksCollection.find({}).toArray();

    return books;
  } catch (error) {
    throw new Error(error);
  }
};

const getBookById = async (id) => {
  try {
    const booksCollection = await getBooksCollection();
    const book = await booksCollection.findOne({ _id: new ObjectId(id) });

    return book;
  } catch (error) {
    throw new Error(error);
  }
};

const addNewBook = async (
  title,
  author,
  publishYear,
  pages,
  genre,
  linkToBuy,
  isBanned,
) => {
  try {
    const booksCollection = await getBooksCollection();
    const insertResult = await booksCollection.insertOne({
      title,
      author,
      publishYear,
      pages,
      genre,
      linkToBuy,
      isBanned,
    });

    return insertResult.acknowledged;
  } catch (error) {
    throw new Error(error);
  }
};

const updateBook = async (id, data) => {
  try {
    const booksCollection = await getBooksCollection();
    const result = await booksCollection.findOneAndUpdate(
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

const deleteBook = async (id) => {
  try {
    const booksCollection = await getBooksCollection();
    const result = await booksCollection.findOneAndDelete({
      _id: new ObjectId(id),
    });

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
