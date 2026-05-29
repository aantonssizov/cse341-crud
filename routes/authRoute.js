const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oidc");
const router = express.Router();
const { handleErrors } = require("../utilities/");
const connectToDb = require("../database/connection");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ["profile"],
    },
    async (issuer, profile, cb) => {
      try {
        const db = await connectToDb;
        const fcCollection = await db.collection("federated_credentials");
        const usersCollection = await db.collection("users");
        const fc = await fcCollection.findOne({
          provider: issuer,
          subject: profile.id,
        });

        if (!fc) {
          const addResult = await usersCollection.insertOne({
            name: profile.displayName,
          });

          if (addResult) {
            const fcAddResult = await fcCollection.insertOne({
              user: addResult.insertedId,
              provider: issuer,
              subject: profile.id,
            });

            if (fcAddResult) {
              const user = {
                _id: addResult.insertedId,
                name: profile.displayName,
              };

              return cb(null, user);
            }
          }
        } else {
          const user = await usersCollection.findOne({ _id: fc.user });

          if (!user) return cb(null, false);
          return cb(null, user);
        }
      } catch (err) {
        return cb(err);
      }
    },
  ),
);

passport.serializeUser((user, cb) => {
  process.nextTick(() => {
    cb(null, { _id: user._id, username: user.username, name: user.name });
  });
});

passport.deserializeUser((user, cb) => {
  process.nextTick(() => {
    return cb(null, user);
  });
});

router.get("/login", handleErrors(passport.authenticate("google")));

router.get(
  "/redirect/google",
  handleErrors(
    passport.authenticate("google", {
      successRedirect: "/api-docs",
      failureRedirect: "/oauth2/login",
    }),
  ),
);

router.get(
  "/logout",
  handleErrors(async (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.redirect("/api-docs");
    });
  }),
);

module.exports = router;
