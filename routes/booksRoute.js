const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Route to get all books
router.get("/", booksController.getAll);

// Route to get a book by id
router.get("/:id", booksController.getById);

// Route to add a new book
router.post("/", booksController.addNew);

module.exports = router;
