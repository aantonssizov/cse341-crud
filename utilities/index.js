handleErrors = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

isAuthenticated = (req, res, next) => {
  if (req.session.passport?.user) {
    next();
  } else {
    res.status(403).send("User not logged in.");
  }
};

module.exports = { handleErrors, isAuthenticated };
