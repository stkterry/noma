const bcrypt = require('bcryptjs');
const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();

const { eRes } = require("../../validation/validation-util");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const User = require('../../models/User');
const keys = require("../../config/keys");

// User default errors
const ERRORS = {
  emailUnavailable: { "A user has already registered with that email": null },
  usernameUnavailable: { "A user has already registered with that username": null },
  userNotFound: { "No user with that username was found": null },
  emailNotFound: { "No user with that email was found": null },
  incorrectPassword: { "Password incorrect": null }
}

// User maker
const createUser = (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save()
        .then(user => genToken(user, res))
        .catch(err => console.log(err));
    })
  })
}

// Token generator
const genToken = (user, res) => {
  jwt.sign(
    {id: user.id, username: user.username, email: user.email},
    keys.secretOrKey,
    // { expiresIn: 3600 }, // Disabled
    (err, token) => res.json({ success: true, token: "Bearer " + token })
  )
}

// POST ========================================================================
// Register
router.post('/register', (req, res) => {

  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) eRes(res, 400, errors);

  User.findOne({ email: req.body.email, username: req.body.username })
    .then(user => {
      if (user) {
        if (user.email === req.body.email) eRes(res, 400, ERRORS.emailUnavailable)
        else if (user.username === req.body.username) eRes(res, 400, ERRORS.usernameUnavailable)
      }
      else createUser(req, res);
    })
})

// Login
router.post('/login', (req, res) => {

  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) eRes(res, 400, errors);
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) eRes(res, 404, ERRORS.userNotFound);

      bcrypt.compare(req.body.password, user.password)
        .then(isMatch => {
          if (isMatch) genToken(user, res)
          else eRes(res, 400, ERRORS.incorrectPassword);
        })
    })
})
// -----------------------------------------------------------------------------

// GET =========================================================================
// Test
router.get('/test', (req, res) => res.json({ msg: 'This is the users route!!!'}));

// Current
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

// -----------------------------------------------------------------------------

module.exports = router;