const { check, validationResult } = require("express-validator");
/*title,
    author,
    publishYear,
    pages,
    genre,
    linkToBuy,
    isBanned,*/

const bookCreateValidationRules = [
  check("title").notEmpty().isString(),
  check("author").notEmpty().isString(),
  check("publishYear").notEmpty().isNumeric().isLength({ min: 4, max: 4 }),
  check("pages").notEmpty().isNumeric(),
  check("genre").notEmpty().isString(),
  check("linkToBuy").notEmpty().isURL(),
  check("isBanned").notEmpty().isBoolean(),
];

const bookUpdateValidationRules = [
  check("title").optional().isString(),
  check("author").optional().isString(),
  check("publishYear").optional().isNumeric().isDate({ format: "yyyy" }),
  check("pages").optional().isNumeric(),
  check("genre").optional().isString(),
  check("linkToBuy").optional().isURL(),
  check("isBanned").optional().isBoolean(),
];

const bookIdValidationRules = [check("id").notEmpty().isMongoId()];

const bookValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  bookCreateValidationRules,
  bookUpdateValidationRules,
  bookIdValidationRules,
  bookValidationResult,
};
