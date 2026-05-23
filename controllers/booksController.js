const booksModel = require("../models/booksModel");
const booksCont = {};

booksCont.getAll = async (req, res) => {
  const books = await booksModel.getAllBooks();
  res.json(books);
};

booksCont.getById = async (req, res) => {
  const id = req.params.id;
  const book = await booksModel.getBookById(id);

  if (!book) res.status(404).send("Not found.");
  else res.json(book);
};

booksCont.addNew = async (req, res) => {
  const { title, author, publishYear, pages, genre, linkToBuy, isBanned } =
    req.body;

  const result = await booksModel.addNewBook(
    title,
    author,
    publishYear,
    pages,
    genre,
    linkToBuy,
    isBanned,
  );

  if (result) res.sendStatus(200);
  else res.status(400).send("Error adding the new book.");
};

booksCont.update = async (req, res) => {
  const id = req.params.id;
  const bookUpdate = req.body;
  const result = await booksModel.updateBook(id, bookUpdate);

  if (result) res.sendStatus(200);
  else res.status(400).send("Error updating the book.");
};

booksCont.delete = async (req, res) => {
  const id = req.params.id;
  const result = await booksModel.deleteBook(id);

  if (result) res.sendStatus(200);
  else res.status(400).send("Error updating the book.");
};

module.exports = booksCont;
