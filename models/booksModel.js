const { ObjectId } = require("mongodb");
const connectToDb = require("../database/connection");

const getBooksCollection = async () => {
  const db = await connectToDb;
  const collection = await db.collection("books");
  return collection;
};

const getAllBooks = async () => {
  const booksCollection = await getBooksCollection();
  const books = await booksCollection.find({}).toArray();

  return books;
};

const getBookById = async (id) => {
  const booksCollection = await getBooksCollection();
  const book = await booksCollection.findOne({ _id: new ObjectId(id) });

  return book;
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
};

module.exports = { getAllBooks, getBookById, addNewBook };
