const express = require("express");
const {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

/* const User = require("../models/User"); */

const router = express.Router({ mergeParams: true });

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
