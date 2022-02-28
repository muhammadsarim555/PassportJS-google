const express = require("express");
const signup = express.Router();

const passport = require("../../../auth/");

signup.post("/signup", (req, res) => {
  passport.authenticate("google-signup", function (error, user, info) {
    console.log("🚀 ~ file: signup.js ~ line 8 ~ user, info",{ user, info})
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }
    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
      return res.json({user,info});
    });
  })(req, res);
});

module.exports = signup;
