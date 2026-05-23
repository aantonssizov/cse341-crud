const { check, validationResult } = require("express-validator");

const movieCreateValidationRules = [
  check("title").notEmpty().isString(),
  check("director").notEmpty().isString(),
  check("publishYear").notEmpty().isNumeric().isLength({ min: 4, max: 4 }),
  check("runtimeMinutes").notEmpty().isNumeric(),
  check("genre").notEmpty().isString(),
  check("linkToBuy").notEmpty().isURL(),
  check("isBanned").notEmpty().isBoolean(),
];

const movieUpdateValidationRules = [
  check("title").optional().isString(),
  check("director").optional().isString(),
  check("publishYear").optional().isNumeric().isLength({ min: 4, max: 4 }),
  check("runtimeMinutes").optional().isNumeric(),
  check("genre").optional().isString(),
  check("linkToBuy").optional().isURL(),
  check("isBanned").optional().isBoolean(),
];

module.exports = {
  movieCreateValidationRules,
  movieUpdateValidationRules,
};
