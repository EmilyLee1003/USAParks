const User = require( '../models/User.js');
const express = require('express');

const router = express.Router();

router.post('/users', (req, res) => {
  console.log(req.body)
  User.find({
    where: {
      email: req.body.email
    }
  }).then( function (userData) {
    console.log(userData)
    if (!userData) {
      res.send({user: false, message: "No user with that email"});
      return
    }
    if (req.body.password, userData.password) {
      res.send({ user: userData.id, message: "Welcome Back" });
    }
    else {
      res.send({ user: false, message: "Password incorrect" });
    }
  }).catch(err => {
    res.send(err)
    console.log("We caught an error")
  })
});

router.post('/createuser', ({ body }, res) => {
  console.log(body)
  User.create(body)
    .then((done) => res.json(done))
    .catch((err) => res.status(400).json(err))
});

module.exports = router
