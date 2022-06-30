const express = require("express");
const {
  getClients,
  getSingleClient,
  updateClient,
  createClient,
  deleteClient,
} = require("../controllers/clientController");

/* const User = require("../models/User"); */

const router = express.Router({ mergeParams: true });

router.route("/").get(getClients).post(createClient);
router
  .route("/:id")
  .get(getSingleClient)
  .put(updateClient)
  .delete(deleteClient);

module.exports = router;
