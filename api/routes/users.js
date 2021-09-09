const router = require("express").Router();
let User = require("../models/users.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:username").get((req, res) => {
  User.findOne({ username: req.params.username })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const photouri = req.body.photouri;
  const profession = req.body.profession;
  const position = req.body.position;
  const addressid = req.body.addressid;

  const newUser = new User({
    username,
    password,
    name,
    lastname,
    email,
    photouri,
    profession,
    position,
    addressid,
  });
  newUser
    .save()
    .then(() => res.json("User added successfully" + newUser))
    .catch((err) => {
      if (
        (11000 === err.code || 11001 === err.code) &&
        err.keyPattern.username === 1
      ) {
        res.status(400).json("Another user with that username already exists.");
      } else if (
        (11000 === err.code || 11001 === err.code) &&
        err.keyPattern.email === 1
      ) {
        res.status(400).json("Another user with that email already exists.");
      } else {
        res.status(400).json(err.message);
      }
    });
});

router.route("/:username").put((req, res) => {
  User.findOne({ username: req.params.username })
    .then((user) => {
      user.username = req.body.username;
      user.password = req.body.password;
      user.name = req.body.name;
      user.lastname = req.body.lastname;
      user.email = req.body.email;
      user.photouri = req.body.photouri;
      user.profession = req.body.profession;
      user.position = req.body.position;
      user.addressid = req.body.addressid;
      if (user.username !== req.params.username) {
        {
          res
            .status(400)
            .json("Username in url does not match username in body.");
          return;
        }
      }
      user
        .save()
        .then(() => res.json("User updated."))
        .catch((err) => {
          if (
            (11000 === err.code || 11001 === err.code) &&
            err.keyPattern.username === 1
          ) {
            res
              .status(400)
              .json("Another user with that username already exists.");
          } else if (
            (11000 === err.code || 11001 === err.code) &&
            err.keyPattern.email === 1
          ) {
            res
              .status(400)
              .json("Another user with that email already exists.");
          } else {
            res.status(400).json(err.message);
          }
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
