const { check, validationResult } = require("express-validator");

const idValidationRules = [check("id").notEmpty().isMongoId()];

const commonValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

module.exports = { idValidationRules, commonValidationResult };
