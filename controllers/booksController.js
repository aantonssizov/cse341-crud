const booksModel = require("../models/booksModel");
const booksCont = {};

booksCont.getAll = async (req, res) => {
  const books = await booksModel.getAllBooks();
  res.json(books);
};

booksCont.getById = async (req, res) => {
  const id = req.params.id;
  const book = await booksModel.getBookById(id);

  if (!book) res.send("Not found.").status(500);
  else res.json(book);
};

booksCont.addNew = async (req, res) => {
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/bookCreate"
                    }  
                }
            }
        } 
    */
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
  else res.send("Error adding the new book.").status(500);
};

module.exports = booksCont;
