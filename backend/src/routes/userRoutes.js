const express = require("express");
const { getUsers, getUser } = require("../controllers/userController");

const User = require("../models/User");

const router = express.Router({ mergeParams: true });

router.route("/").get(getUsers);

// router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
// router.route("/get/UsersInOrg").get(getUsersInOrg);

module.exports = router;
