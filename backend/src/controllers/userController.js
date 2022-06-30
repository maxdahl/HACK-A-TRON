const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const sendTokenResponse = require("../utils/sendToken");
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

// @desc      Register
// @route     POST /api/v1/users/register
// @access    Private/Admin

// eslint-disable-next-line
const registerUser = asyncHandler(async (req, res, next) => {
  const { firstname, lastname, email, password, role, location, language } =
    req.body;
  if (!email || !password) {
    return next(new ErrorResponse("Please add all fields", 400));
  }

  // check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new ErrorResponse("Email already in use", 400));
  }

  // Create user
  const user = await User.create({
    firstname,
    lastname,
    email,
    role,
    password,
    location,
    language,
  });
  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/users/login
// @access    Private/Admin

// eslint-disable-next-line
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("please provide an email and password", 400));
  }

  // check for user email
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("invalid credentials", 401));
  }

  // check if password matches
  const isMatch = await user.matchPassword(password); // true or false

  if (!isMatch) {
    return next(new ErrorResponse("invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

module.exports = {
  getUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
};
