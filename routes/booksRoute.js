const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const booksValidator = require("../validators/bookValidator");
const { handleErrors } = require("../utilities/");

// Route to get all books
router.get("/", handleErrors(booksController.getAll));

// Route to get a book by id
router.get(
  "/:id",
  booksValidator.bookIdValidationRules,
  booksValidator.bookValidationResult,
  handleErrors(booksController.getById),
);

// Route to add a new book
router.post(
  "/",
  booksValidator.bookCreateValidationRules,
  booksValidator.bookValidationResult,
  handleErrors(booksController.addNew),
);

// Route to update a book
router.put(
  "/:id",
  booksValidator.bookIdValidationRules,
  booksValidator.bookValidationResult,
  handleErrors(booksController.update),
);

// Route to delete a book
router.delete(
  "/:id",
  booksValidator.bookIdValidationRules,
  booksValidator.bookValidationResult,
  handleErrors(booksController.delete),
);

module.exports = router;
