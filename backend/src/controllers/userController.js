const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const User = require("../models/User");

// @desc      Get all users
// @route     GET /api/v1/user
// @access    Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  const allUsers = await User.find();

  res.status(200).json({
    success: true,
    data: allUsers,
  });
});

module.exports = {
  getUsers,
};
