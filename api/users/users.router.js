const Users = require("../users");
// const {CreateUser, GetUserById, GetUsers, UpdateUser} = require("./users.controller");
const { getUsers } = require("./users.controller");
const router = require("express").Router();

router.get("/", getUsers);
// router.get("/:id", GetUserById);
// router.post("/", CreateUser);
// route.put("/", UpdateUser);

module.exports = router;
