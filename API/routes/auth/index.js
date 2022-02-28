const express = require("express");
const auth = express.Router();

const passport = require("passport");

auth.use("/google", require("./google/signin"), require("./google/signup"));

auth.get(
  "/google/verifyToken",
  passport.authenticate("google-verify-token"),
  async (req, res, next) => {
    res.send({
      success: true,
      user: req.user,
    });
  }
);

module.exports = auth;
