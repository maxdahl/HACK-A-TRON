// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Project = require("../models/Project");

// @desc      Get all projects
// @route     GET /api/v1/projects
// @access    Private/Admin

// eslint-disable-next-line
const getProjects = asyncHandler(async (req, res, next) => {
  const allProjects = await Project.find();

  res.status(200).json({
    success: true,
    data: allProjects,
  });
});

// @desc      Get single project
// @route     GET /api/v1/projects/:id
// @access    Private/Admin

// eslint-disable-next-line
const getSingleProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc      Update project
// @route     PUT /api/v1/projects/:id
// @access    Private/Admin

// eslint-disable-next-line
const updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc      Create project
// @route     POST /api/v1/projects
// @access    Private/Admin

// eslint-disable-next-line
const createProject = asyncHandler(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(200).json({
    success: true,
    data: project,
  });
});

// @desc      delete project
// @route     DELETE /api/v1/projects/:id
// @access    Private/Admin

// eslint-disable-next-line
const deleteProject = asyncHandler(async (req, res, next) => {
  await Project.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getProjects,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
