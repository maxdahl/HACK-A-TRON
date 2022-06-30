const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      min: 3,
      max: 20,
      trim: true,
      default: "",
    },
    lastname: {
      type: String,
      min: 3,
      max: 20,
      trim: true,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      max: 50,
      unique: true,
      match: [
        // eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    role: {
      type: String,
      required: [true, "Please add a role"],
      enum: ["worker", "admin", "partner"],
      default: "worker",
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6,
      select: false, // when we get a user through the api is not going to show the password
    },
    location: String,
    language: [],
    projectID: [],

    organization: {
      // value comes from a put request as response from the frontend once user has created the org
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
