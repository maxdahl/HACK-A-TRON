const express = require("express");
const { getUsers /* , getUser */ } = require("../controllers/userController");

/* const User = require("../models/User"); */

const router = express.Router({ mergeParams: true });

router.route("/").get(getUsers);

module.exports = router;
