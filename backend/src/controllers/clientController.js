// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const Client = require("../models/Client");

// @desc      Get all clients
// @route     GET /api/v1/clients
// @access    Private/Admin

// eslint-disable-next-line
const getClients = asyncHandler(async (req, res, next) => {
  const allClients = await Client.find();

  res.status(200).json({
    success: true,
    data: allClients,
  });
});

// @desc      Get single client
// @route     GET /api/v1/clients/:id
// @access    Private/Admin

// eslint-disable-next-line
const getSingleClient = asyncHandler(async (req, res, next) => {
  const client = await Client.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: client,
  });
});
// @desc      update single client
// @route     PUT /api/v1/clients/:id
// @access    Private/Admin

// eslint-disable-next-line
const updateClient = asyncHandler(async (req, res, next) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: client,
  });
});
// @desc      create client
// @route     POST /api/v1/clients
// @access    Private/Admin

// eslint-disable-next-line
const createClient = asyncHandler(async (req, res, next) => {
  const client = await Client.create(req.body);

  res.status(200).json({
    success: true,
    data: client,
  });
});
// @desc      Delete single client
// @route     DELETE /api/v1/clients/:id
// @access    Private/Admin

// eslint-disable-next-line
const deleteClient = asyncHandler(async (req, res, next) => {
  await Client.findByIdAndDelete();

  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getClients,
  getSingleClient,
  updateClient,
  createClient,
  deleteClient,
};
