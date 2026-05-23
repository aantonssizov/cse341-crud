const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");
const commonValidatior = require("../validators/commonValidator");
const booksValidator = require("../validators/bookValidator");
const { handleErrors } = require("../utilities/");

// Route to get all books
router.get("/", handleErrors(booksController.getAll));

// Route to get a book by id
router.get(
  "/:id",
  commonValidatior.idValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(booksController.getById),
);

// Route to add a new book
router.post(
  "/",
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
  booksValidator.bookCreateValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(booksController.addNew),
);

// Route to update a book
router.put(
  "/:id",
  /*  #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: {
                          $ref: "#/components/schemas/bookUpdate"
                      }  
                  }
              }
          } 
      */
  commonValidatior.idValidationRules,
  booksValidator.bookUpdateValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(booksController.update),
);

// Route to delete a book
router.delete(
  "/:id",
  commonValidatior.idValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(booksController.delete),
);

module.exports = router;
