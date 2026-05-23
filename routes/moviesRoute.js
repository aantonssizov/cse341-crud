const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const commonValidatior = require("../validators/commonValidator");
const moviesValidator = require("../validators/movieValidator");
const { handleErrors } = require("../utilities");

// Route to get all movies
router.get("/", handleErrors(moviesController.getAll));

// Route to get a movie by id
router.get(
  "/:id",
  commonValidatior.idValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(moviesController.getById),
);

// Route to add a new movie
router.post(
  "/",
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/movieCreate"
                    }  
                }
            }
        } 
    */
  moviesValidator.movieCreateValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(moviesController.addNew),
);

// Route to update a movie
router.put(
  "/:id",
  /*  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/movieUpdate"
                    }  
                }
            }
        } 
    */
  commonValidatior.idValidationRules,
  moviesValidator.movieUpdateValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(moviesController.update),
);

// Route to delete a movie
router.delete(
  "/:id",
  commonValidatior.idValidationRules,
  commonValidatior.commonValidationResult,
  handleErrors(moviesController.delete),
);

module.exports = router;
