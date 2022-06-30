// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

// @desc      Get all users
// @route     GET /api/v1/users
// @access    Private/Admin

// eslint-disable-next-line
const getUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find();

  res.status(200).json({
    success: true,
    data: allUsers,
  });
});

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin

// eslint-disable-next-line
const getSingleUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});
// @desc      update single user
// @route     PUT /api/v1/users/:id
// @access    Private/Admin

// eslint-disable-next-line
const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});
// @desc      create user
// @route     POST /api/v1/users
// @access    Private/Admin

// eslint-disable-next-line
const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    data: user,
  });
});
// @desc      Delete single user
// @route     DELETE /api/v1/users/:id
// @access    Private/Admin

// eslint-disable-next-line
const deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete();

  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
};
