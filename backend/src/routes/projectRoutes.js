const express = require("express");
const {
  getProjects,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

/* const Project = require("../models/Project"); */

const router = express.Router({ mergeParams: true });

router.route("/").get(getProjects).post(createProject);
router
  .route("/:id")
  .get(getSingleProject)
  .put(updateProject)
  .delete(deleteProject);

module.exports = router;
